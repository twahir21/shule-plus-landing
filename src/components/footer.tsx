import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="bg-navy text-white mt-8 border-none">
      <div class="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0">
          <strong class="text-xl">Shule Plus</strong>
          <div class="text-sm text-emerald-200 mt-1">Simplify school operations — one platform</div>
        </div>
        <div class="text-sm text-emerald-200">© {new Date().getFullYear()} Shule Plus — All rights reserved</div>
      </div>
    </footer>
  );
});
