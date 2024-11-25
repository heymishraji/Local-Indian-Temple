import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Temple Street, Spiritual Gardens, City - 400001"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ramtemple.com"
  },
  {
    icon: Clock,
    title: "Temple Hours",
    content: "5:00 AM - 9:00 PM (All days)"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-sanskrit text-maroon-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We welcome your questions and look forward to serving our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-maroon-800/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-maroon-800" />
                  </div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">Send us a Message</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-maroon-800 focus:border-maroon-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-maroon-800 focus:border-maroon-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-maroon-800 focus:border-maroon-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-maroon-800 text-white rounded-md hover:bg-maroon-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}