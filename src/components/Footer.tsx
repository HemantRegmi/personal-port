
import { Mail, MapPin, Phone, Github, Linkedin, Code, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hemanta Regmi</h3>
                <p className="text-blue-400 text-sm">Frontend Developer Trainee</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate about creating responsive and user-friendly web interfaces. 
              Always eager to learn new technologies and contribute to innovative projects.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="mailto:hregmi2960@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Education
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Hatiban, Lalitpur</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <a 
                  href="mailto:hregmi2960@gmail.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  hregmi2960@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+977 9866717332</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Hemanta Regmi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
