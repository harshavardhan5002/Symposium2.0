import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredEvents = [1, 2, 3, 4, 5, 6]; // Added 6 to featuredEvents array
  const eventNames = [
    "Paper Presentation",
    "El Casino",
    "Electrica Quest",
    "Circuit Debugging",
    "Ohm-azing Quiz",
    "Surprise Event" // Surprise Event is already in eventNames array
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-green-400 to-teal-green-500 text-transparent bg-clip-text">
            BLITZKRIEG 2K25
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join us for the most anticipated technical symposium of the year
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-teal-green-600 rounded-full hover:bg-teal-green-700 transition-colors"
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
          >
            <Calendar className="h-12 w-12 text-teal-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-teal-green-100">March 15-17, 2024</h3>
            <p className="text-gray-400">Three days of innovation, learning, and competition</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
          >
            <Users className="h-12 w-12 text-teal-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-teal-green-100">5000+ Participants</h3>
            <p className="text-gray-400">Connect with tech enthusiasts from across the country</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
          >
            <Trophy className="h-12 w-12 text-teal-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-teal-green-100">₹5,00,000 in Prizes</h3>
            <p className="text-gray-400">Compete and win exciting prizes and recognition</p>
          </motion.div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-green-100">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch"> {/* Modified grid class here */}
          {featuredEvents.map((event, index) => ( // Map over featuredEvents array and use index
            <motion.div
              key={event}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <img
                src={`https://images.unsplash.com/photo-${event === 1 ? '1517245386807-bb43f82c33c4' : event === 2 ? '1517694712202-14dd9538aa97' : event === 3 ? '1485827404703-89b55fcc595e' : event === 4 ? '1504384764586-bb4cdc1707b0' : event === 5 ? '1511512578047-dfb367046420' : '1517245386807-bb43f82c33c4'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={`Event ${event}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-teal-green-100">{eventNames[index]}</h3> {/* Use eventNames array here */}
                <p className="text-gray-400 mb-4">
             
                </p>
                <Link
                  to={`/event${event}`}
                  className="inline-flex items-center text-teal-green-400 hover:text-teal-green-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

