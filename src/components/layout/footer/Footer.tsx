import React from "react";
import Logo from "../header/Logo";
import { footerData } from "../../../data/footerData";
import { Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "About us", url: "/#aboutus" },
  { name: "Why Us", url: "/#services" },
  { name: "Service", url: "/#work" },
  { name: "Blog", url: "/blog-list" },
  { name: "Contact", url: "/contact" },
];

const Footer = () => {
  // Only Facebook and Instagram social links
  const socialLinks =
    footerData?.brand?.socialLinks?.filter(
      (item) =>
        item.link.toLowerCase().includes("facebook") ||
        item.link.toLowerCase().includes("instagram")
    ) || [];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-dark_black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-[82.8rem] mx-auto px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 items-start">
          {/* Brand & Tagline & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="text-dark_black/70 dark:text-white/70 max-w-sm text-sm leading-relaxed">
              {footerData?.brand?.tagline}
            </p>

            {/* Social Icons - Facebook & Instagram only */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((item, index) => {
                const isFb = item.link.toLowerCase().includes("facebook");
                const label = isFb ? "Facebook" : "Instagram";
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-dark_black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <img
                      src={item.icon}
                      alt={label}
                      className="w-4 h-4 dark:hidden group-hover:scale-110 transition-transform"
                    />
                    <img
                      src={item.dark_icon}
                      alt={label}
                      className="w-4 h-4 hidden dark:block group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-dark_black/70 dark:text-white/70 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation / Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-dark_black/50 dark:text-white/50">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-sm font-medium text-dark_black/70 hover:text-orange-600 dark:text-white/70 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details - Balanced 2x2 Layout to Fill Space */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-dark_black/50 dark:text-white/50 mb-1">
              Contact Us
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {/* Phone */}
              <a
                href={`tel:${footerData?.contactDetails?.phone}`}
                className="group flex items-start gap-3.5 text-dark_black dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-dark_black/50 dark:text-white/50 tracking-wider block">
                    Phone
                  </span>
                  <span className="text-sm font-medium">
                    {footerData?.contactDetails?.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${footerData?.contactDetails?.email}`}
                className="group flex items-start gap-3.5 text-dark_black dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] uppercase font-semibold text-dark_black/50 dark:text-white/50 tracking-wider block">
                    Email
                  </span>
                  <span className="text-sm font-medium break-all">
                    {footerData?.contactDetails?.email}
                  </span>
                </div>
              </a>

              {/* Office */}
              <div className="flex items-start gap-3.5 text-dark_black dark:text-white">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-dark_black/50 dark:text-white/50 tracking-wider block">
                    Office
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-dark_black/80 dark:text-white/80">
                    {footerData?.contactDetails?.address}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              {/* <div className="flex items-start gap-3.5 text-dark_black dark:text-white">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-dark_black/50 dark:text-white/50 tracking-wider block">
                    Working Hours
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-dark_black/80 dark:text-white/80">
                    Mon – Sat: 9:00 AM – 6:30 PM
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section - Links & Copyright */}
        <div className="pt-8 border-t border-dark_black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-dark_black/60 dark:text-white/60 text-center sm:text-left">
            {footerData?.copyright}
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs sm:text-sm text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-dark_black/20 dark:text-white/20">|</span>
            <Link
              to="/terms-and-conditions"
              className="text-xs sm:text-sm text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
