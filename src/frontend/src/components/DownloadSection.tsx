import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";
import { motion } from "motion/react";
import { DemoRequestModal } from "./DemoRequestModal";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.03 260 / 0.9) 0%, oklch(0.1 0.02 280 / 0.95) 50%, oklch(0.12 0.03 260 / 0.9) 100%)",
            border: "1px solid oklch(0.75 0.18 210 / 0.25)",
            boxShadow:
              "0 0 100px oklch(0.75 0.18 210 / 0.1), 0 0 200px oklch(0.65 0.22 295 / 0.05)",
          }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[oklch(0.75_0.18_210/0.05)] blur-3xl" />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[oklch(0.75_0.18_210/0.3)] rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[oklch(0.65_0.22_295/0.3)] rounded-br-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.75_0.18_55/0.4)] bg-[oklch(0.75_0.18_55/0.08)] text-[oklch(0.85_0.18_55)] text-xs font-mono tracking-widest uppercase mb-6">
              <Star className="w-3 h-3 fill-current" />
              Free to Download
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl gradient-text mb-6 leading-tight">
              Ready to Experience
              <br />
              Trinetra AI?
            </h2>
            <p className="font-body text-[oklch(0.6_0.04_240)] max-w-lg mx-auto mb-10 text-lg">
              Take control of your PC with the power of voice. Download now and
              experience the future of human-computer interaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="font-display tracking-wider text-base bg-[oklch(0.75_0.18_210)] hover:bg-[oklch(0.8_0.18_210)] text-[oklch(0.08_0.01_265)] font-bold px-10 glow-blue hover:scale-105 transition-all"
                data-ocid="download.primary_button"
              >
                <Download className="mr-2 w-5 h-5" />
                Download for Windows
              </Button>

              <DemoRequestModal
                trigger={
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-display tracking-wider text-base border-[oklch(0.65_0.22_295/0.5)] text-[oklch(0.75_0.22_295)] hover:bg-[oklch(0.65_0.22_295/0.1)] hover:border-[oklch(0.65_0.22_295)] px-10 hover:scale-105 transition-all"
                  >
                    Request a Demo
                  </Button>
                }
              />
            </div>

            <p className="mt-6 font-mono text-xs text-[oklch(0.45_0.04_240)]">
              v1.0.0 — Windows 10/11 — Free Beta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
