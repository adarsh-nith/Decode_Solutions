import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

interface NavbarProps {
  onPartnerClick: () => void;
}

export function Navbar({ onPartnerClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a
                href="#programs"
                className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors"
              >
                Programs
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onPartnerClick}
                className="bg-brand-500 hover:bg-brand-600 text-slate-950 px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-sm shadow-brand-500/20"
              >
                Partner with Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#programs"
                className="block text-base font-medium text-slate-300 hover:text-brand-400"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </a>
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onPartnerClick();
                  }}
                  className="block text-center bg-brand-500 text-slate-950 px-4 py-2.5 rounded-lg text-base font-bold"
                >
                  Partner with Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
