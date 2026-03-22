import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const year = new Date().getFullYear();

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Demo", href: "#demo" },
      { label: "Download", href: "#download" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "FAQ", href: "#faq" },
      { label: "Community", href: "#community" },
      { label: "Report a Bug", href: "#bugs" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[oklch(0.75_0.18_210/0.1)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/generated/trinetra-logo-transparent.dim_300x300.png"
                alt="Trinetra AI"
                className="w-8 h-8 object-contain drop-shadow-[0_0_6px_oklch(0.75_0.18_210/0.8)]"
              />
              <span className="font-display font-bold tracking-widest gradient-text">
                TRINETRA AI
              </span>
            </div>
            <p className="font-body text-sm text-[oklch(0.5_0.04_240)] leading-relaxed">
              Your intelligent voice assistant for PC automation, security, and
              beyond.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { Icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  Icon: Twitter,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  Icon: Youtube,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-[oklch(0.25_0.04_260)] flex items-center justify-center text-[oklch(0.5_0.04_240)] hover:text-[oklch(0.75_0.18_210)] hover:border-[oklch(0.75_0.18_210/0.4)] transition-all"
                  data-ocid="footer.link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm tracking-wider text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-[oklch(0.5_0.04_240)] hover:text-[oklch(0.75_0.18_210)] transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[oklch(0.75_0.18_210/0.08)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[oklch(0.4_0.04_240)]">
            © {year} Trinetra AI. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.4_0.04_240)]">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              className="text-[oklch(0.65_0.18_210)] hover:text-[oklch(0.75_0.18_210)] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
