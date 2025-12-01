import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from './teamData';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="team-section" ref={sectionRef} className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Meet Our <span className="text-yellow-600">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of professionals is here to make your experience exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              activeMember={activeMember}
              setActiveMember={setActiveMember}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
