import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SkillsPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white px-6 md:px-12 lg:px-24 py-32 flex flex-col items-center">
      <div className="max-w-7xl w-full mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="max-w-7xl w-full text-center mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a09e96] mb-6 block">
          04 . SKILLS DETAILED
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
          A comprehensive look at my toolkit.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Here is a detailed breakdown of the languages, frameworks, databases, and tools I use to build scalable, AI-powered applications.
        </p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#e5e5e5]">Backend</h3>
          <ul className="text-neutral-400 space-y-3 font-medium">
            <li>Node.js & Express</li>
            <li>Python</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>JWT & Auth</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#e5e5e5]">AI / ML</h3>
          <ul className="text-neutral-400 space-y-3 font-medium">
            <li>Scikit-learn</li>
            <li>TensorFlow</li>
            <li>Vector DBs (Pinecone)</li>
            <li>LLM Integration</li>
            <li>Data Analysis</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#e5e5e5]">Frontend</h3>
          <ul className="text-neutral-400 space-y-3 font-medium">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#e5e5e5]">Data & Ops</h3>
          <ul className="text-neutral-400 space-y-3 font-medium">
            <li>MySQL & PostgreSQL</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>AWS Foundations</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
