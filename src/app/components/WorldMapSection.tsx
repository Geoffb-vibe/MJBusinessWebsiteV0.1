import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, TrendingUp, Globe } from 'lucide-react';

export function WorldMapSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-[var(--mj-soft-grey)]">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--mj-navy) 1px, transparent 1px), linear-gradient(90deg, var(--mj-navy) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Image - Broken Grid Placement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?w=1200&q=80"
                alt="Global network visualization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--mj-navy)]/60 via-[var(--mj-navy)]/20 to-transparent" />

              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 flex-1 min-w-[140px]"
                >
                  <div className="text-2xl md:text-3xl text-[var(--mj-navy)] mb-1">70+</div>
                  <div className="text-xs md:text-sm text-[var(--mj-grey-3)]">Countries</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 flex-1 min-w-[140px]"
                >
                  <div className="text-2xl md:text-3xl text-[var(--mj-navy)] mb-1">45+</div>
                  <div className="text-xs md:text-sm text-[var(--mj-grey-3)]">Currencies</div>
                </motion.div>
              </div>
            </div>

            {/* Floating Card - Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -left-4 md:-left-12 max-w-xs z-10"
            >
              <div className="bg-gradient-to-br from-[var(--mj-teal)] to-[var(--mj-green-4)] rounded-3xl p-6 md:p-8 shadow-2xl">
                <TrendingUp className="w-10 h-10 text-white mb-4" />
                <div className="text-3xl md:text-4xl text-white mb-2">€12M+</div>
                <div className="text-white/90 text-sm md:text-base">Transferred every month</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Broken Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-center mt-12 lg:mt-0"
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--mj-grey-3)]">
                  Global Reach
                </div>
                <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl text-[var(--mj-navy)] leading-[0.9] tracking-tighter">
                  Your money,
                  <br />
                  <span className="text-[var(--mj-blue-3)] italic">everywhere.</span>
                </h2>
                <p className="text-lg md:text-xl text-[var(--mj-grey-4)] leading-relaxed">
                  From São Paulo to Singapore, move money across borders with confidence.
                  Real-time rates, transparent fees, instant transfers.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mj-teal)]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[var(--mj-teal)]" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">Global Network</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">
                      70+ countries, 45+ currencies, unlimited possibilities
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mj-teal)]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[var(--mj-teal)]" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">Live Rates</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">
                      Real-time mid-market rates updated every second
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--mj-teal)]/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-[var(--mj-teal)]" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg text-[var(--mj-navy)] mb-1">Fast Transfers</div>
                    <div className="text-sm md:text-base text-[var(--mj-grey-3)]">
                      Most transfers arrive within 1-2 business days
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-[var(--mj-navy)] text-white rounded-2xl hover:bg-[var(--mj-blue-1)] transition-all flex items-center gap-2 group"
              >
                Explore Countries
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
