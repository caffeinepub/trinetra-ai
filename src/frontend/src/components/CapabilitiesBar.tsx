import { motion } from "motion/react";

const tags = [
  "Natural Language Processing",
  "Real-time Response",
  "Multi-task Support",
  "Voice Recognition",
  "PC Integration",
  "24/7 Active",
  "Screen Awareness",
  "Zero-Touch Operation",
  "WhatsApp Integration",
  "YouTube Control",
  "File Management",
  "Threat Detection",
];

const doubledTags = [...tags, ...tags].map((tag, i) => ({
  tag,
  uid: `${i < tags.length ? "a" : "b"}-${tag}`,
}));

export function CapabilitiesBar() {
  return (
    <section className="py-16 overflow-hidden relative">
      <div className="absolute inset-0 border-y border-[oklch(0.75_0.18_210/0.1)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.01_265)] via-transparent to-[oklch(0.08_0.01_265)] z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {doubledTags.map(({ tag, uid }) => (
          <div
            key={uid}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[oklch(0.75_0.18_210/0.2)] bg-[oklch(0.12_0.02_260/0.6)] text-sm font-mono text-[oklch(0.7_0.1_230)] flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.18_210/0.7)]" />
            {tag}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
