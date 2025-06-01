import { useState } from "react";
import { Mail, MapPin, Phone, ExternalLink, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("h76nqPr0erQjYbRT1");
      
      await emailjs.send(
        "service_xnz761k", // Your service ID
        "template_vggpaba", // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Hemanta Regmi"
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 hover-scale group">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a 
                      href="mailto:hregmi2060@gmail.com"
                      className="text-gray-800 font-semibold hover:text-blue-600 transition-colors story-link"
                    >
                      hregmi2060@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover-scale group">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <a 
                      href="tel:+9779866717332"
                      className="text-gray-800 font-semibold hover:text-green-600 transition-colors story-link"
                    >
                      +977 9866717332
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover-scale group">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-gray-800 font-semibold">Hatiban, Lalitpur</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover-scale group">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <ExternalLink className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Portfolio Website</p>
                    <a 
                      href="https://hemantaregmi.com.np"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-semibold hover:text-orange-600 transition-colors story-link"
                    >
                      hemantaregmi.com.np
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mt-8">
                <h4 className="font-semibold text-gray-800 mb-3">Currently looking for:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center animate-fade-in" style={{animationDelay: '0.1s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 pulse"></span>
                    Frontend Development Internships
                  </li>
                  <li className="flex items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 pulse"></span>
                    Junior Developer Positions
                  </li>
                  <li className="flex items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 pulse"></span>
                    Collaborative Projects
                  </li>
                  <li className="flex items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 pulse"></span>
                    Learning Opportunities
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
