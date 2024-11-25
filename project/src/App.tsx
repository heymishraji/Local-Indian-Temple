import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <main>
                <Hero />
                <About />
                <Events />
                <Gallery />
                <Contact />
              </main>
            </div>
          }
        />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;