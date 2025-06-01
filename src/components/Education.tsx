
import { Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-500">
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
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Web Technology I and II
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
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
