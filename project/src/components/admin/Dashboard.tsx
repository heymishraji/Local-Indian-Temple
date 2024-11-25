import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IndianRupee, Users, Calendar, Gift } from 'lucide-react';

const data = [
  { name: 'Mon', amount: 12000 },
  { name: 'Tue', amount: 15000 },
  { name: 'Wed', amount: 18000 },
  { name: 'Thu', amount: 14000 },
  { name: 'Fri', amount: 21000 },
  { name: 'Sat', amount: 25000 },
  { name: 'Sun', amount: 30000 },
];

const stats = [
  { name: 'Daily Visitors', value: '1,200+', icon: Users },
  { name: 'Today\'s Collection', value: '₹45,000', icon: IndianRupee },
  { name: 'Upcoming Events', value: '3', icon: Calendar },
  { name: 'Recent Donations', value: '25', icon: Gift },
];

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-600">Here's what's happening at the temple today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm p-6 flex items-center"
          >
            <div className="p-3 bg-maroon-800/10 rounded-lg">
              <stat.icon className="w-6 h-6 text-maroon-800" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Weekly Collections Overview
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8B0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}