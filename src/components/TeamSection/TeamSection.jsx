import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById('team-section');
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Alexander Thompson",
      role: "General Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      experience: "15+ years",
      achievements: ["Forbes 5-Star Service Award", "Hospitality Excellence Recognition", "Guest Satisfaction Champion"]
    },
    {
      id: 2,
      name: "Sofia Martinez",
      role: "Head of Guest Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      experience: "12+ years",
      achievements: ["Excellence in Service Award", "Guest Ambassador Recognition", "Cultural Diversity Champion"]
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      experience: "18+ years",
      achievements: ["Michelin Star Recognition", "James Beard Award Nominee", "Culinary Innovation Award"]
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Spa & Wellness Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      experience: "10+ years",
      achievements: ["Wellness Excellence Award", "Spa Innovation Recognition", "Holistic Health Certification"]
    },
    {
      id: 5,
      name: "Marcus Chen",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      experience: "14+ years",
      achievements: ["Operational Excellence Award", "Efficiency Innovation Leader", "Quality Management Champion"]
    },
    {
      id: 6,
      name: "Isabella Romano",
      role: "Events & Concierge Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      experience: "11+ years",
      achievements: ["Event Excellence Award", "Concierge Gold Standard", "Customer Service Champion"]
    }
  ];

  return (
    <section id="team-section" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Meet Our <span className="text-yellow-600">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals is here to make your experience exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -5 }}
              onClick={() => setActiveMember(activeMember === member.id ? null : member.id)}
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 10 }}
                >
                  {member.experience}
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                
                <AnimatePresence>
                  {activeMember === member.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <h4 className="font-semibold mb-2 text-gray-900">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, index) => (
                            <motion.li 
                              key={index}
                              className="flex items-start text-sm text-gray-600"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * index }}
                            >
                              <svg className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  className="w-full mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMember(activeMember === member.id ? null : member.id);
                  }}
                >
                  {activeMember === member.id ? 'Show Less' : 'Learn More'}
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeMember === member.id ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
