import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Event1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50" />
        </div>

        <div className="relative z-10 py-24 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hackathon:
              <span className="block bg-gradient-to-r from-teal-green-400 to-teal-green-500 text-transparent bg-clip-text">
                Code for Change
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              A 24-hour coding marathon where teams compete to build innovative solutions
              for real-world problems.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-teal-green-600 rounded-full hover:bg-teal-green-700 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-teal-green-100">Event Details</h2>
          <div className="grid gap-6">
            {[
              { icon: <Calendar className="h-6 w-6" />, text: "March 15, 2024" },
              { icon: <Clock className="h-6 w-6" />, text: "Starts at 10:00 AM" },
              { icon: <MapPin className="h-6 w-6" />, text: "Main Auditorium" },
              { icon: <Users className="h-6 w-6" />, text: "Teams of 2-4 members" },
              { icon: <Trophy className="h-6 w-6" />, text: "Prizes worth ₹1,00,000" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <div className="text-teal-green-500">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold mb-4 text-teal-green-100">Problem Statements</h2>
          <ul className="space-y-4">
            {[
              "Healthcare Innovation",
              "Smart City Solutions",
              "Environmental Sustainability",
              "Education Technology"
            ].map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-green-500 flex items-center justify-center text-sm mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-300">{problem}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-teal-green-100">Event Timeline</h2>
        <div className="space-y-6">
          {[
            { time: "10:00 AM", event: "Registration & Team Formation" },
            { time: "11:00 AM", event: "Problem Statement Release & Kickoff" },
            { time: "1:00 PM", event: "First Mentoring Session" },
            { time: "6:00 PM", event: "Progress Review" },
            { time: "Next Day 9:00 AM", event: "Final Submissions" },
            { time: "10:00 AM", event: "Presentations & Judging" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm flex items-center"
            >
              <div className="w-32 font-bold text-teal-green-400">{item.time}</div>
              <div className="text-gray-300">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Prizes */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { position: "1st Prize", amount: "₹50,000", extras: ["Internship Opportunities", "Mentorship Program"] },
          { position: "2nd Prize", amount: "₹30,000", extras: ["Cloud Credits", "Development Tools"] },
          { position: "3rd Prize", amount: "₹20,000", extras: ["Training Programs", "Software Licenses"] }
        ].map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center"
            >
              <Trophy className="h-12 w-12 text-teal-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-teal-green-100">{prize.position}</h3>
              <p className="text-2xl font-bold text-teal-green-400 mb-4">{prize.amount}</p>
              <ul className="text-gray-300 space-y-2">
                {prize.extras.map((extra, extraIndex) => (
                  <li key={extraIndex}>{extra}</li>
                ))}
              </ul>
            </motion.div>
          ))}
      </section>
    </div>
  );
};

export default Event1;
