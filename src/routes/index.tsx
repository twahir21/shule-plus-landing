import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { Contact } from '~/components/contact';
import { Faqs } from '~/components/faq';
import { Features } from '~/components/features';
import { Footer } from '~/components/footer';
import { Hero } from '~/components/hero';
import { Marquee } from '~/components/marquee';
import { Pricing } from '~/components/pricing';
import { Testimonials } from '~/components/testimonials';
import { Topbar } from '~/components/topBar';
import styles from '~/hero.css?inline';


export default component$(() => {
useVisibleTask$(() => {
  const win = window as any;
  if (win && win.AOS && typeof win.AOS.init === 'function') {
    win.AOS.init({
      duration: 800,
      once: false, // 👈 animate again when elements scroll back into view
      mirror: true, // 👈 optional: also animate when scrolling up
      easing: 'ease-in-out',
    });
  }

  // Optional: refresh AOS when DOM changes (e.g. dynamic Qwik islands)
  const observer = new MutationObserver(() => win.AOS?.refreshHard());
  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
});

  useStyles$(styles);

  return (
    <>
      {/* AOS CDN links */}
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
      <script src="https://unpkg.com/aos@2.3.4/dist/aos.js" defer></script>

      <Topbar />
      <main class="font-sans text-gray-900 antialiased">
        <Hero />

        <Features />

        <Marquee />

        <Testimonials />

        <Pricing />

        <Faqs />

        <Contact />

        <Footer />

      </main>


<div class="tilted-section">
  <div class="content">
    <h2>Modern School SaaS</h2>
    <p>Manage everything from classes to exams easily.</p>
  </div>
</div>    </>
  );
});
