import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-green-400 to-teal-green-500 text-transparent bg-clip-text">
            About TechFest 2024
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TechFest is the annual technical symposium that brings together the brightest minds
            from across the country to compete, learn, and innovate.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
        >
          <Target className="h-12 w-12 text-teal-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-teal-green-100">Our Vision</h2>
          <p className="text-gray-300">
            To create a platform that fosters innovation, encourages technical excellence,
            and builds a community of future technology leaders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
        >
          <Target className="h-12 w-12 text-teal-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-teal-green-100">Our Mission</h2>
          <p className="text-gray-300">
            To provide students with opportunities to showcase their technical prowess,
            learn from industry experts, and network with like-minded individuals.
          </p>
        </motion.div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-green-100">Why Choose TechFest?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="h-12 w-12 text-teal-green-500" />,
              title: "Premium Events",
              description: "Carefully curated events that challenge and inspire."
            },
            {
              icon: <BookOpen className="h-12 w-12 text-teal-green-500" />,
              title: "Expert Workshops",
              description: "Learn from industry leaders and technical experts."
            },
            {
              icon: <Users className="h-12 w-12 text-teal-green-500" />,
              title: "Networking",
              description: "Connect with peers and professionals from across the country."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-teal-green-100">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-green-100">Event Timeline</h2>
        <div className="space-y-8">
          {[
            { day: "Day 1", events: ["Opening Ceremony", "Technical Paper Presentation", "Coding Marathon"] },
            { day: "Day 2", events: ["Robotics Workshop", "Project Expo", "Gaming Tournament"] },
            { day: "Day 3", events: ["Hackathon Finals", "Cultural Events", "Prize Distribution"] }
          ].map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-teal-green-400">{day.day}</h3>
              <ul className="space-y-2">
                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="text-gray-300">{event}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
