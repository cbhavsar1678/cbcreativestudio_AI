import { motion } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Terminal } from "lucide-react";

const getApiKey = () => {
  // Check for Vite's environment variables (embedded at build time)
  // This is the standard way Vite handles variables for production builds
  const viteKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (viteKey && viteKey !== "YOUR_KEY_HERE" && !viteKey.includes("MY_GEMINI_API_KEY")) {
    return viteKey;
  }

  // Fallback for AI Studio preview environment
  if (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) {
    return process.env.GEMINI_API_KEY;
  }
  
  return null;
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export default function AILab() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isConfigured = !!ai;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    if (!ai) {
      setResponse("AI Laboratory: OFFLINE \n\nGoDaddy/Production Fix:\n1. Open your local project.\n2. Create a file named '.env' (NOT .env.example).\n3. Add 'VITE_GEMINI_API_KEY=AIzaSyAs21qH5x1p1IVnUdz3wPmzkMtdadToBGI' to it.\n4. Open your terminal and run: npm run build\n5. Upload the NEW contents of the 'dist' folder to GoDaddy.\n\nNote: The 'Neural Link' indicator below must be green before prompts will work.");
      return;
    }

    setLoading(true);
    setResponse("");
    try {
      // Use the latest Gemini 3 model as per best practices
      const result = await ai.models.generateContentStream({ 
        model: "gemini-3-flash-preview", 
        contents: [{ role: "user", parts: [{ text: `Act as an AI UX Architecture Consultant. The user wants to brainstorm: ${prompt}. Briefly suggest 3 futuristic UI/UX concepts for this idea.` }] }]
      });
      
      for await (const chunk of result) {
        if (chunk.text) {
          setResponse(prev => prev + chunk.text);
        }
      }
    } catch (error: any) {
      console.error("Gemini Error:", error);
      const errorMessage = error?.message || "Internal neural link failure.";
      const errorReason = error?.reason || "Check API Key or Region";
      setResponse(`Signal Interrupted. \n\nDetailed Error: ${errorMessage} \n\nReason: ${errorReason} \n\nPlease ensure your Gemini API Key is active and has permissions for the 'gemini-3-flash-preview' model.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Force scroll to this section if hash matches on mount
    if (window.location.hash === "#ailab") {
      const el = document.getElementById("ailab");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <section id="ailab" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-neon-purple text-sm tracking-widest uppercase">Innovation Hub</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-8">AI Innovation Lab</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Experience rapid AI prototyping. This interface is directly integrated 
            with Google's Gemini models to brainstorm futuristic UX concepts 
            based on your digital product ideas.
          </p>
            <div className="flex flex-wrap gap-4">
              <div className={`glass px-4 py-2 rounded-lg flex items-center gap-2 border-neon-purple/30 ${isConfigured ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${isConfigured ? 'bg-emerald-500' : 'bg-red-500'}`} />
                <span className="text-xs font-mono">{isConfigured ? 'Neural Link Online' : 'Neural Link Offline'}</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-purple" />
                <span className="text-xs font-mono">Gemini 3 Flash</span>
              </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/50 rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none" />
          
          {/* Mock Console Header */}
          <div className="bg-white/5 px-6 py-4 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 ml-4 uppercase tracking-widest">Brainstorming_Terminal v2.0</span>
          </div>

          {/* Response Area */}
          <div 
            ref={scrollRef}
            className="h-64 overflow-y-auto p-6 font-mono text-sm leading-relaxed text-slate-300 scroll-smooth"
          >
            {response ? (
              <div className="whitespace-pre-wrap">{response}</div>
            ) : (
              <div className="text-slate-500 italic">
                {loading ? "Initializing neural pathways..." : "Awaiting input sequence..."}
              </div>
            )}
            {loading && <span className="inline-block w-1 h-4 bg-neon-purple ml-1 animate-pulse" />}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-black/40 border-t border-white/10">
            <div className="relative">
              <input 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder="Describe a digital product idea..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white focus:outline-none focus:border-neon-purple/50 transition-colors placeholder:text-slate-600"
              />
              <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-purple opacity-50" />
              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-neon-purple text-white rounded-lg hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-3 text-[10px] text-slate-500 text-center font-mono">
              SECURE LINK ESTABLISHED • GEMINI API DIRECT ACCESS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
