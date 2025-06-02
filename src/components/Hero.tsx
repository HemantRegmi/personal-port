import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Hemanta Regmi
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 mb-8">
                Frontend Developer 
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Motivated and detail-oriented Frontend Trainee with a 
                  keen interest in modern web development technologies. Passionate about creating responsive and user-friendly 
                  web interfaces and continuously improving coding skills through hands-on projects and learning.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>Hattiban, Lalitpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={20} />
                  <span>hregmi2060@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={20} />
                  <span>+977 9866717332</span>
                </div>
              </div>
            </div>

            {/* Right side - Photo placeholder */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full shadow-2xl flex items-center justify-center border-8 border-white">
                  <img 
                    src="/src/img/IMG2.jpg" 
                    alt="Hemanta Regmi - Frontend Developer"
                    className="w-72 h-72 rounded-full object-cover shadow-lg"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;