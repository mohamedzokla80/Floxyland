import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamMemberCard = ({ member, activeMember, setActiveMember, isInView }) => {
  const isActive = activeMember === member.id;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -5 }}
      onClick={() => setActiveMember(isActive ? null : member.id)}
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
          transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 10 }}
        >
          {member.experience}
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
        <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-4">{member.role}</p>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Achievements:</h4>
                <ul className="space-y-2">
                  {member.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-400"
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
          className="w-full mt-4 text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-500 text-sm font-medium transition-colors duration-200 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            setActiveMember(isActive ? null : member.id);
          }}
        >
          {isActive ? 'Show Less' : 'Learn More'}
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
