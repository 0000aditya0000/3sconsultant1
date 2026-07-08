import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-royal text-white hover:bg-royal-dark shadow-lg shadow-royal/25 hover:shadow-royal/40',
  secondary:
    'bg-white text-navy border-2 border-navy/10 hover:border-royal hover:text-royal shadow-sm',
  outline:
    'bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white',
  green:
    'bg-soft-green text-white hover:bg-emerald-600 shadow-lg shadow-soft-green/25',
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
