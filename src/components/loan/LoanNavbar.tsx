import React from 'react';
import { Menu, X } from 'lucide-react';

const LoanNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Home', 'Service', 'About'];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl z-50">

      <div className="bg-blue-500/5 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
           
              <div className="w-8 h-8 bg-purple_blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CK</span>
              </div>
              <a
               
               href="/loan">
              <span className="ml-3 text-xl font-bold text-gray-800">CapitalKnob</span>
              </a>
            </div>

         
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="/loan/service"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

         
            <div className="hidden md:block">
              <button className="bg-purple_blue hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>

       
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

    
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-purple_blue hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors mt-2">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LoanNavbar;