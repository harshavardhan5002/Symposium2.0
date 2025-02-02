import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, Info } from 'lucide-react';

const Rules = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-green-400 to-teal-green-500 text-transparent bg-clip-text">
          Rules & Guidelines
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Please read and follow these guidelines to ensure a smooth and fair experience for all participants.
        </p>
      </motion.section>

      {/* General Rules */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-teal-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-teal-green-100">General Rules</h2>
          </div>
          <ul className="space-y-4">
            {[
              "All participants must carry their college ID cards throughout the event.",
              "Registration is mandatory for all events.",
              "Participants should report 30 minutes before their scheduled event.",
              "Decision of judges will be final and binding.",
              "Use of mobile phones during competitions is strictly prohibited.",
              "Any form of malpractice will lead to immediate disqualification."
            ].map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 text-teal-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Event Specific Rules */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-teal-green-100">Event Specific Rules</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Technical Paper Presentation",
              rules: [
                "Maximum 3 members per team",
                "Presentation time: 8 minutes",
                "Q&A session: 2 minutes",
                "Plagiarism check will be conducted"
              ]
            },
            {
              title: "Coding Competition",
              rules: [
                "Individual participation only",
                "Duration: 3 hours",
                "Internet access will be restricted",
                "Any programming language allowed"
              ]
            },
            {
              title: "Project Expo",
              rules: [
                "Team size: 2-4 members",
                "Working model is mandatory",
                "Poster size: 3x4 feet",
                "Abstract submission required"
              ]
            },
            {
              title: "Robotics Challenge",
              rules: [
                "Maximum 4 members per team",
                "Robot specifications provided",
                "Safety measures mandatory",
                "Pre-registration required"
              ]
            }
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-green-400">{event.title}</h3>
              <ul className="space-y-3">
                {event.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <Info className="h-5 w-5 text-teal-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Code of Conduct */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-teal-green-100">Code of Conduct</h2>
        <p className="text-gray-300 mb-6">
          All participants are expected to maintain professional behavior throughout the event.
          Any violation of the code of conduct may result in immediate disqualification.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-bold text-teal-green-400">Expected Behavior</h3>
            <ul className="space-y-2">
              {[
                "Be respectful to all participants",
                "Follow event guidelines",
                "Maintain academic integrity",
                "Collaborate fairly"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-teal-green-400">Prohibited Behavior</h3>
            <ul className="space-y-2">
              {[
                "Harassment of any kind",
                "Plagiarism",
                "Damage to property",
                "Disruptive behavior"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Rules;
