import React, { useState } from "react";
import { ArrowRight, Home, Building2, Briefcase, CheckCircle, ChevronDown, FileText, TrendingUp, Clock, Shield, Users } from "lucide-react";

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CaseStudy {
  title: string;
  description: string;
  result: string;
}

const LoanService: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const homeLoanFeatures: ServiceFeature[] = [
    {
      icon: <CheckCircle className="w-6 h-6 text-purple_blue" />,
      title: "Competitive Interest Rates",
      description: "Access rates starting from 7.4% with our bank network"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple_blue" />,
      title: "Quick Processing",
      description: "Get approved in 5-10 days with minimal documentation"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple_blue" />,
      title: "100% Transparency",
      description: "No hidden charges, complete clarity on all fees"
    },
    {
      icon: <Users className="w-6 h-6 text-purple_blue" />,
      title: "Expert Guidance",
      description: "Dedicated advisor throughout your loan journey"
    }
  ];

  const eligibilityDocuments = {
    salaried: [
      "Last 3 months' salary slips",
      "Form 16 / IT Returns (2 years)",
      "Bank statements (6 months)",
      "Identity & Address proof",
      "Property documents"
    ],
    selfEmployed: [
      "Business proof documents",
      "IT Returns (3 years)",
      "Bank statements (12 months)",
      "Identity & Address proof",
      "Property documents"
    ]
  };

  const mortgageLoanCases: CaseStudy[] = [
    {
      title: "Manufacturing Expansion",
      description: "Mr. Sharma leveraged his residential property to fund machinery purchase",
      result: "₹50L sanctioned at 9.5% - Business revenue increased 40%"
    },
    {
      title: "Education Funding",
      description: "Ms. Patel secured funds for daughter's foreign education",
      result: "₹25L approved in 10 days - No business disruption"
    },
    {
      title: "Debt Consolidation",
      description: "Mr. Kumar restructured high-interest loans efficiently",
      result: "Saved ₹2.5L annually in interest payments"
    }
  ];

  const businessLoanOptions = [
    {
      type: "Term Loan",
      description: "Long-term funding for business expansion, equipment, or infrastructure",
      tenure: "Up to 10 years",
      amount: "₹10L - ₹5Cr"
    },
    {
      type: "Working Capital Loan",
      description: "Short-term funding for day-to-day operations and inventory",
      tenure: "Up to 3 years",
      amount: "₹5L - ₹2Cr"
    },
    {
      type: "Machinery Loan",
      description: "Specialized financing for equipment and machinery purchase",
      tenure: "Up to 7 years",
      amount: "₹10L - ₹3Cr"
    }
  ];

  const industryExamples = [
    {
      industry: "Retail",
      use: "Inventory expansion, store renovation, POS systems",
      typical: "₹15-50L"
    },
    {
      industry: "Manufacturing",
      use: "Machinery upgrade, raw material, warehouse expansion",
      typical: "₹50L-3Cr"
    },
    {
      industry: "Services",
      use: "Office setup, technology, talent acquisition",
      typical: "₹10-75L"
    },
    {
      industry: "F&B",
      use: "Kitchen equipment, outlet expansion, franchise",
      typical: "₹20L-1Cr"
    }
  ];

  const comparisonData = [
    {
      feature: "Loan Tenure",
      homeLoan: "Up to 30 years",
      mortgageLoan: "Up to 15 years",
      businessLoan: "Up to 10 years"
    },
    {
      feature: "Interest Range",
      homeLoan: "7.4 - 9.75%",
      mortgageLoan: "9 - 11%",
      businessLoan: "11 - 18%"
    },
    {
      feature: "Collateral",
      homeLoan: "Property",
      mortgageLoan: "Property",
      businessLoan: "Business Assets"
    },
    {
      feature: "Processing Time",
      homeLoan: "5-10 days",
      mortgageLoan: "7-15 days",
      businessLoan: "5-12 days"
    },
    {
      feature: "Max Loan Amount",
      homeLoan: "Up to ₹10Cr",
      mortgageLoan: "Up to ₹5Cr",
      businessLoan: "Up to ₹5Cr"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is the minimum credit score required for a home loan?",
      answer: "Most banks require a minimum CIBIL score of 750 for home loans. However, with CapitalKnob's expertise, we can help you secure loans even with scores between 650-750 by identifying the right lenders and presenting your application strategically."
    },
    {
      question: "How is a mortgage loan different from a business loan?",
      answer: "A mortgage loan uses your existing property as collateral and can be used for any purpose (business, education, medical). A business loan is specifically for business purposes and may or may not require collateral. Mortgage loans typically have lower interest rates due to property backing."
    },
    {
      question: "Can I transfer my existing home loan to a lower rate?",
      answer: "Yes! Loan balance transfer is an excellent way to reduce your EMI burden. CapitalKnob can help you compare offers from multiple banks, handle the entire transfer process, and potentially save lakhs in interest over your loan tenure."
    },
    {
      question: "What documents are needed for a business loan?",
      answer: "Typically you need: Business registration proof, IT returns (2-3 years), bank statements (6-12 months), financial statements, identity proof, and address proof. For collateral-based loans, property documents are also required."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "With CapitalKnob's streamlined process: Home Loans take 5-10 days, Mortgage Loans 7-15 days, and Business Loans 5-12 days from complete documentation to disbursement. We handle all bank interactions to expedite your approval."
    },
    {
      question: "Can I get a loan if I'm self-employed?",
      answer: "Absolutely! Self-employed individuals, business owners, and professionals are eligible for all our loan products. We specialize in presenting self-employed applications to banks in the most favorable way, maximizing approval chances."
    }
  ];

  const interestRates = [
    { bank: "HDFC Bank", rate: "8.40 - 9.40%", processing: "0.50%" },
    { bank: "SBI", rate: "8.50 - 9.65%", processing: "0.35%" },
    { bank: "ICICI Bank", rate: "8.40 - 9.45%", processing: "0.50%" },
    { bank: "Axis Bank", rate: "8.75 - 9.75%", processing: "1.00%" },
    { bank: "Kotak Mahindra", rate: "8.70 - 9.50%", processing: "0.50%" }
  ];

  return (
    <>
    
      <section className='relative w-full pt-36 pb-16 lg:pb-24 before:content-[""] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue_gradient before:via-blue-900/15 before:to-yellow_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10'>
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-950 dark:text-neutral-300 leading-tight mb-6">
              Your Smart Loan Partner for <span className="text-purple_blue">Every Goal</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
              Explore our advisory for Home Loans, Mortgage Loans, and Business Loans designed for smarter financial outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple_blue hover:bg-purple_blue/90 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-neutral-200 dark:bg-neutral-dark-200 hover:bg-neutral-300 dark:hover:bg-neutral-300 text-neutral-950 dark:text-neutral-300 rounded-xl font-semibold transition-all duration-300">
                Compare Loan Options
              </button>
            </div>
          </div>
        </div>
      </section>

     <section className="relative py-16 lg:py-24">
          <div className="container px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple_blue/10 flex items-center justify-center">
                <Home className="w-8 h-8 text-purple_blue" />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-bold text-neutral-950 dark:text-neutral-300">
                  Home Loan Advisory
                </h2>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-2">
                  We simplify the journey to your dream home — from comparing offers to documentation.
                </p>
              </div>
            </div>
  
     
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {homeLoanFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-purple_blue/10 dark:bg-neutral-dark-200 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
  
      
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-300 mb-6">
                Current Interest Rate Comparison
              </h3>
              <div className="bg-white dark:bg-neutral-dark-200 rounded-3xl overflow-hidden border border-neutral-300 dark:border-neutral-300">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-purple_blue">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-semibold">Bank</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Interest Rate</th>
                        <th className="px-6 py-4 text-left text-white font-semibold">Processing Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interestRates.map((item, index) => (
                        <tr 
                          key={index}
                          className="border-t border-neutral-300 dark:border-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <td className="px-6 py-4 text-neutral-950 dark:text-neutral-300 font-medium">
                            {item.bank}
                          </td>
                          <td className="px-6 py-4 text-neutral-950 dark:text-neutral-300">
                            {item.rate}
                          </td>
                          <td className="px-6 py-4 text-neutral-950 dark:text-neutral-300">
                            {item.processing}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-4">
                * Rates are indicative and subject to change. Final rates depend on your profile and loan amount.
              </p>
            </div>
  
        
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple_blue/10 dark:bg-neutral-dark-200 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-300">
                <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-300 mb-6">
                  Documents Required - Salaried
                </h3>
                <ul className="space-y-3">
                  {eligibilityDocuments.salaried.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-purple_blue flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 dark:text-neutral-300">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="bg-purple_blue/10 dark:bg-neutral-dark-200 rounded-3xl p-8 border border-neutral-300 dark:border-neutral-300">
                <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-300 mb-6">
                  Documents Required - Self-Employed
                </h3>
                <ul className="space-y-3">
                  {eligibilityDocuments.selfEmployed.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-purple_blue flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 dark:text-neutral-300">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <div className="text-center">
              <button className="px-10 py-4 bg-purple_blue hover:bg-purple_blue/90 text-white rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2 group">
                Check My Eligibility
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
  
      
        <section className="relative w-full pt-24 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-yellow_gradient before:via-blue-900/10 before:to-blue_gradient dark:before:from-dark_yellow_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple_blue/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-purple_blue" />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl font-bold text-neutral-950 dark:text-neutral-300">
                  Mortgage Loan Advisory
                </h2>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-2">
                  Use your property as a powerful financial asset to fund your goals.
                </p>
              </div>
            </div>
  
          
  
         
  
          
         
  
          </div>
        </section>

   

    

    


 

   
    </>
  );
};

export default LoanService;