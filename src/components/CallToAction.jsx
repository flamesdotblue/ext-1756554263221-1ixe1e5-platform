export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,204,21,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h3 className="font-serif text-3xl tracking-tight">Join Parallel</h3>
        <p className="mt-3 text-white/75">A quieter internet, a clearer mind. Get updates and an invite to the private forum.</p>
        <form className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            required
            placeholder="you@parallel.community"
            className="w-full flex-1 rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400/40"
          />
          <button type="submit" className="w-full sm:w-auto rounded-full bg-yellow-400 px-6 py-3 text-black font-medium hover:bg-yellow-300 transition">
            Request invite
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">Well email a confirmation. No noise, no spam.</p>
      </div>
    </section>
  );
}
