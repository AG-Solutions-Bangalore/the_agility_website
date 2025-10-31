import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const LoanFooter = () => {
  return (
<footer className="relative py-16 bg-white border-t dark:bg-black">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-purple_blue mb-6">CapitalKnob</h3>
              <p className="text-neutral-400 mb-6">
                Your trusted partner for smart loan solutions and financial growth.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple_blue flex items-center justify-center cursor-pointer hover:bg-purple_blue transition-colors">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple_blue flex items-center justify-center cursor-pointer hover:bg-purple_blue transition-colors">
                  <span className="text-white text-sm">in</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple_blue flex items-center justify-center cursor-pointer hover:bg-purple_blue transition-colors">
                  <span className="text-white text-sm">tw</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple_blue mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Home</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Services</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Blog</a></li>
                <li><a href="/" className="text-black hover:text-blue-500 transition-colors">The Agility</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple_blue mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Home Loan Advisory in India</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Best Mortgage Loan Advisors</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Business Loan for MSMEs</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">Loan Consultation</a></li>
                <li><a href="#" className="text-black hover:text-blue-500 transition-colors">EMI Calculator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-purple_blue mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-purple_blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-400">Phone</p>
                    <a href="tel:+919876543210" className="text-black hover:text-purple_blue transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple_blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-400">Email</p>
                    <a href="mailto:info@capitalknob.com" className="text-black hover:text-purple_blue transition-colors">
                      info@capitalknob.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple_blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-400">Address</p>
                    <p className="text-black">
                      Bengaluru, KA, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-400 text-sm">
                © 2025 CapitalKnob Investment & Financial Advisors Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default LoanFooter