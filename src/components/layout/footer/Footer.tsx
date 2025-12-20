import React from "react";

import Logo from "../header/Logo";
import { footerData } from "../../../data/footerData";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="xl:pt-20 pb-6">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 max-w-md">
            <Logo />
            <p className="opacity-60 leading-relaxed">
              {footerData?.brand?.tagline}
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col md:flex-row gap-8 xl:gap-12">
            {/* Phone */}
            <div className="flex flex-col gap-3 group">
              <Phone className="text-black dark:text-white w-5 h-5" />
              <a
                href={`tel:${footerData?.contactDetails?.phone}`}
                className="text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors tracking-wider"
              >
                {footerData?.contactDetails?.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3 group">
              <Mail className="text-black dark:text-white w-5 h-5" />
              <a
                href={`mailto:${footerData?.contactDetails?.email}`}
                className="text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors tracking-wider"
              >
                {footerData?.contactDetails?.email}
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-3">
              <MapPin className="text-black dark:text-white w-5 h-5" />
              <p className="text-dark_black/60 dark:text-white/60 tracking-wider max-w-[200px]">
                {footerData?.contactDetails?.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <Link
              to="/privacy-policy"
              className="text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-dark_black/20 dark:text-white/20">|</span>
            <Link
              to="/terms-and-conditions"
              className="text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-dark_black/60 dark:text-white/60 text-sm text-center md:text-right">
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
