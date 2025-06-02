import { Calendar, MapPin, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [educationRef, educationVisible] = useScrollAnimation();

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-in-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div 
            ref={educationRef}
            className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-500 transition-all duration-700 delay-200 ease-in-out hover:shadow-lg hover:scale-105 ${
              educationVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Bachelor in Information Technology
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  Patan Multiple Campus
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Lalitpur, Nepal</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">
                      Web Technology I and II
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors">
                      Computer Graphics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;