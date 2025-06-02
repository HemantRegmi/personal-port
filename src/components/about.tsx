import { User, Heart, Code2, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-in-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <div 
              ref={leftRef}
              className={`transition-all duration-700 delay-200 ease-in-out ${
                leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate Frontend Developer Trainee based in Hattiban, Lalitpur. With a strong 
                  foundation in modern web technologies, I love turning ideas into beautiful, functional 
                  digital experiences. My journey in web development has been driven by curiosity and 
                  a genuine desire to create solutions that make a difference.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Always learning new technologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Focused on user experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Detail-oriented problem solver</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div 
              ref={rightRef}
              className={`transition-all duration-700 delay-400 ease-in-out ${
                rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 hover-scale group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                      <Code2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Frontend Development</h4>
                  </div>
                  <p className="text-gray-600">
                    Creating responsive and interactive user interfaces using modern technologies 
                    like React, HTML5, CSS3, and JavaScript.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover-scale group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">UI/UX Design</h4>
                  </div>
                  <p className="text-gray-600">
                    Designing user-centered experiences with attention to aesthetics, 
                    usability, and accessibility principles.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover-scale group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Problem Solving</h4>
                  </div>
                  <p className="text-gray-600">
                    Breaking down complex problems into manageable solutions through 
                    analytical thinking and creative approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats or Achievements */}
          <div 
            ref={statsRef}
            className={`mt-16 transition-all duration-700 delay-600 ease-in-out ${
              statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
                <div className="text-gray-600">Technologies Learned</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;