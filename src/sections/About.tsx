import { motion } from 'framer-motion';
import { SectionTitle } from '../components';

export const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  ];

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
    <section id="about" className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-light/80 leading-relaxed">
              I'm a passionate developer with a keen eye for design. With over 3 years of experience in web development,
              I specialize in creating responsive, user-friendly applications that solve real-world problems.
            </p>

            <p className="text-lg text-light/80 leading-relaxed">
              I love working with modern technologies and staying up-to-date with industry best practices. When I'm not
              coding, you'll find me exploring new design trends, contributing to open-source projects, or enjoying
              outdoor activities.
            </p>

            <p className="text-lg text-light/80 leading-relaxed">
              My approach combines technical excellence with creative problem-solving to deliver projects that not only
              work well but also look great and provide an exceptional user experience.
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="px-4 py-2 bg-secondary border border-accent/30 rounded-lg text-light hover:bg-accent/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
