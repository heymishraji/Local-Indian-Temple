import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/admin/dashboard' },
  { icon: Calendar, label: 'Events', path: '/admin/dashboard/events' },
  { icon: Users, label: 'Committee', path: '/admin/dashboard/committee' },
  { icon: Settings, label: 'Settings', path: '/admin/dashboard/settings' },
];

export default function DashboardNav() {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="bg-white border-r border-gray-200 h-screen w-64 fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-xl font-sanskrit text-maroon-800">Admin Panel</h2>
      </div>
      
      <div className="px-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
              location.pathname === item.path
                ? 'bg-maroon-800 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          onClick={() => logout()}
          className="flex items-center gap-3 w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </nav>
  );
}