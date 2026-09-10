interface CountryCardProps {
  country: string;
  currency: string;
  flag: string;
}

export function CountryCard({ country, currency, flag }: CountryCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-[var(--mj-grey-1)] hover:border-[var(--mj-teal)] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--mj-teal)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative space-y-4">
        <div className="text-5xl">{flag}</div>
        <div className="space-y-1">
          <h3 className="text-lg text-[var(--mj-navy)] group-hover:text-[var(--mj-teal)] transition-colors">
            {country}
          </h3>
          <p className="text-sm text-[var(--mj-grey-3)] uppercase tracking-wider">{currency}</p>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--mj-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
