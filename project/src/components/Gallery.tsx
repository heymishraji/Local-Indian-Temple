import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1542397284385-6010376c5337?auto=format&fit=crop&q=80",
    title: "Main Temple Hall"
  },
  {
    url: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
    title: "Temple Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80",
    title: "Festival Celebrations"
  },
  {
    url: "https://images.unsplash.com/photo-1621506821957-1b50ab7787a4?auto=format&fit=crop&q=80",
    title: "Evening Aarti"
  },
  {
    url: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f?auto=format&fit=crop&q=80",
    title: "Community Events"
  },
  {
    url: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80",
    title: "Temple Exterior"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <ImageIcon className="w-8 h-8 text-maroon-800" />
          </div>
          <h2 className="text-3xl font-sanskrit text-maroon-800 mb-4">
            Temple Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Glimpses of our temple's divine beauty and spiritual moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-sm"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}