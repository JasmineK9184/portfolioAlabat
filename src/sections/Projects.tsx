import { motion } from 'framer-motion';
import { SectionTitle, Button } from '../components';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Social Media Analytics',
      description:
        'Data visualization platform providing insights and analytics for social media metrics with beautiful charts.',
      tags: ['React', 'Chart.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Content Management System',
      description:
        'Headless CMS with intuitive UI for managing digital content, with support for multiple content types.',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description:
        'Real-time weather application with beautiful UI, location-based forecasts, and detailed weather analytics.',
      tags: ['React', 'API Integration', 'Geolocation', 'Charts'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1560807707-38cc528cb352?w=500&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle title="Featured Projects" subtitle="Showcase of my recent work and accomplishments" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-primary border border-secondary hover:border-accent transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-secondary">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-light/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                <Button href={project.link} variant="outline" size="sm" className="w-full">
                  View Project →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" variant="primary" href="#">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
