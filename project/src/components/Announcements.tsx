import React from 'react';
import { Calendar, Users, Bell } from 'lucide-react';

export default function Announcements() {
  const announcements = [
    {
      icon: Calendar,
      title: "Ram Navami Celebrations",
      date: "April 17, 2024",
      content: "Join us for the grand celebration of Ram Navami with special puja and prasad distribution."
    },
    {
      icon: Users,
      title: "Community Meeting",
      date: "March 15, 2024",
      content: "Monthly committee meeting to discuss temple development plans and upcoming events."
    },
    {
      icon: Bell,
      title: "Special Archana",
      date: "Every Saturday",
      content: "Special archana services available every Saturday evening from 6 PM to 7 PM."
    }
  ];

  return (
    <section id="announcements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-sanskrit text-center text-maroon-800 mb-12">
          Latest Announcements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}