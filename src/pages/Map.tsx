import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Map = () => {
  const latitude = 13.356967729823818;
  const longitude = 80.14212951619321;
  // Simplified embed URL with 'q' and 'output=embed'
  const embedURL = `https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-green-400 to-teal-green-500 text-transparent bg-clip-text">
            Venue Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find us easily at the heart of the campus.
          </p>
        </motion.div>
      </section>

      {/* Map Embed */}
      <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-full aspect-video overflow-hidden rounded-xl">
            <iframe
              src={embedURL}
              width="100%"
              height="650"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Symposium Venue"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Address and Contact */}
      <section className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <MapPin className="h-12 w-12 text-teal-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-teal-green-100">Event Location</h2>
          <address className="text-gray-300 not-italic space-y-2">
            <p>Main Auditorium, Tech College Campus</p>
            <p>123 Tech Street</p>
            <p>Tech City, State, 54321</p>
          </address>
        </motion.div>

        <motion.div>
          <h2 className="text-2xl font-bold mb-4 text-teal-green-100">Contact Information</h2>
          <div className="text-gray-300 space-y-2">
            <p>For any queries, please contact the event organizers:</p>
            <p>
              Email:
              <a
                href="mailto:info@techfest2024.com"
                className="text-teal-green-400 hover:underline"
              >
                info@techfest2024.com
              </a>
            </p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Map;

