const testimonials = [
  {
    quote:
      'Parallel helped me rebuild my day around attention, not alerts. I get twice the deep work done in half the apps.',
    author: 'Maya K., Researcher',
  },
  {
    quote:
      'The forum is the only place online where I close tabs and feel calmer when I leave.',
    author: 'James R., Engineer',
  },
  {
    quote:
      'I joined for focus tips; I stayed for the intentional people. Its the antidote to busywork.',
    author: 'Ava T., Designer',
  },
  {
    quote:
      'Two months in, my screen time is down 35% and my writing output doubled. The accountability works.',
    author: 'Leo M., Writer',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <header className="mb-10">
          <h2 id="principles" className="font-serif text-3xl md:text-4xl tracking-tight">What members say</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Real experiences from people choosing fewer inputs and deeper outputs.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              <blockquote className="font-serif text-lg leading-relaxed italic text-white/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/70">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
