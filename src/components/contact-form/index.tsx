import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { footerData } from "../../data/footerData";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Web Development",
    mobile: "",
    message: "",
  });
  const [consent, setConsent] = useState(true);

  const [contactVia, setContactVia] = useState({
    sms_c: false,
    rcs_c: false,
    call_c: false,
    email_c: false,
    whatsapp_c: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      mobile: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "mobile" && value.length > 10) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      interest: "Web Development",
      mobile: "",
      message: "",
    });
    setErrors({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoader(true);

    try {
      const response = await fetch(
        "https://theagility.in/crmapi/public/api/createWebenquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            interested: formData.interest,
            message: formData.message,
            rcs_c: contactVia.rcs_c ? "Yes" : "No",
            call_c: contactVia.call_c ? "Yes" : "No",
            email_c: contactVia.email_c ? "Yes" : "No",
            whatsapp_c: contactVia.whatsapp_c ? "Yes" : "No",
            sms_c: consent ? "Yes" : "No",
          }),
        }
      );

      const data = await response.json();
      if (data.success || response.ok) {
        setSubmitted(true);
        reset();
      } else {
        console.error("Error submitting inquiry:", data);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className='relative w-full pt-44 2xl:pb-24 pb-14 before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Let's Connect
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight">
            Love to hear from you, Get in{" "}
            <span className="instrument-font italic font-normal text-orange-600 dark:text-orange-400">
              touch
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-dark_black/70 dark:text-white/70 max-w-2xl leading-relaxed">
            Have a project in mind, looking for strategic tech guidance, or ready to collaborate? We'd love to chat.
          </p>
        </div>

        {/* Success Screen */}
        {submitted ? (
          <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark_black border border-dark_black/10 dark:border-white/10 shadow-2xl text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-dark_black dark:text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">
                Thank you for reaching out. We have received your inquiry and our team will get back to you within 24 hours.
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full text-sm font-medium border border-dark_black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Send Another Message
              </button>
              <Link
                to="/"
                className="px-6 py-2.5 rounded-full text-sm font-medium bg-dark_black dark:bg-white text-white dark:text-dark_black hover:opacity-90 transition flex items-center gap-2"
              >
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Main 2-Column Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {/* Left Column - Contact Details & Pitch */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-8 sm:p-10 rounded-3xl border border-dark_black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md flex flex-col gap-8 shadow-sm">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                    Let’s build something bold
                  </h3>
                  <p className="text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">
                    We partner with ambitious brands and forward-thinking organizations to engineer modern digital experiences.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="flex flex-col gap-4">
                  {/* Phone */}
                  <a
                    href={`tel:${footerData?.contactDetails?.phone}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-dark_black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-medium text-dark_black/50 dark:text-white/50 block">
                        Call Us Directly
                      </span>
                      <span className="text-sm font-semibold text-dark_black dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {footerData?.contactDetails?.phone}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${footerData?.contactDetails?.email}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-dark_black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-medium text-dark_black/50 dark:text-white/50 block">
                        Email Support
                      </span>
                      <span className="text-sm font-semibold text-dark_black dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors break-all">
                        {footerData?.contactDetails?.email}
                      </span>
                    </div>
                  </a>

                  {/* Office */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-dark_black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-medium text-dark_black/50 dark:text-white/50 block">
                        Our Office
                      </span>
                      <span className="text-sm font-semibold text-dark_black dark:text-white">
                        {footerData?.contactDetails?.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-dark_black/10 dark:border-white/10 flex items-center gap-2 text-xs text-dark_black/60 dark:text-white/60">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  Average response time: within 24 hours
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col bg-white dark:bg-dark_black/90 p-8 sm:p-10 rounded-3xl border border-dark_black/10 dark:border-white/10 shadow-xl shadow-black/[0.02] gap-6"
              >
                <div>
                  <h3 className="text-2xl font-semibold">Send us a message</h3>
                  <p className="text-sm text-dark_black/60 dark:text-white/60 mt-1">
                    Fill in the form below and we will get back to you promptly.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-dark_black/80 dark:text-white/80">
                      Your Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full rounded-2xl border px-4 py-3 outline-none transition text-sm bg-transparent dark:bg-black/30 ${errors.name
                        ? "border-red-500"
                        : "border-dark_black/15 dark:border-white/15 focus:border-orange-500 dark:focus:border-orange-400"
                        }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-0.5">{errors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-dark_black/80 dark:text-white/80">
                      Email Address <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full rounded-2xl border px-4 py-3 outline-none transition text-sm bg-transparent dark:bg-black/30 ${errors.email
                        ? "border-red-500"
                        : "border-dark_black/15 dark:border-white/15 focus:border-orange-500 dark:focus:border-orange-400"
                        }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-0.5">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Mobile & Interest Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mobile" className="text-sm font-medium text-dark_black/80 dark:text-white/80">
                      Phone Number <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={`w-full rounded-2xl border px-4 py-3 outline-none transition text-sm bg-transparent dark:bg-black/30 ${errors.mobile
                        ? "border-red-500"
                        : "border-dark_black/15 dark:border-white/15 focus:border-orange-500 dark:focus:border-orange-400"
                        }`}
                    />
                    {errors.mobile && (
                      <span className="text-xs text-red-500 mt-0.5">{errors.mobile}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="interest" className="text-sm font-medium text-dark_black/80 dark:text-white/80">
                      Area of Interest <span className="text-orange-600">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-dark_black/15 dark:border-white/15 px-4 py-3 outline-none transition text-sm bg-transparent dark:bg-dark_black focus:border-orange-500 dark:focus:border-orange-400 cursor-pointer"
                    >
                      <option value="Web Development" className="dark:bg-dark_black">🌐 Web Development</option>
                      <option value="Brand Strategy" className="dark:bg-dark_black">🔷 Brand Strategy</option>
                      <option value="Digital Marketing" className="dark:bg-dark_black">📣 Digital Marketing</option>
                      <option value="Analytics & Reporting" className="dark:bg-dark_black">📊 Analytics & Reporting</option>
                      <option value="Paper to Digital" className="dark:bg-dark_black">🗃️ Paper to Digital</option>
                      <option value="Membership Drives & Cards" className="dark:bg-dark_black">🎟️ Membership Drives & Cards</option>
                      <option value="Print Media" className="dark:bg-dark_black">🧭 Print Media</option>
                      <option value="Event Management" className="dark:bg-dark_black">🎉 Event Management</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-dark_black/80 dark:text-white/80">
                    Project Details / Message <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition text-sm bg-transparent dark:bg-black/30 resize-none ${errors.message
                      ? "border-red-500"
                      : "border-dark_black/15 dark:border-white/15 focus:border-orange-500 dark:focus:border-orange-400"
                      }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-0.5">{errors.message}</span>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex gap-3 cursor-pointer select-none items-start">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent((prev) => !prev)}
                      className="hidden"
                    />
                    <span
                      className={`mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center rounded-md border transition-all ${consent
                        ? "bg-dark_black border-dark_black dark:bg-white dark:border-white"
                        : "border-dark_black/30 dark:border-white/30"
                        }`}
                    >
                      {consent && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-white dark:text-dark_black" />
                      )}
                    </span>
                    <span className="text-xs sm:text-sm text-dark_black/70 dark:text-white/70 leading-relaxed">
                      I authorize <strong>The Agility</strong> to contact me regarding my inquiry via SMS, Call, Email, or WhatsApp.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  {!loader ? (
                    <button
                      type="submit"
                      className="group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-6 pr-2.5 transition-all duration-300 hover:bg-orange-600 dark:hover:bg-orange-400 hover:text-white border border-transparent shadow-md"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        Let's Collaborate
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-dark_black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                        <ArrowRight className="w-4 h-4 text-dark_black dark:text-white" />
                      </div>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-fit text-white font-medium bg-dark_black/80 dark:bg-white/80 dark:text-dark_black rounded-full flex items-center gap-3 py-3 px-6 cursor-not-allowed"
                    >
                      <div className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                      Submitting Inquiry...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;