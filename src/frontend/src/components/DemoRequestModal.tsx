import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitDemoRequest } from "@/hooks/useQueries";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function DemoRequestModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitDemoRequest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({ name, email, message });
      setSubmitted(true);
      toast.success("Demo request submitted! We'll reach out soon.");
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild data-ocid="cta.open_modal_button">
        {trigger}
      </DialogTrigger>
      <DialogContent
        className="glass-card border-[oklch(0.75_0.18_210/0.3)] max-w-md"
        data-ocid="cta.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-2xl gradient-text">
            Request a Demo
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div
            className="flex flex-col items-center gap-4 py-8"
            data-ocid="cta.success_state"
          >
            <CheckCircle className="w-16 h-16 text-[oklch(0.7_0.18_145)]" />
            <p className="font-body text-center text-[oklch(0.7_0.04_240)]">
              Thanks, <strong className="text-foreground">{name}</strong>! We'll
              contact you at{" "}
              <strong className="text-foreground">{email}</strong> shortly.
            </p>
            <Button
              onClick={() => setOpen(false)}
              className="bg-[oklch(0.75_0.18_210)] text-[oklch(0.08_0.01_265)] font-bold"
              data-ocid="cta.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label
                htmlFor="demo-name"
                className="text-sm font-body text-[oklch(0.7_0.04_240)]"
              >
                Your Name
              </Label>
              <Input
                id="demo-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Sharma"
                required
                className="mt-1.5 bg-[oklch(0.12_0.02_260)] border-[oklch(0.3_0.04_260)] focus:border-[oklch(0.75_0.18_210)] font-body"
                data-ocid="cta.input"
              />
            </div>
            <div>
              <Label
                htmlFor="demo-email"
                className="text-sm font-body text-[oklch(0.7_0.04_240)]"
              >
                Email Address
              </Label>
              <Input
                id="demo-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@example.com"
                required
                className="mt-1.5 bg-[oklch(0.12_0.02_260)] border-[oklch(0.3_0.04_260)] focus:border-[oklch(0.75_0.18_210)] font-body"
                data-ocid="cta.input"
              />
            </div>
            <div>
              <Label
                htmlFor="demo-msg"
                className="text-sm font-body text-[oklch(0.7_0.04_240)]"
              >
                What would you like to automate?
              </Label>
              <Textarea
                id="demo-msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us your use case..."
                rows={3}
                className="mt-1.5 bg-[oklch(0.12_0.02_260)] border-[oklch(0.3_0.04_260)] focus:border-[oklch(0.75_0.18_210)] font-body resize-none"
                data-ocid="cta.textarea"
              />
            </div>
            {mutation.isError && (
              <p
                className="text-sm text-[oklch(0.6_0.2_25)]"
                data-ocid="cta.error_state"
              >
                Something went wrong. Please try again.
              </p>
            )}
            <div className="flex gap-3 mt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-[oklch(0.3_0.04_260)] text-[oklch(0.6_0.04_240)]"
                onClick={() => setOpen(false)}
                data-ocid="cta.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="flex-1 bg-[oklch(0.75_0.18_210)] text-[oklch(0.08_0.01_265)] font-bold hover:bg-[oklch(0.8_0.18_210)] glow-blue"
                data-ocid="cta.submit_button"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Demo"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
