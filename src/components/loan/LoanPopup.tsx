import React, { useState, useEffect } from "react";
import { X, ArrowRight, Home, Building2, Briefcase, Sparkles, IndianRupee, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  interest: string;
  mobile: string;
  message: string;
}

const LoanPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: 'Home Loan',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (location.pathname !== '/loan') {
      return;
    }

    const checkAndShowPopup = () => {
      const popupDismissed = localStorage.getItem('loanPopupDismissed');
      const popupAction = localStorage.getItem('loanPopupAction');
      
      if (!popupDismissed) {
        const timer = setTimeout(() => {
          setIsMounted(true);
          setTimeout(() => setIsVisible(true), 100);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        const dismissedTime = parseInt(popupDismissed);
        const currentTime = new Date().getTime();
        
        let timeToWait = 0;
        if (popupAction === 'submitted') {
          timeToWait = 60 * 60 * 1000;
        }
        
        if (currentTime - dismissedTime > timeToWait) {
          const timer = setTimeout(() => {
            setIsMounted(true);
            setTimeout(() => setIsVisible(true), 100);
          }, 2000);
          return () => clearTimeout(timer);
        }
      }
    };

    checkAndShowPopup();
  }, [location.pathname]);

  const handleClose = () => {
    localStorage.setItem('loanPopupDismissed', new Date().getTime().toString());
    localStorage.setItem('loanPopupAction', 'closed');
    setIsVisible(false);
    setShowForm(false);
    setSubmitStatus('idle');
    setTimeout(() => setIsMounted(false), 300);
  };

  const handleApplyNow = () => {
    setShowForm(true);
    setSubmitStatus('idle');
    setFormData({
      name: '',
      email: '',
      interest: 'Home Loan',
      mobile: '',
      message: '',
    });
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select loan type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://theagility.in/crmapi/public/api/createWebenquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          interested: formData.interest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        localStorage.setItem('loanPopupDismissed', new Date().getTime().toString());
        localStorage.setItem('loanPopupAction', 'submitted');
        
        setTimeout(() => {
          setIsVisible(false);
          setShowForm(false);
          setTimeout(() => setIsMounted(false), 300);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  if (location.pathname !== '/loan' || !isMounted) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}>
      <div 
        className={`relative w-full max-w-md bg-white rounded-2xl shadow-xl transition-all duration-500 transform border border-gray-100 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10 border border-gray-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {submitStatus === 'success' && (
          <div className="h-96 bg-white rounded-2xl flex flex-col items-center justify-center p-6">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Success!</h3>
            <p className="text-gray-600 text-center mb-4">
              Your loan application has been submitted successfully. We'll contact you shortly.
            </p>
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )} 

        {submitStatus === 'error' && (
          <div className="h-96 bg-white rounded-2xl flex flex-col items-center justify-center p-6">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Error</h3>
            <p className="text-gray-600 text-center mb-4">
              There was an error submitting your application. Please try again.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="px-6 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {submitStatus === 'idle' && (
          <>
            <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-t-2xl p-6 overflow-hidden border-b border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/30 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/50 backdrop-blur-sm rounded-2xl mb-3 border border-amber-200">
                  <IndianRupee className="w-7 h-7 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold mb-1 text-amber-800">
                  {showForm ? 'Apply for Loan' : 'Need a Loan?'}
                </h2>
                <p className="text-amber-600 text-sm">
                  {showForm ? 'Fill the form below to get started' : 'Get instant approval with best rates'}
                </p>
              </div>
            </div>

            <div className="p-6">
              {!showForm ? (
                <>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 transition-all cursor-pointer group border border-amber-100">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Home className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs font-semibold text-gray-700">
                        Home
                      </p>
                    </div>

                    <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 transition-all cursor-pointer group border border-amber-100">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs font-semibold text-gray-700">
                        Mortgage
                      </p>
                    </div>

                    <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 transition-all cursor-pointer group border border-amber-100">
                      <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs font-semibold text-gray-700">
                        Business
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5 justify-center">
                    <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                      ⚡ Quick Approval
                    </span>
                    <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                      💰 Lowest Rates
                    </span>
                    <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                      🏦 50+ Banks
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      onClick={handleApplyNow}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-full px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-medium transition-all duration-300 border border-gray-200"
                    >
                      Maybe Later
                    </button>
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.mobile ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your mobile number"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Loan Type *
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.interest ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="Home Loan">Home Loan</option>
                      <option value="House Loan">House Loan</option>
                      <option value="Mortgage Loan">Mortgage Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Car Loan">Car Loan</option>
                      <option value="Education Loan">Education Loan</option>
                    </select>
                    {errors.interest && (
                      <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Any additional information..."
                    />
                  </div>

                  <div className="flex flex-row gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full p-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin"/>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="w-full p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md font-medium transition-all duration-300 border border-gray-200"
                    >
                      Back
                    </button>
                  </div>
                </form>
              )}

              {!showForm && (
                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 100% Secure • No Hidden Charges • Free Consultation
                </p>
              )}
            </div>
          </>
        )}
      </div>

      <div 
        className="absolute inset-0 -z-10" 
        onClick={handleClose}
      />
    </div>
  );
};

export default LoanPopup;