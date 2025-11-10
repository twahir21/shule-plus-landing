import { $, component$ } from '@builder.io/qwik';

export const Navbar =  component$(() => {
  const onClickScroll = $((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  return (
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#0A1C2E]/60 border-b border-white/10">
      <nav class="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded bg-[#2563EB]"></div>
          <span class="font-semibold tracking-wide">Higher Career Academy Portal</span>
        </div>
        <ul class="hidden md:flex items-center gap-6 text-white/80">
          <li><button class="hover:text-white" onClick$={() => onClickScroll('features')}>Features</button></li>
          <li><button class="hover:text-white" onClick$={() => onClickScroll('testimonials')}>Testimonials</button></li>
          <li><button class="hover:text-white" onClick$={() => onClickScroll('pricing')}>Pricing</button></li>
          <li><button class="hover:text-white" onClick$={() => onClickScroll('faq')}>FAQ</button></li>
        </ul>
        <div class="flex gap-2">
          <a href="#pricing" class="hidden sm:inline-block px-4 py-2 rounded border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition">Request Demo</a>
          <a href="#signup" class="px-4 py-2 rounded bg-[#2563EB] text-white hover:bg-blue-600 transition">Start Your Free Trial</a>
        </div>
      </nav>
    </header>
  );
});
