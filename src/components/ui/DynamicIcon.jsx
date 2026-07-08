import * as Icons from 'lucide-react';

export default function DynamicIcon({ name, className = 'w-6 h-6', ...props }) {
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon className={className} {...props} />;
}
