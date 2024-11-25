import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-sanskrit text-maroon-800">
              श्री राम मंदिर
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="/admin/login"
              className="px-4 py-2 rounded-md bg-maroon-800 text-white hover:bg-maroon-700 transition-colors"
            >
              Admin Login
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
              <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <a
                href="/admin/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-md bg-maroon-800 text-white hover:bg-maroon-700 transition-colors text-center"
              >
                Admin Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-maroon-800 font-medium transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-gray-600 hover:text-maroon-800 font-medium transition-colors"
    >
      {children}
    </a>
  );
}