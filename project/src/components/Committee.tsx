import React from 'react';

export default function Committee() {
  const members = [
    {
      name: "Rajesh Sharma",
      role: "President",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
    },
    {
      name: "Priya Patel",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Amit Verma",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-sanskrit text-center text-maroon-800 mb-12">
          Temple Committee
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="absolute inset-0 rounded-full border-2 border-amber-500 transform hover:scale-105 transition-transform" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}