import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import { motion } from "motion/react";

const WAVE_BARS = Array.from({ length: 20 }, (_, i) => i);

function VoiceOrb() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64">
      {/* Outer rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[oklch(0.75_0.18_210/0.15)] animate-pulse-ring"
          style={{
            width: `${i * 70}%`,
            height: `${i * 70}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-[oklch(0.75_0.18_210/0.06)] blur-2xl" />
      {/* Core circle */}
      <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_210/0.3)] to-[oklch(0.65_0.22_295/0.4)] border border-[oklch(0.75_0.18_210/0.5)] glow-blue animate-pulse-core flex items-center justify-center">
        {/* Wave bars */}
        <div className="flex items-center gap-1">
          {WAVE_BARS.slice(0, 7).map((i) => (
            <div
              key={i}
              className="w-0.5 bg-[oklch(0.85_0.18_210)] rounded-full"
              style={{
                height: `${8 + Math.sin(i * 0.8) * 16}px`,
                animation: `wave-bar ${0.6 + i * 0.1}s ease-in-out infinite`,
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
      </div>
      {/* Orbiting dot */}
      <div className="absolute w-3 h-3 rounded-full bg-[oklch(0.75_0.18_210)] glow-blue animate-orbit" />
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    color:
      i % 3 === 0
        ? "oklch(0.75 0.18 210 / 0.6)"
        : i % 3 === 1
          ? "oklch(0.65 0.22 295 / 0.5)"
          : "oklch(0.7 0.15 240 / 0.4)",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animation: `particle-float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/trinetra-hero-bg.dim_1920x1080.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.01_265/0.7)] via-[oklch(0.08_0.01_265/0.5)] to-[oklch(0.08_0.01_265)]" />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.75 0.18 210 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 210 / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.75_0.18_210/0.3)] bg-[oklch(0.75_0.18_210/0.08)] text-[oklch(0.85_0.18_210)] text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.18_210)] animate-blink" />
          AI Voice Assistant for PC
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
        >
          <span className="text-foreground">Meet </span>
          <span className="gradient-text glow-text-blue">Trinetra</span>
          <br />
          <span className="text-foreground text-4xl sm:text-5xl lg:text-6xl">
            AI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-lg sm:text-xl text-[oklch(0.65_0.04_240)] max-w-2xl mb-4 leading-relaxed"
        >
          Your Intelligent Voice Assistant for PC — automate tasks, analyse
          screens, manage security, share files, and more with a single spoken
          command.
        </motion.p>

        {/* Voice Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-10"
        >
          <VoiceOrb />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            asChild
            size="lg"
            className="font-display tracking-wider text-base bg-[oklch(0.75_0.18_210)] hover:bg-[oklch(0.8_0.18_210)] text-[oklch(0.08_0.01_265)] font-bold px-8 glow-blue transition-all hover:scale-105"
            data-ocid="hero.primary_button"
          >
            <a href="#download">
              <Download className="mr-2 w-4 h-4" />
              Download Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-display tracking-wider text-base border-[oklch(0.65_0.22_295/0.6)] text-[oklch(0.75_0.22_295)] hover:bg-[oklch(0.65_0.22_295/0.1)] hover:border-[oklch(0.65_0.22_295)] px-8 transition-all hover:scale-105"
            data-ocid="hero.secondary_button"
          >
            <a href="#demo">
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 sm:gap-16"
        >
          {[
            { value: "6+", label: "Core Features" },
            { value: "<100ms", label: "Response Time" },
            { value: "24/7", label: "Always Active" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="font-body text-xs text-[oklch(0.55_0.04_240)] mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[oklch(0.45_0.04_240)] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[oklch(0.75_0.18_210/0.6)] to-transparent" />
      </motion.div>
    </section>
  );
}
