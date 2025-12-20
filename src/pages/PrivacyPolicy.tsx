import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | The Agility";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-6">
      {/* Header Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">
              Last Updated: December 20, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold">The Agility</span>, we value
              your trust and are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal data when you interact with our website, services, or
              digital solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              As a provider of digital-first solutions for brands, associations,
              and communities, we understand the importance of data privacy and
              are dedicated to maintaining the highest standards of data
              protection.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                2. Information We Collect
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Name, email address, phone number, and company/organization
                    name
                  </li>
                  <li>Professional details and job title</li>
                  <li>Billing and payment information (when applicable)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Technical Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>IP address, browser type, and device details</li>
                  <li>Operating system and screen resolution</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Referral source and exit pages</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We use cookies and similar technologies for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Website analytics and performance monitoring</li>
                  <li>Personalizing user experience and preferences</li>
                  <li>Remembering login credentials and settings</li>
                  <li>Marketing and advertising purposes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                3. How We Use Your Information
              </h2>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Service Delivery:</strong> To provide, maintain, and
                    improve our digital solutions and services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    <strong>Communication:</strong> To respond to inquiries,
                    provide customer support, and send important updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Personalization:</strong> To tailor our services and
                    content to your preferences and needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    <strong>Marketing:</strong> To send promotional content,
                    newsletters, and special offers (you can opt out anytime)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Analytics:</strong> To analyze website traffic, user
                    behavior, and improve overall user experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    <strong>Legal Compliance:</strong> To comply with legal
                    obligations and protect our rights
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                4. Data Security
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. These measures
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Encryption of sensitive data during transmission</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>
                Restricted access to personal information on a need-to-know
                basis
              </li>
              <li>Secure data storage and backup procedures</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Please note:</strong> No method of transmission over the
                internet or electronic storage is 100% secure. While we strive
                to protect your personal information, we cannot guarantee
                absolute security.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                5. Data Sharing and Third Parties
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We respect your privacy and do not sell, rent, or trade your
              personal information to third parties for their marketing
              purposes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
              <li>
                <strong>Service Providers:</strong> Trusted third-party partners
                who assist in operating our website, conducting business, or
                delivering services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, or legal process
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
              <li>
                <strong>Consent:</strong> When you have given explicit consent
                to share your information
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              6. Your Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Access
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Request access to the personal information we hold about you
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Correction
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Request correction of inaccurate or incomplete information
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Deletion
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Request deletion of your personal information
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Opt-Out
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Unsubscribe from marketing communications at any time
                </p>
              </div>
            </div>
          </section>
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white   pb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              For any questions or clarifications regarding these Terms &
              Conditions, please reach out to us at:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                The Agility
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Jayanagar, Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="tel:+918867171061"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 8867171061
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="mailto:info@theagility.in"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    info@theagility.in
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Consent */}
          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Consent
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                By using our website and services, you acknowledge that you have
                read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
