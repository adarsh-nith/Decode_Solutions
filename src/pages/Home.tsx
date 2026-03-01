import { motion } from "motion/react";
import { ArrowRight, BookOpen, Briefcase, CheckCircle2, Code, Database, FileText, GraduationCap, Layout, Monitor, Server, Users } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-brand-600" />,
      title: "Data Structures & Algorithms",
      description: "Master problem-solving with comprehensive DSA training tailored for product-based companies.",
    },
    {
      icon: <Database className="w-6 h-6 text-brand-600" />,
      title: "SQL & DBMS",
      description: "Deep dive into database design, complex queries, and optimization techniques.",
    },
    {
      icon: <Layout className="w-6 h-6 text-brand-600" />,
      title: "Object-Oriented Programming",
      description: "Learn core OOP concepts with real-world applications in Java/C++.",
    },
    {
      icon: <Server className="w-6 h-6 text-brand-600" />,
      title: "Operating Systems",
      description: "Understand OS internals, memory management, and process scheduling.",
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-600" />,
      title: "Resume Building",
      description: "Craft ATS-friendly resumes that highlight your strengths and projects effectively.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-600" />,
      title: "Interview Preparation",
      description: "End-to-end mock interviews, behavioral rounds, and technical assessments.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24 lg:pt-32 lg:pb-40">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
              Partnering with Top Engineering Colleges
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]"
            >
              Crack Top Tech Placements with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Decode Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We tie up with colleges to provide end-to-end training in DSA, Core CS subjects, and interview preparation, ensuring students are industry-ready.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#colleges" className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 text-slate-950 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2">
                Partner Your College <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#programs" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Explore Curriculum
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Logos Section */}
      <section className="py-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
            Trusted by institutions and students across the country
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">50+</div>
              <div className="text-slate-400 text-sm">College Partners</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">10k+</div>
              <div className="text-slate-400 text-sm">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">95%</div>
              <div className="text-slate-400 text-sm">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">300+</div>
              <div className="text-slate-400 text-sm">Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Curriculum Section */}
      <section id="programs" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Training Curriculum</h2>
            <p className="text-lg text-slate-600">
              Our structured programs cover everything a student needs to clear technical rounds at top product and service-based companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Colleges Section */}
      <section id="colleges" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Partner with Decode Solution?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We act as an extension of your college's placement cell, providing specialized technical training that bridges the gap between academic curriculum and industry demands.
              </p>
              
              <div className="space-y-6">
                {[
                  "Customized curriculum aligned with your academic calendar",
                  "Expert instructors with industry experience",
                  "Regular assessments and progress tracking",
                  "Dedicated mock interview sessions",
                  "Assistance with company-specific preparation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors">
                  Request a Proposal <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-brand-50 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <Users className="w-8 h-8 text-brand-600 mb-4" />
                      <div className="font-bold text-slate-900 mb-1">Expert Mentors</div>
                      <div className="text-sm text-slate-500">From top tech companies</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <Monitor className="w-8 h-8 text-brand-600 mb-4" />
                      <div className="font-bold text-slate-900 mb-1">Live Classes</div>
                      <div className="text-sm text-slate-500">Interactive sessions</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <BookOpen className="w-8 h-8 text-brand-600 mb-4" />
                      <div className="font-bold text-slate-900 mb-1">Study Material</div>
                      <div className="text-sm text-slate-500">Curated resources</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <GraduationCap className="w-8 h-8 text-brand-600 mb-4" />
                      <div className="font-bold text-slate-900 mb-1">Placements</div>
                      <div className="text-sm text-slate-500">Dedicated support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/1920/1080')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your college placements?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Join the growing network of colleges that trust Decode Solutions for their students' technical training.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-900 hover:bg-brand-50 rounded-xl font-bold text-lg transition-colors">
              Contact Our Team
            </a>
            <a href="#brochure" className="w-full sm:w-auto px-8 py-4 bg-brand-800 text-white hover:bg-brand-700 border border-brand-700 rounded-xl font-bold text-lg transition-colors">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
