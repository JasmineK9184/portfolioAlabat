import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && <p className="text-light/70 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};
