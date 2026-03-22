import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.08_0.01_265/0.9)] backdrop-blur-xl border-b border-[oklch(0.75_0.18_210/0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/#"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/trinetra-logo-transparent.dim_300x300.png"
            alt="Trinetra AI Logo"
            className="w-9 h-9 object-contain drop-shadow-[0_0_8px_oklch(0.75_0.18_210/0.8)] group-hover:scale-110 transition-transform"
          />
          <span className="font-display font-bold text-lg tracking-widest gradient-text">
            TRINETRA AI
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-body text-[oklch(0.7_0.04_240)] hover:text-[oklch(0.85_0.18_210)] transition-colors relative group"
                data-ocid="nav.link"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-px bg-[oklch(0.75_0.18_210)] transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="font-display text-sm tracking-wider bg-[oklch(0.75_0.18_210)] hover:bg-[oklch(0.8_0.18_210)] text-[oklch(0.08_0.01_265)] font-bold glow-blue transition-all"
            data-ocid="nav.primary_button"
          >
            <a href="#download">Download Now</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[oklch(0.08_0.01_265/0.97)] backdrop-blur-xl border-b border-[oklch(0.75_0.18_210/0.12)]"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-body text-[oklch(0.7_0.04_240)] hover:text-[oklch(0.85_0.18_210)] transition-colors border border-transparent hover:border-[oklch(0.75_0.18_210/0.2)] rounded-lg"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 font-display text-sm tracking-wider bg-[oklch(0.75_0.18_210)] hover:bg-[oklch(0.8_0.18_210)] text-[oklch(0.08_0.01_265)] font-bold"
                data-ocid="nav.primary_button"
              >
                <a href="#download">Download Now</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
