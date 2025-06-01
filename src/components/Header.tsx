
import { useState } from "react";
import { Menu, X, User, Code, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Hemanta Regmi</h1>
              <p className="text-xs text-blue-600 font-medium">Frontend Developer</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 py-3 px-4 rounded-lg mt-2"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
