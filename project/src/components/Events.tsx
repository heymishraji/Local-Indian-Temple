import { motion } from 'framer-motion';
import { Calendar, Users, Music } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const events = [
  {
    title: "Ram Navami Celebrations",
    date: "April 17, 2024",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80",
    description: "Join us for the grand celebration of Ram Navami with special puja and prasad distribution.",
    icon: Calendar
  },
  {
    title: "Bhajan Sandhya",
    date: "Every Saturday",
    image: "https://images.unsplash.com/photo-1621506821957-1b50ab7787a4?auto=format&fit=crop&q=80",
    description: "Experience divine music and devotional songs every Saturday evening.",
    icon: Music
  },
  {
    title: "Community Gathering",
    date: "Monthly",
    image: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f?auto=format&fit=crop&q=80",
    description: "Monthly community meeting to discuss temple activities and upcoming events.",
    icon: Users
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-sanskrit text-maroon-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in celebrating our rich cultural heritage and spiritual traditions
          </p>
        </motion.div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-white rounded-full">
                    <event.icon className="w-6 h-6 text-maroon-800" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-amber-600 mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}