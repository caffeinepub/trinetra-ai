import { Brain, Mic, Zap } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Mic,
    step: "01",
    title: "Speak a Command",
    description:
      'Say anything naturally. "Open Chrome", "Play Bohemian Rhapsody", "Send a WhatsApp to Rahul" — Trinetra listens.',
    color: "oklch(0.75 0.18 210)",
  },
  {
    icon: Brain,
    step: "02",
    title: "Trinetra Understands",
    description:
      "Advanced NLP engine processes your intent in real-time, contextualizing commands with screen awareness and history.",
    color: "oklch(0.65 0.22 295)",
  },
  {
    icon: Zap,
    step: "03",
    title: "Action Executed",
    description:
      "The action fires instantly — apps launch, messages send, files move. Zero latency from voice to result.",
    color: "oklch(0.75 0.18 55)",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.1_0.015_260/0.3)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[oklch(0.65_0.22_295)] mb-4">
            Process
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text">
            How It Works
          </h2>
          <p className="mt-4 font-body text-[oklch(0.6_0.04_240)] max-w-xl mx-auto">
            Three simple steps from voice to action.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px">
            <div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.75 0.18 210 / 0.4), oklch(0.65 0.22 295 / 0.4), oklch(0.75 0.18 55 / 0.4))",
              }}
            />
            {/* Animated travelling dot */}
            <motion.div
              className="absolute -top-1.5 w-3 h-3 rounded-full bg-[oklch(0.75_0.18_210)] glow-blue"
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1 flex flex-col items-center text-center px-6"
                data-ocid={`how-it-works.item.${i + 1}`}
              >
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.color.replace(")", " / 0.2)")} , oklch(0.1 0.015 260 / 0.8))`,
                    border: `1px solid ${step.color.replace(")", " / 0.4)")}`,
                    boxShadow: `0 0 30px ${step.color.replace(")", " / 0.2)")}`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: step.color }} />
                  <div
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                    style={{
                      background: step.color,
                      color: "oklch(0.08 0.01 265)",
                    }}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[oklch(0.6_0.04_240)] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
