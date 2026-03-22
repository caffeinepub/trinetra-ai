import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CapabilitiesBar } from "./components/CapabilitiesBar";
import { DownloadSection } from "./components/DownloadSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { InterfaceShowcase } from "./components/InterfaceShowcase";
import { Navbar } from "./components/Navbar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-body">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <InterfaceShowcase />
          <CapabilitiesBar />
          <DownloadSection />
        </main>
        <Footer />
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "oklch(0.12 0.02 260)",
              border: "1px solid oklch(0.75 0.18 210 / 0.3)",
              color: "oklch(0.93 0.01 210)",
            },
          }}
        />
      </div>
    </QueryClientProvider>
  );
}
