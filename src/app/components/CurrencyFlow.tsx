import { motion } from 'motion/react';
import { ArrowRight, RefreshCw } from 'lucide-react';

export function CurrencyFlow() {
  const currencyPairs = [
    { from: 'EUR', to: 'USD', rate: '1.08', flow: '+€2.4M' },
    { from: 'GBP', to: 'EUR', rate: '1.16', flow: '+£1.8M' },
    { from: 'USD', to: 'BRL', rate: '5.12', flow: '+$3.2M' },
    { from: 'EUR', to: 'JPY', rate: '162.5', flow: '+€1.5M' },
  ];

  return (
    <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-white">
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--mj-teal)] rounded-full blur-[200px]"
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--mj-grey-3)] mb-6">
            Live Exchange
          </div>
          <h2 className="text-[2.5rem] md:text-6xl lg:text-7xl text-[var(--mj-navy)] leading-[0.9] tracking-tighter mb-8">
            Money in
            <br />
            <span className="text-[var(--mj-teal)] italic">motion.</span>
          </h2>
          <p className="text-lg md:text-2xl text-[var(--mj-grey-4)] leading-relaxed">
            Watch currencies flow in real-time across our global network.
          </p>
        </motion.div>

        {/* Currency Flow Visualization - Broken Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {currencyPairs.map((pair, index) => (
            <motion.div
              key={`${pair.from}-${pair.to}`}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index % 2 === 0 ? 'md:mt-8' : 'md:-mt-8'}
            >
              <div className="group relative bg-gradient-to-br from-[var(--mj-soft-grey)] to-white rounded-3xl p-8 md:p-10 border border-[var(--mj-grey-1)] hover:border-[var(--mj-teal)]/30 transition-all hover:shadow-2xl overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--mj-teal)]/5 to-transparent"
                />

                <div className="relative">
                  {/* Currency Pair */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex-1">
                      <div className="text-sm text-[var(--mj-grey-3)] mb-2">From</div>
                      <div className="text-4xl md:text-5xl text-[var(--mj-navy)]">{pair.from}</div>
                    </div>

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="mx-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-[var(--mj-teal)]/10 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-[var(--mj-teal)]" />
                      </div>
                    </motion.div>

                    <div className="flex-1 text-right">
                      <div className="text-sm text-[var(--mj-grey-3)] mb-2">To</div>
                      <div className="text-4xl md:text-5xl text-[var(--mj-navy)]">{pair.to}</div>
                    </div>
                  </div>

                  {/* Rate & Flow */}
                  <div className="flex items-center justify-between pt-6 border-t border-[var(--mj-grey-1)]">
                    <div>
                      <div className="text-sm text-[var(--mj-grey-3)] mb-1">Exchange Rate</div>
                      <div className="text-2xl md:text-3xl text-[var(--mj-navy)]">{pair.rate}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[var(--mj-grey-3)] mb-1">24h Volume</div>
                      <div className="text-2xl md:text-3xl text-[var(--mj-teal)]">{pair.flow}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Rate Ticker - Overlapping Element */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-[var(--mj-navy)] rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 rounded-2xl bg-[var(--mj-teal)]/20 flex items-center justify-center"
                >
                  <RefreshCw className="w-7 h-7 text-[var(--mj-teal)]" />
                </motion.div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Live Rates</div>
                  <div className="text-white text-2xl md:text-3xl">Updated every second</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-[var(--mj-teal)] text-[var(--mj-navy)] rounded-2xl hover:bg-[var(--mj-green-5)] transition-all flex items-center gap-2 group"
              >
                View All Rates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Scrolling Rate Ticker */}
            <div className="mt-8 overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="text-white/40 text-sm">EUR/USD 1.08</div>
                    <div className="text-white/40 text-sm">GBP/EUR 1.16</div>
                    <div className="text-white/40 text-sm">USD/BRL 5.12</div>
                    <div className="text-white/40 text-sm">EUR/JPY 162.5</div>
                    <div className="text-white/40 text-sm">GBP/USD 1.25</div>
                    <div className="text-white/40 text-sm">USD/CNY 7.24</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
