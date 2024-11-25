import { motion } from 'framer-motion';
import { Bell, Sun, Moon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-sanskrit text-maroon-800 mb-6">About Our Temple</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in 1945, our temple has been a cornerstone of spiritual guidance and 
              community service. The temple complex, spanning over 5 acres, features traditional 
              architecture that reflects our rich cultural heritage.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The main shrine, dedicated to Lord Ram, was constructed by master craftsmen from 
              Rajasthan using traditional techniques and sacred geometry principles.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-amber-50 p-6 rounded-lg"
              >
                <Bell className="w-6 h-6 text-maroon-800 mb-3" />
                <h3 className="font-sanskrit text-lg text-maroon-800 mb-2">Daily Aarti</h3>
                <p className="text-gray-600">Morning: 6:00 AM<br/>Evening: 7:00 PM</p>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-amber-50 p-6 rounded-lg"
              >
                <Sun className="w-6 h-6 text-maroon-800 mb-3" />
                <h3 className="font-sanskrit text-lg text-maroon-800 mb-2">Morning Hours</h3>
                <p className="text-gray-600">5:00 AM - 12:00 PM</p>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-amber-50 p-6 rounded-lg"
              >
                <Moon className="w-6 h-6 text-maroon-800 mb-3" />
                <h3 className="font-sanskrit text-lg text-maroon-800 mb-2">Evening Hours</h3>
                <p className="text-gray-600">4:00 PM - 9:00 PM</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1542397284385-6010376c5337?auto=format&fit=crop&q=80"
              alt="Temple interior"
              className="rounded-lg shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80"
              alt="Temple architecture detail"
              className="absolute -bottom-8 -left-8 w-2/3 rounded-lg shadow-xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}