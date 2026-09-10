import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, Zap, TrendingUp, Shield } from 'lucide-react';

export function BrokenGridGallery() {
  return (
    <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-gradient-to-b from-[var(--mj-soft-grey)] to-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--mj-grey-3)] mb-6">
            Why Choose Us
          </div>
          <h2 className="text-[2.5rem] md:text-6xl lg:text-7xl text-[var(--mj-navy)] leading-[0.9] tracking-tighter max-w-4xl">
            Built for the
            <br />
            <span className="text-[var(--mj-blue-3)] italic">modern world.</span>
          </h2>
        </motion.div>

        {/* Broken Grid Gallery */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Feature Card - Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-6 lg:col-span-7 row-span-2"
          >
            <div className="relative h-full bg-gradient-to-br from-[var(--mj-navy)] to-[var(--mj-blue-1)] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=800&q=80"
                  alt="Modern architecture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[var(--mj-teal)]/20 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-[var(--mj-teal)]" />
                  </div>
                  <h3 className="text-3xl md:text-5xl text-white mb-4 leading-tight">
                    Lightning-fast
                    <br />
                    transfers
                  </h3>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                    Most transfers arrive within 1-2 business days. Some currencies arrive even faster with our express service.
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--mj-teal)]" />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--mj-teal)]" />
                    <span>24/7 processing</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Card - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[var(--mj-grey-1)] hover:border-[var(--mj-teal)]/30 transition-all shadow-lg h-full flex flex-col justify-between">
              <div>
                <TrendingUp className="w-12 h-12 text-[var(--mj-teal)] mb-6" />
                <div className="text-5xl md:text-6xl text-[var(--mj-navy)] mb-4">8x</div>
                <div className="text-xl md:text-2xl text-[var(--mj-grey-4)] mb-3">Cheaper</div>
                <p className="text-base md:text-lg text-[var(--mj-grey-3)] leading-relaxed">
                  Save up to 8 times compared to traditional bank transfers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Security Card - Middle Right */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-start-2"
          >
            <div className="bg-gradient-to-br from-[var(--mj-teal)] to-[var(--mj-green-4)] rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <Shield className="w-12 h-12 text-white mb-6" />
                <h3 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
                  Bank-grade
                  <br />
                  security
                </h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Your money is protected by 256-bit encryption and multi-factor authentication
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-white/70 text-sm mb-2">Regulatory Compliance</div>
                <div className="text-white text-lg">EU Licensed & Regulated</div>
              </div>
            </div>
          </motion.div>

          {/* Image Card - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 lg:row-start-3 lg:col-start-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-full group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=600&q=80"
                alt="Modern geometric architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--mj-navy)]/80 via-[var(--mj-navy)]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="text-white/70 text-sm mb-2">Trusted by</div>
                <div className="text-white text-2xl md:text-3xl">50,000+ users</div>
              </div>
            </div>
          </motion.div>

          {/* Feature List Card - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-start-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[var(--mj-grey-1)] shadow-lg h-full">
              <h3 className="text-2xl md:text-3xl text-[var(--mj-navy)] mb-6">Everything you need</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--mj-teal)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">Live exchange rates</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">Mid-market rates updated every second</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--mj-teal)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">No hidden fees</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">What you see is what you pay, always</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--mj-teal)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">24/7 support</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">Real humans, always ready to help</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--mj-teal)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">Multi-currency accounts</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">Hold and manage multiple currencies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Accent Card - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-3"
          >
            <div className="bg-gradient-to-br from-[var(--mj-blue-3)] to-[var(--mj-blue-4)] rounded-3xl p-8 md:p-10 shadow-xl h-full flex flex-col justify-center items-center text-center">
              <div className="text-6xl md:text-7xl text-white mb-4">99.9%</div>
              <div className="text-lg md:text-xl text-white/90">Uptime</div>
              <div className="text-sm text-white/70 mt-2">Always available when you need us</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
