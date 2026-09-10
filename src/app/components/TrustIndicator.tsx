import { Shield, Eye, Building2, Lock } from 'lucide-react';

const icons = {
  shield: Shield,
  eye: Eye,
  building: Building2,
  lock: Lock,
};

interface TrustIndicatorProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

export function TrustIndicator({ icon, title, description }: TrustIndicatorProps) {
  const Icon = icons[icon];

  return (
    <div className="group flex flex-col items-center text-center space-y-5">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--mj-green-6)] to-[var(--mj-blue-6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[var(--mj-green-3)]" />
        </div>
        {/* Ambient glow on hover */}
        <div className="absolute inset-0 bg-[var(--mj-teal)]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg text-[var(--mj-navy)]">{title}</h3>
        <p className="text-sm text-[var(--mj-grey-3)] leading-relaxed max-w-[220px]">{description}</p>
      </div>
    </div>
  );
}
