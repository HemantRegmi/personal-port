
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
            Frontend Developer
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
            
            <p className="text-gray-600 leading-relaxed text-lg">
          
           Enthusiastic and motivated Trainee Frontend Developer with a solid foundation in HTML, CSS, and JavaScript, 
           along with hands-on experience using modern frameworks like React.js. 
           Passionate about building responsive and user-friendly web interfaces. 
           
           Eager to learn and grow in a collaborative team environment while contributing to real-world projects and improving technical skills.
            
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
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
      </div>
    </section>
  );
};

export default Hero;
