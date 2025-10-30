import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "@/components/home/blog";

interface BlogItem {
  id: number;
  blog_slug: string;
  blog_title: string;
  blog_short_description: string;
  blog_banner_image: string | null;
  blog_created_date: string;
  created_by: string;
  blog_categories_ids: string;
  categories: string;
}

interface ImageUrl {
  image_for: string;
  image_url: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogItem[]>([]);
  const [imageUrls, setImageUrls] = useState<{ blog: string; noImage: string }>({
    blog: "",
    noImage: "",
  });
  const [featuredImageUrls, setFeaturedImageUrls] = useState<{
    blog: string;
    noImage: string;
  }>({
    blog: "",
    noImage: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | The Agility";

    const fetchData = async () => {
      try {
        // ✅ Fetch both APIs in parallel
        const [frontRes, featuredRes] = await Promise.all([
          axios.get("https://theagility.in/crmapi/public/api/getFrontBlogs"),
          axios.get("https://theagility.in/crmapi/public/api/getFeaturedBlogs"),
        ]);

        const frontResult = frontRes.data;
        const featuredResult = featuredRes.data;

        if (frontResult?.data && frontResult?.image_url) {
          const blogImageUrl =
            frontResult.image_url.find(
              (item: ImageUrl) => item.image_for === "Blog"
            )?.image_url || "";
          const noImageUrl =
            frontResult.image_url.find(
              (item: ImageUrl) => item.image_for === "No Image"
            )?.image_url || "";

          setBlogs(frontResult.data);
          setImageUrls({ blog: blogImageUrl, noImage: noImageUrl });
        }

        if (featuredResult?.data && featuredResult?.image_url) {
          const featuredBlogImageUrl =
            featuredResult.image_url.find(
              (item: ImageUrl) => item.image_for === "Blog"
            )?.image_url || "";
          const featuredNoImageUrl =
            featuredResult.image_url.find(
              (item: ImageUrl) => item.image_for === "No Image"
            )?.image_url || "";

          setFeaturedBlogs(featuredResult.data);
          setFeaturedImageUrls({
            blog: featuredBlogImageUrl,
            noImage: featuredNoImageUrl,
          });
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-sm">Loading blogs...</p>
      </div>
    );
  }


  return (
    <BlogList
      blogs={blogs}
      imageUrls={imageUrls}
      featuredBlogs={featuredBlogs}
      featuredImageUrls={featuredImageUrls}
    />
  );
};

export default Blog;
