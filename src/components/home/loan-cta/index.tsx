import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoanCta = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full max-w-7xl mx-auto p-4 bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-md overflow-hidden">
       
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-amber-900/20 rounded-full blur-3xl" />
            
         
            <div className="text-center sm:text-left flex-1 z-10">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1">
                    Need a Loan? Get Instant Approval
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Connect with 50+ banking partners for the best loan options
                </p>
            </div>

       
            <button
                onClick={() => navigate('/loan')}
                className="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 group z-10"
            >
                Apply Now
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

export default LoanCta;