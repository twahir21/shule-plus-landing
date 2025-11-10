import { component$, useSignal } from '@builder.io/qwik';
import { LuMenu, LuX } from '@qwikest/icons/lucide';
import Logo from "~/assets/images/logo.png?jsx";

export const Topbar = component$(() => {
  const menuOpen = useSignal(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-6 border-double border-teal-200">
      <nav class="container mx-auto flex items-center justify-between px-6 py-4 lg:py-5">
        {/* Logo */}
        <a href="#" class="text-2xl font-bold text-navy flex items-center gap-2">
          <Logo class="h-12 w-10 p-0 overflow-hidden" />
          <span class="pacifico bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Shule Plus</span>
        </a>

        {/* Desktop Menu */}
        <ul class="hidden lg:flex items-center gap-8 text-slate-700 font-medium">
          <li><a href="#features" class="hover:text-navy transition-colors">Features</a></li>
          <li><a href="#pricing" class="hover:text-navy transition-colors">Pricing</a></li>
          <li><a href="#testimonials" class="hover:text-navy transition-colors">Proofs</a></li>
          <li><a href="#contact" class="hover:text-navy transition-colors">Contact Us</a></li>
        </ul>

        {/* Actions (Desktop) */}
        <div class="hidden lg:flex items-center gap-6">
          <a href="#login" class="text-slate-600 hover:text-navy font-semibold transition-colors">Login</a>
          <a href="#signup" class="bg-teal-200 border border-[#0A1C2E] text-[#0A1C2E] px-5 py-2.5 rounded-xl font-semibold shadow hover:shadow-md transition-shadow">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick$={() => (menuOpen.value = !menuOpen.value)}
          class="lg:hidden text-slate-700 p-2 rounded-md hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {menuOpen.value ? <LuX class="w-6 h-6" /> : <LuMenu class="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen.value && (
          <div
            class="absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-md lg:hidden animate-fade-in"
            data-aos="fade-down"
          >
            <ul class="flex flex-col gap-4 p-6 text-slate-700 font-medium">
              <li><a href="#features" class="hover:text-navy transition-colors">Features</a></li>
              <li><a href="#pricing" class="hover:text-navy transition-colors">Pricing</a></li>
              <li><a href="#demo" class="hover:text-navy transition-colors">Demo</a></li>
              <li><a href="#about" class="hover:text-navy transition-colors">About</a></li>
              <hr class="my-2 border-slate-200" />
              <a href="#login" class="text-slate-600 hover:text-navy font-semibold">Login</a>
              <a href="#signup" class="bg-teal-200 px-4 py-2.5 rounded-lg font-semibold shadow hover:shadow-md transition-shadow text-center">
                Get started
              </a>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
});
