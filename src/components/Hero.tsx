
import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Hemanta Regmi
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 mb-8 animate-fade-in">
            Frontend Developer Trainee
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Motivated and detail-oriented Frontend Trainee with a strong foundation in HTML, CSS, and JavaScript, and a 
              keen interest in modern web development technologies. Passionate about creating responsive and user-friendly 
              web interfaces and continuously improving coding skills through hands-on projects and learning. Demonstrates 
              solid understanding of web development principles, version control systems like Git, and basic UI/UX best 
              practices. Eager to contribute to collaborative teams and gain real-world experience in a professional development 
              environment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Hatiban, Lalitpur</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>hregmi2960@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+977 9866717332</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
