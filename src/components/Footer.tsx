import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-lg leading-none tracking-wider text-brand-500">
                  DECODE
                </span>
                <span className="font-display font-medium text-xs leading-none tracking-[0.2em] text-brand-500 mt-1">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering college students with industry-relevant skills. We bridge the gap between academic curriculum and tech industry requirements.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Data Structures & Algorithms</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">SQL & Databases</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Object-Oriented Programming</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Operating Systems</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Interview Preparation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">College Tie-ups</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Decode Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
