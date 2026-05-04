import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Split the Bit",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-qline/60 grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="tape mb-4">◇ Contact</p>
          <h1 className="font-display text-5xl md:text-6xl text-white max-w-3xl leading-tight">
            Reach out. We will respond in{" "}
            <span className="text-qaccent glow">probability</span>.
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl text-lg">
            Our SLA on inbound inquiries is 24 hours, in some branch of the
            multiverse. In practice it averages between 2 minutes and never.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-6">
            <div className="panel p-7">
              <p className="tape text-qpink mb-2">HQ</p>
              <p className="text-white text-lg font-display">
                One Probability Plaza, Floor √2
              </p>
              <p className="text-white/60 text-sm mt-1">
                South of Market, San Francisco, CA · also Veridia
              </p>
            </div>
            <div className="panel p-7">
              <p className="tape text-qpink mb-2">Press</p>
              <p className="text-white/80 font-mono">press@splitthebit.com</p>
              <p className="text-white/40 text-xs mt-2">
                We respond on a strictly need-to-know basis. We will determine
                the need and the knowledge.
              </p>
            </div>
            <div className="panel p-7">
              <p className="tape text-qpink mb-2">Investors</p>
              <p className="text-white/80 font-mono">ir@splitthebit.com</p>
              <p className="text-white/40 text-xs mt-2">
                Please include valuation expectations and your tolerance for
                interpretive accounting.
              </p>
            </div>
            <div className="panel p-7">
              <p className="tape text-qpink mb-2">Support</p>
              <p className="text-white/80 font-mono">help@splitthebit.com</p>
              <p className="text-white/40 text-xs mt-2">
                Tickets are processed in a non-FIFO order intended to optimize
                for narrative.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
