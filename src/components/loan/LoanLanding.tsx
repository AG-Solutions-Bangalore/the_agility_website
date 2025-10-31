import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Calculator,
  Phone,
  Mail,
  MapPin,
  House,
} from "lucide-react";

interface LoanType {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const LoanLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanType: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [tenure, setTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(Math.round(emiValue));
  };

  React.useEffect(() => {
    calculateEMI();
  }, [loanAmount, tenure, interestRate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setMessage("Thank you! Our advisor will contact you within 24 hours.");
      setFormData({ name: "", mobile: "", loanType: "", city: "" });
      setLoading(false);
    }, 1500);
  };

  const loanTypes: LoanType[] = [
    {
      title: "Home Loan",
      description:
        "Buy your dream home with expert advice and flexible financing options.",
      icon: "🏠",
      features: [
        "Up to 90% loan amount",
        "Tenure up to 30 years",
        "Lowest interest rates",
        "Quick approval",
      ],
    },
    {
      title: "Mortgage Loan",
      description:
        "Leverage your property smartly to fund growth or manage cash flow.",
      icon: "🏢",
      features: [
        "High loan amount",
        "Flexible repayment",
        "Minimal documentation",
        "Quick disbursal",
      ],
    },
    {
      title: "Business Loan",
      description:
        "Get funding to scale operations, expand inventory, or upgrade technology.",
      icon: "💼",
      features: [
        "Collateral-free options",
        "Working capital support",
        "Fast processing",
        "Competitive rates",
      ],
    },
  ];

  const whyCapitalKnob = [
    {
      icon: <Shield className="w-8 h-8 text-purple_blue" />,
      title: "Personalized Loan Strategy",
      description: "Tailored solutions based on your unique financial goals",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple_blue" />,
      title: "Lowest Interest Rate Guidance",
      description: "Expert negotiation to get you the best rates in the market",
    },
    {
      icon: <Users className="w-8 h-8 text-purple_blue" />,
      title: "Strong Bank Network",
      description: "Access to 50+ leading banks and financial institutions",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple_blue" />,
      title: "End-to-End Support",
      description: "Complete assistance from application to approval",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "CapitalKnob helped me secure a business loan at 2% lower rate than what my bank offered. Their expertise saved me lakhs!",
      avatar:
        "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=4928FD&color=fff",
    },
    {
      name: "Priya Sharma",
      role: "Home Buyer",
      content:
        "The team made my home loan journey so smooth. They handled everything professionally and got me approved in record time.",
      avatar:
        "https://ui-avatars.com/api/?name=Priya+Sharma&background=4928FD&color=fff",
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      content:
        "Excellent service! They understood my business needs and arranged the perfect loan structure. Highly recommended!",
      avatar:
        "https://ui-avatars.com/api/?name=Amit+Patel&background=4928FD&color=fff",
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Get the Lowest Home Loan Rate in 2024",
      excerpt:
        "Discover insider strategies to negotiate better interest rates and save thousands on your home loan.",
      date: "October 25, 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400",
      category: "Home Loans",
    },
    {
      id: 2,
      title: "Why Smart Entrepreneurs Use Mortgage Loans for Expansion",
      excerpt:
        "Learn how successful business owners leverage their property assets to fuel business growth.",
      date: "October 20, 2025",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      category: "Business Strategy",
    },
    {
      id: 3,
      title: "Top 5 Mistakes to Avoid When Applying for Business Loans",
      excerpt:
        "Common pitfalls that can delay or deny your business loan application and how to avoid them.",
      date: "October 15, 2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      category: "Business Loans",
    },
  ];

  const bankLogos = [
    "HDFC Bank",
    "ICICI Bank",
    "SBI",
    "Axis Bank",
    "Kotak Mahindra",
    "Yes Bank",
  ];

  return (
    <>
      <section className='relative w-full pt-36 pb-16 lg:pb-24 before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue_gradient before:via-blue-900/15 before:to-yellow_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-950 dark:text-neutral-300 leading-tight">
                Smart Funding.{" "}
                <span className="text-purple_blue">Smarter Growth.</span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                CapitalKnob connects you with India's best loan options — Home,
                Mortgage, and Business — at the lowest possible rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-purple_blue hover:bg-purple_blue/90 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-neutral-200 dark:bg-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-300 text-neutral-950 dark:text-neutral-300 rounded-xl font-semibold transition-all duration-300">
                  Check Eligibility Now
                </button>
              </div>
            </div>

            <div className="bg-blue-200/20 dark:bg-blue-800 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-300">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-6 h-6 text-purple_blue" />
                <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-300">
                  Quick EMI Calculator
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Loan Amount: ₹{loanAmount.toLocaleString("en-IN")}
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Tenure: {tenure} years
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="bg-purple_blue/10 rounded-xl p-6 mt-6">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                    Monthly EMI
                  </p>
                  <p className="text-3xl font-bold text-purple_blue">
                    ₹{emi.toLocaleString("en-IN")}
                  </p>
                </div>

                <button className="w-full px-6 py-3 bg-purple_blue hover:bg-purple_blue/90 text-white rounded-xl font-semibold transition-all duration-300">
                  Book a Call with Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-950 dark:text-neutral-300 mb-4">
              Why Choose <span className="text-purple_blue">CapitalKnob</span>?
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              We combine expertise, network, and technology to deliver the best
              loan solutions for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCapitalKnob.map((item, index) => (
              <div
                key={index}
                className="bg-purple_blue/10 dark:bg-neutral-dark-200 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full pt-24 2xl:pb-20 pb-10  before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-yellow_gradient before:via-blue-900/10 before:to-blue_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-950 dark:text-neutral-300 mb-4">
              Our Loan <span className="text-purple_blue">Solutions</span>
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Comprehensive financing options tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-dark-200 rounded-3xl overflow-hidden border border-neutral-300 dark:border-neutral-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4">{loan.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-300 mb-3">
                    {loan.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                    {loan.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {loan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
                      >
                        <CheckCircle className="w-5 h-5 text-purple_blue flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 bg-purple_blue hover:bg-purple_blue/90 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                alt="CapitalKnob Team"
                className="w-full h-38 object-cover object-top rounded-md border"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-950 dark:text-neutral-300 mb-6">
                About <span className="text-purple_blue">CapitalKnob</span>
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                CapitalKnob Investment & Financial Advisors Pvt. Ltd. is a
                new-age financial advisory helping entrepreneurs, home buyers,
                and business owners get the right funding strategy — not just a
                loan.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                We combine data, network, and expertise to deliver smarter
                financial growth. Our mission is to democratize access to the
                best loan products and help you make informed financial
                decisions.
              </p>
              <div className="flex items-center gap-4 p-6 bg-purple_blue/10 dark:bg-neutral-dark-200 rounded-2xl border border-neutral-300 dark:border-neutral-300">
                <img
                  src="https://ui-avatars.com/api/?name=GovindGarg&background=4928FD&color=fff&size=60"
                  alt="Founder"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-xl font-bold text-neutral-950 dark:text-neutral-300">
                    Our Founder
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Leading the mission to revolutionize loan advisory in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full pt-24 2xl:pb-20 pb-10  before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue_gradient before:via-blue-900/10 before:to-yellow_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-950 dark:text-neutral-300 mb-4">
              What Our <span className="text-purple_blue">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-dark-200 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-neutral-950 dark:text-neutral-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-center text-neutral-700 dark:text-neutral-300 mb-8 text-lg font-semibold">
              Trusted by 50+ Leading Banks & Financial Institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {bankLogos.map((bank, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white dark:bg-neutral-dark-200 rounded-xl border border-neutral-300 dark:border-neutral-300 font-semibold text-neutral-950 dark:text-neutral-300"
                >
                  {bank}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-gradient-to-b  from-transparent via-yellow-200/30 to-transparent">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-950 dark:text-neutral-300">
              Latest <span className="text-purple_blue">Insights</span>
            </h2>
            <button className="px-6 py-3 bg-purple_blue/50 dark:bg-neutral-dark-200 hover:bg-neutral-300 dark:hover:bg-neutral-300 text-neutral-950 dark:text-neutral-300 rounded-xl font-semibold transition-all duration-300">
              Read All Insights
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-purple_blue/10 dark:bg-neutral-dark-200 rounded-3xl overflow-hidden border border-neutral-300 dark:border-neutral-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-[15rem] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full  object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-purple_blue/10 text-purple_blue text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-300 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-purple_blue font-semibold flex items-center gap-2 group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-transparent via-white to-blue-100/30 dark:from-transparent dark:via-neutral-900 dark:to-yellow-900/20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple_blue to-blue-600 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-700 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <div className="relative">
                        <Phone className="w-10 h-10 text-white animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Instant Loan Consultation
                    </h3>
                    <p className="text-blue-100">
                      Connect with 50+ banking partners
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          Lowest Rates Guaranteed
                        </p>
                        <p className="text-sm text-blue-100">
                          Save up to 2% on interest
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          100% Secure Process
                        </p>
                        <p className="text-sm text-blue-100">
                          Your data is protected
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          Quick Approval
                        </p>
                        <p className="text-sm text-blue-100">
                          Within 24-48 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-black/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        50+
                      </div>
                      <div className="text-xs text-blue-100 font-medium">
                        Banks
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        24h
                      </div>
                      <div className="text-xs text-blue-100 font-medium">
                        Response
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        0%
                      </div>
                      <div className="text-xs text-blue-100 font-medium">
                        Fees
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 -left-3 w-12 h-12 bg-yellow-400 rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
                  <span className="text-lg">🏠</span>
                </div>
                <div className="absolute bottom-6 -right-3 w-10 h-10 bg-green-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 -left-10 w-60 h-60 bg-purple_blue/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-10 -right-8 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"></div>

              <div className="mt-6 flex flex-col items-center space-y-3">
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <Phone className="w-5 h-5 text-purple_blue" />
                  <span className="font-medium">+91-9876543210</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <Mail className="w-5 h-5 text-purple_blue" />
                  <span className="font-medium">hello@capitalknob.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-dark-200 rounded-3xl p-8 lg:p-10 border border-neutral-300 dark:border-neutral-700 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-neutral-300 mb-4">
                  Get Your{" "}
                  <span className="text-purple_blue">Personalized</span> Loan
                  Plan
                </h2>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  Fill in your details and our expert will contact you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple_blue focus:border-transparent text-neutral-950 dark:text-neutral-300 transition-all duration-300"
                        placeholder="Enter your name"
                        required
                      />
                      <div className="absolute right-3 top-3">
                        <Users className="w-5 h-5 text-neutral-400" />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple_blue focus:border-transparent text-neutral-950 dark:text-neutral-300 transition-all duration-300"
                        placeholder="Enter mobile number"
                        required
                      />
                      <div className="absolute right-3 top-3">
                        <Phone className="w-5 h-5 text-neutral-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Loan Type *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.loanType}
                        onChange={(e) =>
                          setFormData({ ...formData, loanType: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple_blue focus:border-transparent text-neutral-950 dark:text-neutral-300 appearance-none transition-all duration-300"
                        required
                      >
                        <option value="">Select loan type</option>
                        <option value="home">Home Loan</option>
                        <option value="mortgage">Mortgage Loan</option>
                        <option value="business">Business Loan</option>
                      </select>
                      <div className="absolute right-3 top-3">
                        <House className="w-5 h-5 text-neutral-400" />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      City *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple_blue focus:border-transparent text-neutral-950 dark:text-neutral-300 transition-all duration-300"
                        placeholder="Enter your city"
                        required
                      />
                      <div className="absolute right-3 top-3">
                        <MapPin className="w-5 h-5 text-neutral-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple_blue to-blue-600 hover:from-purple_blue/90 hover:to-blue-600/90 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Loan Plan
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {message && (
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <p className="text-green-600 dark:text-green-400 font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {message}
                    </p>
                  </div>
                )}

                <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                  ✓ No spam ever • ✓ 100% confidential • ✓ Expert advice
                  guaranteed
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanLanding;
