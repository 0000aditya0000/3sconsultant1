import { motion } from 'framer-motion';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
            light ? 'text-soft-green' : 'text-royal'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
