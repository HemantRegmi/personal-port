
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a 
                      href="mailto:hregmi2960@gmail.com"
                      className="text-gray-800 font-semibold hover:text-blue-600 transition-colors"
                    >
                      hregmi2960@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <a 
                      href="tel:+9779866717332"
                      className="text-gray-800 font-semibold hover:text-green-600 transition-colors"
                    >
                      +977 9866717332
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-gray-800 font-semibold">Hatiban, Lalitpur</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <ExternalLink className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Portfolio Website</p>
                    <a 
                      href="https://hemantaregmi.com.np"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-semibold hover:text-orange-600 transition-colors"
                    >
                      hemantaregmi.com.np
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind, 
                want to discuss web development, or just want to connect, feel free to reach out!
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Currently looking for:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Frontend Development Internships
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Junior Developer Positions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Collaborative Projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Learning Opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
