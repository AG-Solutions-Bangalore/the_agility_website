import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ArrowRight, Loader, Loader2 } from "lucide-react";
import DOMPurify from 'dompurify';
import moment from "moment";

interface BlogData {
  id: number;
  blog_slug: string;
  blog_title: string;
  blog_short_description: string;
  blog_description: string;
  blog_banner_image: string | null;
  blog_created_date: string;
  created_by: string;
  categories: string;
}

interface ImageUrl {
  image_for: string;
  image_url: string;
}

interface SponsorItem {
  sponsors_image: string;
  sponsors_url: string | null;
}

interface FeaturedItem {
  id: number;
  blog_slug: string;
  blog_title: string;
  blog_short_description: string;
  blog_banner_image: string | null;
  blog_created_date: string;
  created_by: string;
}

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<BlogData | null>(null);
  const [imageUrls, setImageUrls] = useState<{ blog: string; noImage: string }>({
    blog: "",
    noImage: "",
  });
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [sponsors, setSponsors] = useState<SponsorItem[]>([]);
  const [featured, setFeatured] = useState<FeaturedItem[]>([]);
console.log("sponsors",sponsors)
  const createSanitizedHTML = (htmlContent: string) => {
      return {
        __html: DOMPurify.sanitize(htmlContent)
      };
    };

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://theagility.in/crmapi/public/api/getBlogsBySlug/${id}`
        );
        const frontResult = res.data;

        if (frontResult?.data && frontResult?.image_url) {
          const blogImageUrl =
            frontResult.image_url.find(
              (item: ImageUrl) => item.image_for === "Blog"
            )?.image_url || "";
          const noImageUrl =
            frontResult.image_url.find(
              (item: ImageUrl) => item.image_for === "No Image"
            )?.image_url || "";

          setData(frontResult.data);
          setImageUrls({ blog: blogImageUrl, noImage: noImageUrl });
          setSponsors(frontResult.sponsors || []);
          setFeatured(frontResult.featured || []);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id]);
  useEffect(() => {
    if (sponsors.length <= 1) return;
  
    const interval = setInterval(() => {
      setCurrentSponsorIndex((prevIndex) => 
        prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
  
    return () => clearInterval(interval);
  }, [sponsors.length]);
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      await axios.post('https://theagility.in/crmapi/public/api/createSubscribeEmail', {
        subscribe_email: email
      });
      setEmail('');
      setMessage('Successfully subscribed! Thank you for joining us.');
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return(
    <>
    <section className='relative w-full pt-24 2xl:pb-20 pb-10 before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-yellow_gradient before:via-blue-900/15 before:to-yellow_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
   

 


    <div className="container px-4">
      {/* <div className="flex w-full justify-center item-center mb-16">

        <div className="hidden md:flex gap-2.5  justify-start items-center h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-300">
          <a href="index.html" className="text-neutral-700  dark:text-gray-300 text-base font-medium  leading-normal">Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" className="fill-neutral-700 dark:fill-neutral-300">
            <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z"></path>
          </svg>
          <a href="category.html" className="text-neutral-700  dark:text-gray-300 text-base font-medium leading-normal">Blog</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" className="fill-neutral-700 dark:fill-neutral-300">
            <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z"></path>
          </svg>
          <span className="text-neutral-900  dark:text-gray-300 text-base font-bold leading-snug">It seeks to inspire and motivate individuals </span>
        </div>
      </div> */}
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <div className="justify-center items-center gap-4 flex flex-row md:flex-row">
          {/* <a href="category.html" className="inline-flex  px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-300 dark:border-neutral-300 justify-center items-center gap-2.5">
            <span className="text-neutral-900  text-sm font-medium leading-none">{data?.categories}</span>
          </a> */}
          <div className="justify-start items-center gap-2 flex">
            <a href="author.html"><img className="w-9 h-9 rounded-3xl" src="https://ideko-html-demo.vercel.app/assets/imgs/avatar/avatar-10.png"/></a>
            <div className="text-neutral-700  dark:text-gray-300 text-sm font-medium leading-none dark:text-neutral-dark-700"><a href="author.html">{data?.created_by}</a> - {moment(data?.blog_created_date).format("DD MMMM YYYY")}</div>
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-neutral-950 dark:text-neutral-300 max-w-5xl leading-snug">
     {data?.blog_title}
        </h1>
        <p className="text-base md:text-lg font-medium text-neutral-950 dark:text-gray-300 max-w-3xl">
          
          
          {data?.blog_short_description}</p>
      </div>
    </div>

    
    </section>



{/* ------------------------------------- */}
<section className="relative py-12">
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-[58px]">
        <div className="post-content max-w-[850px]">
         

          <div className="single-content text-base font-medium text-neutral-950 dark:text-neutral-300 leading-relaxed max-w-[850px]">
            <img src={imageUrls?.blog + data?.blog_banner_image} alt={data?.blog_title} className="rounded-3xl mb-8" />



            
            <div 
                className="mb-4 blog-content"
                dangerouslySetInnerHTML={createSanitizedHTML(data?.blog_description || '')}
              />
           


          </div>
     

          <div className="single-bottom mt-16 py-8 border-t border-neutral-300 dark:border-neutral-300 text-lg font-bold text-neutral-950 dark:text-neutral-300 leading-relaxed max-w-[850px]">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <h6 className="text-lg font-bold mb-4">Popular Tag</h6>
                <div className="flex flex-wrap gap-2">
          
               
                      {data?.categories
    ?.split(",")
    .map((item, index) => (
      <span
        key={index}
        className="hover-up px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-300  text-base font-medium hover:bg-neutral-300 dark:text-neutral-300  hover:dark:bg-neutral-300 transition-all duration-300 "
      >
        {item.trim()}
      </span>
    ))}
                </div>
              </div>
              <div>
                <h6 className="text-lg font-bold mb-4">Share:</h6>
                <div className="flex gap-2">
                  <div className="size-9 rounded-full flex justify-center items-center border border-neutral-300 dark:border-neutral-300 cursor-pointer hover-up hover:bg-neutral-300 dark:hover:bg-neutral-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" className="fill-neutral-950 dark:fill-neutral-300">
                      <path d="M8.03125 9H5.6875V16H2.5625V9H0V6.125H2.5625V3.90625C2.5625 1.40625 4.0625 0 6.34375 0C7.4375 0 8.59375 0.21875 8.59375 0.21875V2.6875H7.3125C6.0625 2.6875 5.6875 3.4375 5.6875 4.25V6.125H8.46875L8.03125 9Z"></path>
                    </svg>
                  </div>
                  <div className="size-9 rounded-full flex justify-center items-center border border-neutral-300 dark:border-neutral-300 cursor-pointer hover-up hover:bg-neutral-300 dark:hover:bg-neutral-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" className="fill-neutral-950 dark:fill-neutral-300">
                      <g clip-path="url(#clip0_191_5465)">
                        <path d="M10.083 6.77491L15.9113 0H14.5302L9.46951 5.88256L5.42755 0H0.765625L6.87786 8.89547L0.765625 16H2.14682L7.49104 9.78782L11.7596 16H16.4216L10.0827 6.77491H10.083ZM8.1913 8.97384L7.57201 8.08805L2.64448 1.03974H4.76591L8.74248 6.72795L9.36178 7.61374L14.5308 15.0075H12.4094L8.1913 8.97418V8.97384Z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="size-9 rounded-full flex justify-center items-center border border-neutral-300 dark:border-neutral-300 cursor-pointer hover-up hover:bg-neutral-300 dark:hover:bg-neutral-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" className="fill-neutral-950 dark:fill-neutral-300">
                      <path d="M7.60938 3.39062C9.57812 3.39062 11.2031 5.01562 11.2031 6.98438C11.2031 8.98438 9.57812 10.5781 7.60938 10.5781C5.60938 10.5781 4.01562 8.98438 4.01562 6.98438C4.01562 5.01562 5.60938 3.39062 7.60938 3.39062ZM7.60938 9.32812C8.89062 9.32812 9.92188 8.29688 9.92188 6.98438C9.92188 5.70312 8.89062 4.67188 7.60938 4.67188C6.29688 4.67188 5.26562 5.70312 5.26562 6.98438C5.26562 8.29688 6.32812 9.32812 7.60938 9.32812ZM12.1719 3.26562C12.1719 2.79688 11.7969 2.42188 11.3281 2.42188C10.8594 2.42188 10.4844 2.79688 10.4844 3.26562C10.4844 3.73438 10.8594 4.10938 11.3281 4.10938C11.7969 4.10938 12.1719 3.73438 12.1719 3.26562ZM14.5469 4.10938C14.6094 5.26562 14.6094 8.73438 14.5469 9.89062C14.4844 11.0156 14.2344 11.9844 13.4219 12.8281C12.6094 13.6406 11.6094 13.8906 10.4844 13.9531C9.32812 14.0156 5.85938 14.0156 4.70312 13.9531C3.57812 13.8906 2.60938 13.6406 1.76562 12.8281C0.953125 11.9844 0.703125 11.0156 0.640625 9.89062C0.578125 8.73438 0.578125 5.26562 0.640625 4.10938C0.703125 2.98438 0.953125 1.98438 1.76562 1.17188C2.60938 0.359375 3.57812 0.109375 4.70312 0.046875C5.85938 -0.015625 9.32812 -0.015625 10.4844 0.046875C11.6094 0.109375 12.6094 0.359375 13.4219 1.17188C14.2344 1.98438 14.4844 2.98438 14.5469 4.10938ZM13.0469 11.1094C13.4219 10.2031 13.3281 8.01562 13.3281 6.98438C13.3281 5.98438 13.4219 3.79688 13.0469 2.85938C12.7969 2.26562 12.3281 1.76562 11.7344 1.54688C10.7969 1.17188 8.60938 1.26562 7.60938 1.26562C6.57812 1.26562 4.39062 1.17188 3.48438 1.54688C2.85938 1.79688 2.39062 2.26562 2.14062 2.85938C1.76562 3.79688 1.85938 5.98438 1.85938 6.98438C1.85938 8.01562 1.76562 10.2031 2.14062 11.1094C2.39062 11.7344 2.85938 12.2031 3.48438 12.4531C4.39062 12.8281 6.57812 12.7344 7.60938 12.7344C8.60938 12.7344 10.7969 12.8281 11.7344 12.4531C12.3281 12.2031 12.8281 11.7344 13.0469 11.1094Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
         
          <div className="relative single-pagination mt-16 p-8 border border-neutral-300 dark:border-neutral-300 rounded-xl text-lg font-bold text-neutral-950 dark:text-neutral-300 leading-relaxed max-w-[850px]">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="prev flex gap-4  hover-up">
                <a href="#" className="text-neutral-950 dark:text-neutral-300 rounded-full w-12 h-12 min-w-12 bg-primary-light-950 dark:bg-primary-dark-200 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-300">
                    <path d="M17.4922 7.49023C17.4922 8.19336 16.9453 8.74023 16.2812 8.74023H4.28906L8.39062 12.8809C8.89844 13.3496 8.89844 14.1699 8.39062 14.6387C8.15625 14.873 7.84375 14.9902 7.53125 14.9902C7.17969 14.9902 6.86719 14.873 6.63281 14.6387L0.382812 8.38867C-0.125 7.91992 -0.125 7.09961 0.382812 6.63086L6.63281 0.380859C7.10156 -0.126953 7.92188 -0.126953 8.39062 0.380859C8.89844 0.849609 8.89844 1.66992 8.39062 2.13867L4.28906 6.24023H16.2812C16.9453 6.24023 17.4922 6.82617 17.4922 7.49023Z"></path>
                  </svg>
                </a>
                <a >Fashionable Bytes: Blending Style with Tech Savvy</a>
              </div>
              <div className="next flex gap-4 text-end hover-up">
                <a href="single.html">Living the Art-Tech Dream: My Multifaceted Life</a>
                <a href="#" className="text-neutral-950 rounded-full w-12 h-12 min-w-12 bg-primary-light-950  dark:bg-primary-dark-200 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-300">
                    <path d="M0 7.49023C0 8.19336 0.546875 8.74023 1.21094 8.74023H13.2031L9.10156 12.8809C8.59375 13.3496 8.59375 14.1699 9.10156 14.6387C9.33594 14.873 9.64844 14.9902 9.96094 14.9902C10.3125 14.9902 10.625 14.873 10.8594 14.6387L17.1094 8.38867C17.6172 7.91992 17.6172 7.09961 17.1094 6.63086L10.8594 0.380859C10.3906 -0.126953 9.57031 -0.126953 9.10156 0.380859C8.59375 0.849609 8.59375 1.66992 9.10156 2.13867L13.2031 6.24023H1.21094C0.546875 6.24023 0 6.82617 0 7.49023Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="v-divider w-64 h-[1px] md:h-12 md:w-[1px] bg-neutral-300 dark:bg-neutral-300 absolute top-1/2 left-10 md:left-1/2 md:top-10"></div>
          </div>
         
          
        </div>
      
        <div className="sidebar flex flex-col gap-12 md:max-w-[380px]">
       
          <div className="subscrible p-12 rounded-3xl bg-neutral-200 dark:bg-neutral-dark-200">
            <h4 className="mb-4 text-2xl font-bold text-neutral-950 dark:text-neutral-900 ">
              Subscribe Us
            </h4>
            <p className="font-medium text-neutral-700 dark:text-neutral-dark-700 mb-4 lg:mb-8 max-w-[350px]">
              Get the latest creative news from AGILITY
            </p>
            <form className="max-w-full overflow-hidden" onSubmit={handleSubmit}>
  <div className="flex flex-col md:flex-row mb-4 md:bg-neutral-0 dark:bg-neutral-dark-200 border border-neutral-950 dark:border-neutral-700 rounded-xl overflow-hidden">
    <input 
      className="focus:outline-none transition duration-200 py-4 bg-neutral-0 dark:bg-neutral-0 dark:text-black rounded-full pl-6 w-full mb-2 md:mb-0" 
      type="email" 
      placeholder="Your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <button 
      className="group w-full mr-[-3px] sm:w-auto h-14 py-4 px-6 rounded-xl  bg-neutral-900 dark:bg-neutral-700 transition duration-200 flex items-center justify-center gap-2" 
      type="submit"
      disabled={loading}
    >
      {loading ? <Loader2 className='text-white animate-spin'/> : <ArrowRight className='text-white'/>}
    </button>
  </div>
  {message && (
    <p className={`text-sm pl-4 ${message.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
      {message}
    </p>
  )}
  <p className="text-neutral-700 text-sm pl-4">* Unsubscribe anytime</p>
</form>
          </div>
   
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl text-neutral-950 font-bold dark:text-neutral-300">Featured <span className="font-light">Posts</span></h4>
            <div className="flex flex-col gap-6">


            {featured.slice(0,4).map((blog) => (
            <div className="w-full flex items-center gap-2.5  hover-up">
                <div className="justify-start items-center gap-4 inline-flex">
                  <a href="single.html" className="rounded-2xl overflow-hidden max-h-[90px] max-w-[106px]">
                    <img src={imageUrls?.blog + blog.blog_banner_image} alt={blog?.blog_title}/>
                  </a>
                  <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <h4>
                      <a className="text-neutral-950 dark:text-neutral-300 text-base font-bold item-link" href="single.html">{blog?.blog_title}</a>
                    </h4>
                    <p className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-300">{blog?.created_by} - {moment(blog?.blog_created_date).format("MMM DD YYYY")}</p>
                  </div>
                </div>
              </div>

            ))}
              
            
            
            </div>
          </div>

          <div className="about p-12 rounded-3xl bg-black/10">
            <h1 className="mb-8">
              <a href="index.html">
                <img src="https://ideko-html-demo.vercel.app/assets/imgs/template/logo.svg" alt="logo" className="flex-shrink-0 relative dark:hidden"/>
                <img src="https://ideko-html-demo.vercel.app/assets/imgs/template/logo-white.svg" alt="logo" className="flex-shrink-0 relative hidden dark:inline-block"/>
              </a>
            </h1>
            <p className="font-medium text-neutral-950 dark:text-neutral-300 mb-8 lg:mb-12 max-w-[350px]">
              It involves entrepreneurship, management, marketing, finance, and many other aspects. Businesses aim to generate
            </p>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-300 cursor-pointer hover-up hover:bg-primary-light-200 dark:hover:bg-primary-dark-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" className="fill-neutral-950 dark:fill-neutral-300">
                  <path d="M8.03125 9H5.6875V16H2.5625V9H0V6.125H2.5625V3.90625C2.5625 1.40625 4.0625 0 6.34375 0C7.4375 0 8.59375 0.21875 8.59375 0.21875V2.6875H7.3125C6.0625 2.6875 5.6875 3.4375 5.6875 4.25V6.125H8.46875L8.03125 9Z"></path>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-300 cursor-pointer hover-up hover:bg-primary-light-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" className="fill-neutral-950 dark:fill-neutral-300">
                  <g clip-path="url(#clip0_191_5465)">
                    <path d="M10.083 6.77491L15.9113 0H14.5302L9.46951 5.88256L5.42755 0H0.765625L6.87786 8.89547L0.765625 16H2.14682L7.49104 9.78782L11.7596 16H16.4216L10.0827 6.77491H10.083ZM8.1913 8.97384L7.57201 8.08805L2.64448 1.03974H4.76591L8.74248 6.72795L9.36178 7.61374L14.5308 15.0075H12.4094L8.1913 8.97418V8.97384Z"></path>
                  </g>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-300 cursor-pointer hover-up hover:bg-primary-light-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" className="fill-neutral-950 dark:fill-neutral-300">
                  <path d="M7.60938 3.39062C9.57812 3.39062 11.2031 5.01562 11.2031 6.98438C11.2031 8.98438 9.57812 10.5781 7.60938 10.5781C5.60938 10.5781 4.01562 8.98438 4.01562 6.98438C4.01562 5.01562 5.60938 3.39062 7.60938 3.39062ZM7.60938 9.32812C8.89062 9.32812 9.92188 8.29688 9.92188 6.98438C9.92188 5.70312 8.89062 4.67188 7.60938 4.67188C6.29688 4.67188 5.26562 5.70312 5.26562 6.98438C5.26562 8.29688 6.32812 9.32812 7.60938 9.32812ZM12.1719 3.26562C12.1719 2.79688 11.7969 2.42188 11.3281 2.42188C10.8594 2.42188 10.4844 2.79688 10.4844 3.26562C10.4844 3.73438 10.8594 4.10938 11.3281 4.10938C11.7969 4.10938 12.1719 3.73438 12.1719 3.26562ZM14.5469 4.10938C14.6094 5.26562 14.6094 8.73438 14.5469 9.89062C14.4844 11.0156 14.2344 11.9844 13.4219 12.8281C12.6094 13.6406 11.6094 13.8906 10.4844 13.9531C9.32812 14.0156 5.85938 14.0156 4.70312 13.9531C3.57812 13.8906 2.60938 13.6406 1.76562 12.8281C0.953125 11.9844 0.703125 11.0156 0.640625 9.89062C0.578125 8.73438 0.578125 5.26562 0.640625 4.10938C0.703125 2.98438 0.953125 1.98438 1.76562 1.17188C2.60938 0.359375 3.57812 0.109375 4.70312 0.046875C5.85938 -0.015625 9.32812 -0.015625 10.4844 0.046875C11.6094 0.109375 12.6094 0.359375 13.4219 1.17188C14.2344 1.98438 14.4844 2.98438 14.5469 4.10938ZM13.0469 11.1094C13.4219 10.2031 13.3281 8.01562 13.3281 6.98438C13.3281 5.98438 13.4219 3.79688 13.0469 2.85938C12.7969 2.26562 12.3281 1.76562 11.7344 1.54688C10.7969 1.17188 8.60938 1.26562 7.60938 1.26562C6.57812 1.26562 4.39062 1.17188 3.48438 1.54688C2.85938 1.79688 2.39062 2.26562 2.14062 2.85938C1.76562 3.79688 1.85938 5.98438 1.85938 6.98438C1.85938 8.01562 1.76562 10.2031 2.14062 11.1094C2.39062 11.7344 2.85938 12.2031 3.48438 12.4531C4.39062 12.8281 6.57812 12.7344 7.60938 12.7344C8.60938 12.7344 10.7969 12.8281 11.7344 12.4531C12.3281 12.2031 12.8281 11.7344 13.0469 11.1094Z"></path>
                </svg>
              </div>
            </div>
          </div>
   
        
      
          <div className="flex flex-col gap-4">
  <h4 className="text-2xl text-neutral-950 font-bold dark:text-neutral-300">Sponsored <span className="font-light">Ads</span></h4>
  <div className="w-full">
    {sponsors.length > 0 ? (
      <div className="relative rounded-2xl overflow-hidden">
        <div className="relative h-96">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSponsorIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {sponsor.sponsors_url ? (
                <a 
                  href={sponsor.sponsors_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img 
                    className="w-full h-96 object-cover rounded-2xl" 
                    src={sponsor?.sponsors_url} 
                    alt={`Sponsor ${index + 1}`}
                  />
                  <div className="w-full h-96 left-0 bottom-0 absolute bg-gradient-to-t from-neutral-950/50 to-transparent rounded-2xl"></div>
                  <div className="w-full px-8 bottom-12 absolute text-center">
                    <span className="text-xl text-white font-bold cursor-pointer">
                      <span className="font-light">Sponsored Content</span> - Click to learn more
                    </span>
                  </div>
                </a>
              ) : (
                <div className="w-full h-96 relative">
                  <img 
                    className="w-full h-96 object-cover rounded-2xl" 
                    src={imageUrls?.blog + sponsor?.sponsors_image} 
                    alt={`Sponsor ${index + 1}`}
                  />
                  <div className="w-full h-96 left-0 bottom-0 absolute bg-gradient-to-t from-neutral-950/50 to-transparent rounded-2xl"></div>
                  <div className="w-full px-8 bottom-12 absolute text-center">
                    <span className="text-xl text-white font-bold">
                      <span className="font-light">Sponsored Content</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
          
        
          {sponsors.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {sponsors.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSponsorIndex ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSponsorIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          )}

        
          {sponsors.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300 z-10"
                onClick={() => setCurrentSponsorIndex(prev => 
                  prev === 0 ? sponsors.length - 1 : prev - 1
                )}
                aria-label="Previous sponsor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.7267 12L12.6667 11.06L9.61333 8L12.6667 4.94L11.7267 4L7.72667 8L11.7267 12Z"/>
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300 z-10"
                onClick={() => setCurrentSponsorIndex(prev => 
                  prev === sponsors.length - 1 ? 0 : prev + 1
                )}
                aria-label="Next sponsor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4.27333 4L3.33333 4.94L6.38667 8L3.33333 11.06L4.27333 12L8.27333 8L4.27333 4Z"/>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    ) : (
     
      <div className="w-full h-96 relative rounded-2xl">
        <img 
          className="w-full h-96 object-cover rounded-2xl" 
          src="https://ideko-html-demo.vercel.app/assets/imgs/pages/banner1.png"
          alt="Default sponsor"
        />
        <div className="w-full h-96 left-0 bottom-0 absolute bg-gradient-to-t from-neutral-950/50 to-transparent rounded-2xl"></div>
        <div className="w-full px-8 bottom-12 absolute text-center">
          <span className="text-xl text-white font-bold">
            <span className="font-light">It seeks to inspire and</span> motivate individuals
          </span>
        </div>
      </div>
    )}
  </div>
</div>
        </div>
      </div>
    </div>
  </section>


  {/* ----------- related post  */}
  
  <section className="relative py-8 lg:py-12 lg:mb-16">
    <div className="container px-4">
      <h3 className="heading-3 text-left mb-8 lg:mb-12 leading-none"><span className="font-light">All</span> Posts</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        <div className="flex-col justify-start items-start gap-5 inline-flex hover-up border-2 border-neutral-300 dark:border-neutral-300 rounded-3xl overflow-hidden">
          <a href="single.html" className="rounded-2xl overflow-hidden max-h-[180px]">
            <img src="https://ideko-html-demo.vercel.app/assets/imgs/pages/img-02.png"/>
          </a>
          <div className="flex-col justify-start items-start gap-2.5 flex px-4 pb-4">
            <div className="justify-start items-center gap-5 inline-flex">
              <a href="category.html" className="px-3 py-[4px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-300 justify-center items-center gap-1.5 flex">
                <div className="text-neutral-900 dark:text-neutral-300 text-sm font-medium leading-none">Trending</div>
              </a>
              <div className="justify-start items-center gap-2 flex">
                <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">June 8, 2024</div>
              </div>
            </div>
            <h3  className="text-neutral-950 dark:text-neutral-300 text-base font-bold  ">Globetrotting in Style: A Journey Through My Lens</h3>
          </div>
        </div>
   
     

      </div>
    </div>
  </section>

 
    </>
  )
}

export default BlogDetails