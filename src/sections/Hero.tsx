import { motion } from 'framer-motion';
import { Button } from '../components';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-4xl w-full"
      >
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Glassmorphism Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-blue-400/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

          {/* Content with Two Columns */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Jasmine Kiezyhiah T. Alabat
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <p className="text-base sm:text-lg text-light/80 mb-2">
                    Full-Stack Developer & Digital Designer
                  </p>
                  <p className="text-xs sm:text-sm text-light/60">
                    Crafting elegant solutions with React, TypeScript, and modern web technologies
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-light/70 text-sm sm:text-base max-w-lg mb-8 leading-relaxed"
                >
                  Passionate about creating beautiful, functional digital experiences that solve real-world problems.
                  Let's build something amazing together.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" href="#projects">
                    View My Work ✨
                  </Button>
                  <Button size="lg" variant="outline" href="#contact">
                    Get in Touch →
                  </Button>
                </motion.div>
              </div>

              {/* Right Side - Profile Picture */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center w-full"
              >
                <div className="relative flex justify-center items-center">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>

                  {/* Profile Picture Container */}
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/20 to-blue-400/20 backdrop-blur-sm">
                    <img
                      src="/imageprofile.jpg"
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-4 -right-4 bg-accent px-6 py-3 rounded-full text-primary font-bold shadow-lg"
                  >
                    Available 🚀
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/10"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '3+', label: 'Years Exp.' },
                { number: '30+', label: 'Clients' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-light/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-light/60 text-sm mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
