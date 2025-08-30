import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight">
          Deep work, without the noise
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          Parallel is a community for people practicing digital minimalism and focused creation.
          Fewer apps. More attention. Better outcomes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="#join" className="rounded-full bg-yellow-400 px-6 py-3 text-black font-medium hover:bg-yellow-300 transition">
            Join the waitlist
          </a>
          <a href="#principles" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">
            Explore principles
          </a>
        </div>
      </div>
    </section>
  );
}
