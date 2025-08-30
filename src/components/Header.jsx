import * as Dialog from '@radix-ui/react-dialog';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-yellow-400/90 shadow-[0_0_40px_rgba(250,204,21,0.35)]" />
          <span className="font-serif text-xl tracking-tight">Parallel</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#principles" className="hover:text-white transition">Principles</a>
          <a href="#testimonials" className="hover:text-white transition">Voices</a>
          <a href="#join" className="hover:text-white transition">Join</a>
        </nav>
        <div className="flex items-center gap-3">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
                <User size={16} />
                Login
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
              <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-zinc-900 p-6 shadow-2xl focus:outline-none">
                <Dialog.Title className="font-serif text-xl mb-1">Private Forum</Dialog.Title>
                <Dialog.Description className="text-sm text-white/70 mb-4">
                  Members can sign in to access the private discussions.
                </Dialog.Description>
                <form className="space-y-3">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-white/80">Email</label>
                    <input id="email" type="email" placeholder="you@parallel.community" className="w-full rounded-md bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400/40" />
                  </div>
                  <button type="submit" className="w-full rounded-md bg-yellow-400 px-3 py-2 text-black font-medium hover:bg-yellow-300 transition">
                    Continue
                  </button>
                </form>
                <div className="mt-4 text-xs text-white/60">
                  Or go directly to the forum: <a href="#" className="text-yellow-300 hover:underline">forum.parallel.community</a>
                </div>
                <Dialog.Close className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70" aria-label="Close">×</Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
