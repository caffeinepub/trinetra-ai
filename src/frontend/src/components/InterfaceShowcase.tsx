import { motion } from "motion/react";

const commandHistory = [
  { cmd: "Open Google Chrome", status: "done", time: "0.08s" },
  { cmd: "Play Blinding Lights on YouTube", status: "done", time: "0.12s" },
  { cmd: "Send WhatsApp to Priya: Coming soon", status: "done", time: "0.09s" },
  { cmd: "Take screenshot of screen", status: "active", time: "..." },
];

const waveBars = Array.from({ length: 12 }, (_, i) => i);

export function InterfaceShowcase() {
  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[oklch(0.65_0.22_295/0.05)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[oklch(0.65_0.22_295)] mb-4">
            Interface
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text">
            See It In Action
          </h2>
          <p className="mt-4 font-body text-[oklch(0.6_0.04_240)] max-w-xl mx-auto">
            The Trinetra AI interface — minimal, responsive, always listening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-[oklch(0.75_0.18_210/0.2)] max-w-4xl mx-auto"
          style={{
            boxShadow:
              "0 0 80px oklch(0.75 0.18 210 / 0.08), 0 0 0 1px oklch(0.75 0.18 210 / 0.05)",
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[oklch(0.6_0.2_25)]" />
            <div className="w-3 h-3 rounded-full bg-[oklch(0.7_0.18_75)]" />
            <div className="w-3 h-3 rounded-full bg-[oklch(0.65_0.2_145)]" />
            <div className="flex-1 mx-4 h-6 rounded-md bg-[oklch(0.15_0.02_260)] flex items-center px-3">
              <span className="text-xs font-mono text-[oklch(0.45_0.04_240)]">
                trinetra://assistant
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Central orb */}
            <div className="flex-1 flex flex-col items-center justify-center py-8 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_210/0.04)] to-[oklch(0.65_0.22_295/0.04)]" />
              {/* Orb */}
              <div className="relative w-32 h-32">
                {[1, 2].map((ringIdx) => (
                  <div
                    key={ringIdx}
                    className="absolute inset-0 rounded-full border border-[oklch(0.75_0.18_210/0.2)] animate-pulse-ring"
                    style={{ animationDelay: `${ringIdx * 0.5}s` }}
                  />
                ))}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_210/0.4)] to-[oklch(0.65_0.22_295/0.5)] glow-blue animate-pulse-core flex items-center justify-center">
                  <img
                    src="/assets/generated/trinetra-logo-transparent.dim_300x300.png"
                    alt="Trinetra"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 font-mono text-xs text-[oklch(0.75_0.18_210)] tracking-widest animate-blink">
                LISTENING...
              </div>
              {/* Wave visualizer */}
              <div className="mt-4 flex items-center gap-1">
                {waveBars.map((barIdx) => (
                  <div
                    key={barIdx}
                    className="w-1 bg-gradient-to-t from-[oklch(0.65_0.22_295)] to-[oklch(0.75_0.18_210)] rounded-full"
                    style={{
                      height: `${8 + Math.sin(barIdx * 0.9) * 14}px`,
                      animation: `wave-bar ${0.5 + barIdx * 0.07}s ease-in-out infinite`,
                      animationDelay: `${barIdx * 0.06}s`,
                      opacity: 0.7,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Command history panel */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="font-mono text-xs text-[oklch(0.5_0.04_240)] tracking-widest uppercase mb-1">
                Command History
              </div>
              {commandHistory.map((item, i) => (
                <div
                  key={item.cmd}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-body ${
                    item.status === "active"
                      ? "border-[oklch(0.75_0.18_210/0.4)] bg-[oklch(0.75_0.18_210/0.07)]"
                      : "border-[oklch(0.25_0.04_260)] bg-[oklch(0.12_0.02_260/0.5)]"
                  }`}
                  data-ocid={`demo.item.${i + 1}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      item.status === "active"
                        ? "bg-[oklch(0.75_0.18_210)] animate-blink"
                        : "bg-[oklch(0.65_0.2_145)]"
                    }`}
                  />
                  <span
                    className={
                      item.status === "active"
                        ? "text-[oklch(0.85_0.18_210)]"
                        : "text-[oklch(0.65_0.04_240)]"
                    }
                  >
                    {item.cmd}
                  </span>
                  <span className="ml-auto font-mono text-xs text-[oklch(0.45_0.04_240)] flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}

              {/* Input area */}
              <div className="mt-2 flex items-center gap-3 p-3 rounded-xl border border-[oklch(0.3_0.06_260)] bg-[oklch(0.12_0.02_260/0.8)]">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.75_0.18_210)] animate-blink" />
                <span className="font-mono text-xs text-[oklch(0.5_0.04_240)]">
                  Awaiting voice input
                </span>
                <span className="ml-auto font-mono text-xs text-[oklch(0.75_0.18_210)] animate-blink">
                  _
                </span>
              </div>

              {/* Status indicators */}
              <div className="mt-1 flex items-center gap-4 px-1">
                {[
                  { label: "NLP", active: true },
                  { label: "Screen", active: true },
                  { label: "Security", active: true },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        s.active
                          ? "bg-[oklch(0.7_0.18_145)]"
                          : "bg-[oklch(0.4_0.04_240)]"
                      }`}
                    />
                    <span className="font-mono text-xs text-[oklch(0.5_0.04_240)]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
