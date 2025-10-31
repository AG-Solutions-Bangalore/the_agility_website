import React, { useState, useEffect } from "react";
import { X, ArrowRight, Home, Building2, Briefcase, Sparkles, IndianRupee } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const LoanPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    if (location.pathname !== '/') {
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
        
        let timeToWait;
        if (popupAction === 'loan') {
          timeToWait = 24 * 60 * 60 * 1000; 
        } else {
          timeToWait = 5 * 60 * 1000; 
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
    setTimeout(() => setIsMounted(false), 300);
  };


 
  const handleGetLoan =   () => {

    localStorage.setItem('loanPopupDismissed', new Date().getTime().toString());
    localStorage.setItem('loanPopupAction', 'loan');
    navigate('/loan');
     
  };


  if (location.pathname !== '/' || !isMounted) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}>
      <div 
        className={`relative w-full max-w-md bg-white rounded-2xl shadow-xl transition-all duration-500 transform border border-gray-100 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10 border border-gray-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header with Light Gradient */}
        <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-t-2xl p-6 overflow-hidden border-b border-gray-100">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/30 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/50 backdrop-blur-sm rounded-2xl mb-3 border border-amber-200">
              <IndianRupee className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold mb-1 text-amber-800">
              Need a Loan?
            </h2>
            <p className="text-amber-600 text-sm">
              Get instant approval with best rates
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Loan Types */}
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

          {/* Features Badges */}
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

          {/* CTA Buttons */}
          <div className="space-y-2.5">
            <button
              onClick={handleGetLoan}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              Get Loan Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-medium transition-all duration-300 border border-gray-200"
            >
              Maybe Later
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            🔒 100% Secure • No Hidden Charges • Free Consultation
          </p>
        </div>
      </div>

      {/* Backdrop Click to Close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={handleClose}
      />
    </div>
  );
};

export default LoanPopup;