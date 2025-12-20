import React, { useEffect } from "react";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | The Agility";
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mt-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
              Terms & Conditions
            </h1>
            <p className="text-base md:text-lg opacity-90">
              Last Updated: December 20, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-10 md:mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Welcome to <span className="font-semibold">The Agility</span>.
              These Terms and Conditions govern your use of our website and
              services. By accessing or using our site, you agree to comply with
              and be bound by these terms. Please read them carefully.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using our website or services, you agree to abide by these
              Terms & Conditions and our Privacy Policy. If you do not agree,
              please discontinue using our website immediately.
            </p>
          </section>

          {/* 2. Services Offered */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              2. Services Offered
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The Agility provides digital-first solutions for brands,
              associations, and communities including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Website and application development</li>
              <li>Digital strategy and consulting</li>
              <li>Brand identity and design services</li>
              <li>Digital marketing solutions</li>
              <li>Community engagement platforms</li>
            </ul>
          </section>

          {/* 3. User Responsibilities */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
              <li>
                You agree to provide accurate and up-to-date information when
                using our services.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials and account information.
              </li>
              <li>
                You must not use our services for any unlawful, harmful, or
                prohibited activities.
              </li>
              <li>
                You agree to comply with all applicable laws and regulations
                when using our services.
              </li>
            </ul>
          </section>

          {/* 4. Payment Terms */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              4. Payment Terms
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
              <li>
                All fees and charges are quoted in Indian Rupees (INR) unless
                otherwise specified.
              </li>
              <li>
                Payment terms will be outlined in individual service agreements
                or proposals.
              </li>
              <li>
                Invoices must be paid within the specified timeframe. Late
                payments may result in suspension of services.
              </li>
              <li>
                Refund policies will be communicated clearly in service
                agreements.
              </li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              All content, logos, graphics, designs, and data on this website
              are owned by The Agility and protected under applicable copyright
              and trademark laws. Unauthorized use or reproduction is strictly
              prohibited.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Upon full payment for client projects, ownership of final
              deliverables will be transferred as specified in the service
              agreement. The Agility retains the right to showcase completed
              work in our portfolio unless otherwise agreed.
            </p>
          </section>

          {/* 6. Confidentiality */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              6. Confidentiality
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Both parties agree to keep confidential information disclosed
              during the course of business private and secure. Confidential
              information shall not be disclosed to third parties without prior
              written consent.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Agility shall not be held liable for any direct, indirect,
              incidental, or consequential damages arising from the use or
              inability to use our services, including loss of data, profits, or
              business opportunities. Our liability is limited to the amount
              paid for the specific service in question.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              8. Third-Party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website may contain links to external websites or third-party
              services. We are not responsible for the content, privacy
              practices, or security of those websites. Visiting third-party
              sites is at your own risk.
            </p>
          </section>

          {/* 9. Service Modifications */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              9. Service Modifications
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect
              of our services at any time without prior notice. We will make
              reasonable efforts to notify users of significant changes.
            </p>
          </section>

          {/* 10. Termination of Services */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              10. Termination of Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate user accounts or
              services at any time, with or without prior notice, if we believe
              you have violated these Terms & Conditions or engaged in
              misconduct. Upon termination, all outstanding fees must be paid.
            </p>
          </section>

          {/* 11. Dispute Resolution */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              11. Dispute Resolution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In the event of any disputes or disagreements, both parties agree
              to first attempt resolution through good faith negotiation. If
              resolution cannot be reached, disputes may be submitted to
              arbitration in accordance with Indian arbitration laws.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              12. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms and Conditions shall be governed and interpreted in
              accordance with the laws of India. Any disputes shall be subject
              to the exclusive jurisdiction of the courts located in Bengaluru,
              Karnataka.
            </p>
          </section>

          {/* 13. Changes to Terms */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to update or modify these Terms and
              Conditions at any time. Changes will be effective immediately upon
              posting to our website. Your continued use of our services
              constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
              14. Contact Us
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

          <section className="border-t-2 border-gray-200 dark:border-gray-700 pt-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                By using our website and services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
