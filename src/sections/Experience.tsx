import { motion } from 'framer-motion';
import { SectionTitle } from '../components';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description:
        'Led development of customer-facing applications, mentored junior developers, and improved application performance by 40%.',
      highlights: ['React & Node.js', 'Team Leadership', 'Performance Optimization', 'System Design'],
    },
    {
      id: 2,
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2022',
      description:
        'Developed and maintained multiple web applications, implemented CI/CD pipelines, and reduced deployment time by 60%.',
      highlights: ['Full-Stack Development', 'DevOps', 'API Design', 'Database Optimization'],
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'Creative Web Agency',
      period: '2020 - 2021',
      description:
        'Built responsive web applications, collaborated with designers, and participated in code reviews and knowledge sharing.',
      highlights: ['Frontend Development', 'Responsive Design', 'Collaboration', 'Learning'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle title="Experience" subtitle="My professional journey and achievements" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-[-13px] top-0 w-6 h-6 bg-accent rounded-full border-4 border-primary"
              />

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-light">{exp.role}</h3>
                  <p className="text-accent font-semibold">{exp.company}</p>
                  <p className="text-light/50 text-sm">{exp.period}</p>
                </div>

                <p className="text-light/80 text-lg">{exp.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.highlights.map((highlight) => (
                    <motion.span
                      key={highlight}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-secondary border border-accent/30 text-accent text-sm rounded-full hover:border-accent transition-colors"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-secondary"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '30+', label: 'Happy Clients' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-secondary rounded-lg border border-accent/20 hover:border-accent transition-colors"
            >
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-light/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
