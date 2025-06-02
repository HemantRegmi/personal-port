import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectRef, projectVisible] = useScrollAnimation();

  const projects = [
    {
      title: "JDH E-commerce Platform",
      description: "Developed a responsive e-commerce website allowing users to browse products, add items to a cart, and place orders. Built using HTML, CSS, JavaScript, and integrated basic form validation and user interface design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Product browsing and filtering",
        "Shopping cart functionality", 
        "Responsive design",
        "Form validation",
        "User-friendly interface"
      ],
      liveUrl: "https://jdhstore.netlify.app/",
      type: "E-commerce Website"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-in-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={projectRef}
              className={`bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-all duration-700 delay-200 ease-in-out hover:shadow-xl hover:scale-105 ${
                projectVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;