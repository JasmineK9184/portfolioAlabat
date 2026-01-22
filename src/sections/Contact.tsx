import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Button } from '../components';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '🔗' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Email', url: 'mailto:hello@example.com', icon: '✉️' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle title="Get In Touch" subtitle="Let's collaborate and bring your ideas to life" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light font-semibold mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light font-semibold mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light font-semibold mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 bg-primary border border-accent/30 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Status Messages */}
              <motion.div
                animate={submitStatus !== 'idle' ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                    ✗ Failed to send message. Please try again.
                  </div>
                )}
              </motion.div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-light mb-4">Let's Connect</h3>
              <p className="text-light/80 text-lg mb-6">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="text-accent font-semibold">Location</p>
                  <p className="text-light/70">San Francisco, CA</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <span className="text-3xl">✉️</span>
                <div>
                  <p className="text-accent font-semibold">Email</p>
                  <a href="mailto:hello@example.com" className="text-light/70 hover:text-accent transition-colors">
                    hello@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <span className="text-3xl">📱</span>
                <div>
                  <p className="text-accent font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="text-light/70 hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <div>
              <p className="text-light font-semibold mb-4">Follow Me On</p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center bg-secondary border-2 border-accent/30 hover:border-accent hover:bg-accent/10 rounded-lg transition-all text-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
