import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Calendar,
  CalendarDays,
  Menu,
  X,
  BookOpen,
  Home,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Beranda", path: "/", icon: Home },
  { label: "Kalkulator Umur", path: "/kalkulator-umur", icon: Calculator },
  { label: "Selisih Tanggal", path: "/selisih-tanggal", icon: CalendarDays },
  { label: "Kalender Keagamaan", path: "/kalender-keagamaan", icon: Calendar },
  { label: "Hari Penting", path: "/hari-penting", icon: Sparkles },
  { label: "Kalkulator Lainnya", path: "/kalkulator", icon: Calculator },
  { label: "Blog", path: "/blog", icon: BookOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-violet-500/5"
        : "bg-white/60 backdrop-blur-md"
        }`}
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Beranda AgeInfo - Kalkulator Umur Terlengkap"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <img
                src="/src/app/assets/images/logo.png"
                alt="AgeInfo Logo"
                className="h-11 w-auto"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent tracking-tighter">
                AgeInfo
              </span>
              <span className="text-[10px] text-gray-500 -mt-1 uppercase tracking-[0.2em] font-black">
                Platform Presisi
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center gap-1"
            role="menubar"
            aria-label="Menu navigasi"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive ? "page" : "false"}
                  aria-label={item.label}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      className={`relative px-4 py-2 rounded-xl transition-all focus-ring ${isActive
                        ? "text-violet-600"
                        : "text-gray-700 hover:text-violet-600"
                        }`}
                      aria-selected={isActive}
                      role="menuitem"
                    >
                      <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-violet-100 rounded-xl -z-10"
                          transition={{ type: "spring", damping: 20, stiffness: 100 }}
                          aria-hidden="true"
                        />
                      )}
                    </Button>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            role="menu"
            aria-label="Menu navigasi mobile"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    role="menuitem"
                    aria-current={isActive ? "page" : "false"}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all focus-ring ${isActive
                        ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      aria-selected={isActive}
                    >
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
