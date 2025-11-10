import { component$ } from '@builder.io/qwik';

export const Faqs = component$(() => {
  return (
    <section class="bg-teal-200 border-none">
      <div class="container mx-auto px-6 py-16" 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
        <h2 class="text-2xl font-bold mb-6">FAQs</h2>
        <div class="space-y-4">
          <details class="p-4 border rounded-lg">
            <summary class="font-semibold">How does the two-month free trial work?</summary>
            <p class="mt-2 text-slate-600">Start using full features for two months. No credit card required. After the trial you can pick a paid plan or cancel.</p>
          </details>

          <details class="p-4 border rounded-lg">
            <summary class="font-semibold">Can I migrate data from our current system?</summary>
            <p class="mt-2 text-slate-600">Yes — we offer migration tools and our onboarding team can assist with bulk imports of students, teachers and historical records.</p>
          </details>

          <details class="p-4 border rounded-lg">
            <summary class="font-semibold">Is support really 24/7?</summary>
            <p class="mt-2 text-slate-600">Yes — our support team is available 24/7 via chat and email. Enterprise customers get dedicated account managers.</p>
          </details>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8fafc" fill-opacity="1" d="M0,256L26.7,240C53.3,224,107,192,160,149.3C213.3,107,267,53,320,64C373.3,75,427,149,480,181.3C533.3,213,587,203,640,202.7C693.3,203,747,213,800,202.7C853.3,192,907,160,960,165.3C1013.3,171,1067,213,1120,213.3C1173.3,213,1227,171,1280,154.7C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>

    </section>
  );
});
