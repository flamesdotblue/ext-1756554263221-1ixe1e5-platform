import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-400/30 selection:text-yellow-200">
      <Header />
      <main>
        <Hero />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="join">
          <CallToAction />
        </section>
      </main>
    </div>
  );
}
