import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";
import { usePortfolio } from "@/lib/context";
import { Footer } from "@/components/Footer";

export function Contact() {
  const { profile: PROFILE } = usePortfolio();
  const [formState, setFormState] = useState({
    subject: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "rate-limit">("idle");
  const [resetAt, setResetAt] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formState.honeypot) {
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 1. Check and increment rate limit on the server
      const limitResponse = await fetch("/api/send-contact", {
        method: "POST",
      });

      if (limitResponse.status === 429) {
        const result = await limitResponse.json();
        setResetAt(result.resetAt);
        setSubmitStatus("rate-limit");
        return;
      }

      // 2. If allowed, submit directly from the browser to Web3Forms
      // This bypasses Cloudflare server-side blocks
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          subject: `New Message: ${formState.subject}`,
          from_name: formState.email,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormState({ subject: "", email: "", message: "", honeypot: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      fullHeight={true}
      className="pt-20 pb-4"
      containerClassName="min-h-[calc(100vh-6rem)] flex flex-col justify-between"
    >
      <div className="flex-1 flex flex-col justify-center">
        <SectionHeading icon={Mail} title="./contact.exe" />
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <TerminalWindow title="contact_info.json" className="bg-[#0b0b0d] border-zinc-800 shadow-2xl shadow-blue-500/5">
            <div className="flex font-mono text-sm leading-relaxed min-h-[320px]">
              <div className="flex flex-col text-zinc-700 pr-4 text-right select-none border-r border-zinc-800/50 mr-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              <div className="flex-1">
                <div className="space-y-0.5">
                  <div><span className="text-orange-300">{"{"}</span></div>
                  <div className="pl-4">
                    <span className="text-red-400">"status"</span><span className="text-orange-300">:</span> <span className="text-green-400">"available_for_opportunities"</span><span className="text-orange-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-red-400">"email"</span><span className="text-orange-300">:</span> <span className="text-green-400">"{PROFILE.email}"</span><span className="text-orange-300">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-red-400">"socials"</span><span className="text-orange-300">:</span> <span className="text-orange-300">{"{"}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-red-400">"github"</span><span className="text-orange-300">:</span> <span className="text-green-400">"{PROFILE.github}"</span><span className="text-orange-300">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-red-400">"linkedin"</span><span className="text-orange-300">:</span> <span className="text-green-400">"{PROFILE.linkedin}"</span>
                  </div>
                  <div className="pl-4"><span className="text-orange-300">{"}"}</span><span className="text-orange-300">,</span></div>
                  <div className="pl-4">
                    <span className="text-red-400">"location"</span><span className="text-orange-300">:</span> <span className="text-green-400">"{PROFILE.location}"</span>
                  </div>
                  <div><span className="text-orange-300">{"}"}</span></div>

                  <div className="pt-8 text-zinc-600 italic">// Waiting for connection...</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-blue-500">➜</span>
                    <span className="w-2 h-4 bg-blue-500/50 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="send_message.sh" className="bg-[#0b0b0d] border-zinc-800">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="botcheck"
                style={{ display: "none" }}
                onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
              />

              <div className="space-y-1">
                <label className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">_email</label>
                <input
                  type="email"
                  required
                  placeholder="viewer@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 focus:border-blue-500/50 outline-none text-xs font-mono text-zinc-300"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">_subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 focus:border-blue-500/50 outline-none text-xs font-mono text-zinc-300"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">_body</label>
                <textarea
                  required
                  placeholder="Write your message here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 h-32 focus:border-blue-500/50 outline-none text-xs font-mono text-zinc-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500/10 border border-blue-500/30 text-blue-500 py-3 rounded-lg hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all font-mono text-xs flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">sudo_sending...</span>
                ) : (
                  <><Send className="w-4 h-4" /> sudo_send --message</>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-[10px] font-mono flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  [SUCCESS] Message transmitted to system.kernel
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-[10px] font-mono flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  [ERROR] Transmission failed. Check network link.
                </motion.div>
              )}

              {submitStatus === "rate-limit" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 text-[10px] font-mono flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    [LIMIT] Security policy: Message limit reached.
                  </div>
                  <div className="pl-3.5 text-[9px] text-yellow-500/70">
                    Transmission allowed after: {resetAt ? new Date(resetAt * 1000).toLocaleString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    }) : "24 hours"}
                  </div>
                </motion.div>
              )}
            </form>
          </TerminalWindow>
        </div>
      </div>
      <Footer className="border-t-0 pt-8 pb-4" />
    </Section>

  );
}
