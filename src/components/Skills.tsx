import { Code, Database, GitBranch, Palette, Monitor, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [softSkillsRef, softSkillsVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-blue-500"
    },
    {
      title: "Frameworks/Libraries",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React.js (basics)", "Bootstrap", "Tailwind CSS"],
      color: "bg-green-500"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git", "GitHub"],
      color: "bg-purple-500"
    },
    {
      title: "Tools & Platforms",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["VS Code", "npm"],
      color: "bg-orange-500"
    },
    {
      title: "Deployment",
      icon: <Database className="w-8 h-8" />,
      skills: ["GitHub Pages", "Netlify"],
      color: "bg-red-500"
    }
  ];

  const softSkills = [
    "Strong willingness to learn and adapt",
    "Attention to detail",
    "Problem-solving mindset",
    "Good communication skills",
    "Time management"
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-in-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800">Technical Skills</h2>
        </div>
        
        <div 
          ref={skillsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-200 ease-in-out ${
            skillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          ref={softSkillsRef}
          className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 transition-all duration-700 delay-400 ease-in-out ${
            softSkillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-gray-700 text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;