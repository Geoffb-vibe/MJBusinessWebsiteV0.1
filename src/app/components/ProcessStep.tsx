interface ProcessStepProps {
  number: number;
  title: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, isLast }: ProcessStepProps) {
  return (
    <div className="flex-1 flex items-start gap-6 group">
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Number circle with premium styling */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--mj-navy)] to-[var(--mj-blue-2)] text-white flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
            {number}
          </div>
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[var(--mj-teal)]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-base text-[var(--mj-navy)] max-w-[140px] leading-snug">
            {title}
          </p>
        </div>
      </div>

      {!isLast && (
        <div className="hidden md:flex items-center justify-center flex-1 -mt-8">
          <div className="h-px bg-gradient-to-r from-[var(--mj-grey-2)] via-[var(--mj-teal)]/30 to-[var(--mj-grey-2)] w-full" />
        </div>
      )}
    </div>
  );
}
