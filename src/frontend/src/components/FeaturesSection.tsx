import {
  MessageCircle,
  Monitor,
  Music,
  ScanLine,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Monitor,
    title: "PC Automation",
    description:
      "Control your PC with just your voice. Open apps, manage files, execute commands — all hands-free.",
    color: "oklch(0.75 0.18 210)",
    glow: "glow-blue",
  },
  {
    icon: ScanLine,
    title: "Screen Analysis",
    description:
      "AI-powered real-time screen understanding. Trinetra reads, interprets, and responds to what's on your screen.",
    color: "oklch(0.65 0.22 295)",
    glow: "glow-violet",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Smart threat detection and proactive protection. Your PC's guardian that never sleeps.",
    color: "oklch(0.7 0.18 160)",
    glow: "",
  },
  {
    icon: Share2,
    title: "File Share",
    description:
      "Instant voice-command file transfer. Say the word and files travel where you need them.",
    color: "oklch(0.75 0.15 55)",
    glow: "",
  },
  {
    icon: Music,
    title: "Play on YouTube",
    description:
      "Play any song or video hands-free. Just say the song name and Trinetra queues it up on YouTube.",
    color: "oklch(0.65 0.22 25)",
    glow: "",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Messaging",
    description:
      "Send messages without touching your keyboard. Dictate and dispatch to any contact instantly.",
    color: "oklch(0.7 0.18 145)",
    glow: "",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 relative">
      {/* Bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.75_0.18_210/0.04)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[oklch(0.75_0.18_210)] mb-4">
            Capabilities
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text">
            Powered by Voice
          </h2>
          <p className="mt-4 font-body text-[oklch(0.6_0.04_240)] max-w-xl mx-auto">
            Six powerful modules — one unified voice interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="feature-card glass-card rounded-2xl p-6 cursor-default"
                data-ocid={`features.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${feature.color.replace(")", " / 0.12)").replace("oklch(", "oklch(")}
                    `,
                    boxShadow: `0 0 20px ${feature.color.replace(")", " / 0.2)")}`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-[oklch(0.6_0.04_240)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
