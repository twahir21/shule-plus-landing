import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

const TESTIMONIALS = [
  {
    name: 'Mrs. Asha Mwakyusa',
    title: 'Headmistress — St. Augustine Academy',
    text: `The system cut our admin time in half. Teachers love the attendance and grading tools — setup was painless!`,
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'Mr. John K.',
    title: 'Bursar — Mlimani Secondary',
    text: `All financials, fees, and reporting now in one place. Two months free helped us pilot across 3 campuses.`,
    img: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 4,
  },
  {
    name: 'Ms. Rehema O.',
    title: 'Principal — Kilimanjaro Prep',
    text: `Support is quick and thorough. Students & parents enjoy the parent portal for real-time updates.`,
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
  },
  {
    name: 'Mr. Daniel M.',
    title: 'Dean — Arusha High',
    text: `We finally unified attendance, grading, and communication. Parents are more engaged than ever.`,
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
  },
  {
    name: 'Mrs. Neema S.',
    title: 'Administrator — Mwanza Academy',
    text: `Setup was smooth, and the support team guided us through every step.`,
    img: 'https://randomuser.me/api/portraits/women/72.jpg',
    rating: 4,
  },
  {
    name: 'Mr. Peter L.',
    title: 'Director — Dar es Salaam School',
    text: `The reporting dashboard saves hours every week. Teachers appreciate the simplicity.`,
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    rating: 5,
  },
  {
    name: 'Ms. Halima T.',
    title: 'Headmistress — Zanzibar Prep',
    text: `Parents love the SMS updates. It’s made communication seamless.`,
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
  },
];

export const Testimonials = component$(() => {
  const startIndex = useSignal(0);

  // Rotate every 5 seconds
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      startIndex.value = (startIndex.value + 1) % TESTIMONIALS.length;
    }, 7000);
    return () => clearInterval(interval);
  });

  // Show 3 at a time
  const visibleTestimonials = TESTIMONIALS.slice(startIndex.value, startIndex.value + 3)
    .concat(
      startIndex.value + 3 > TESTIMONIALS.length
        ? TESTIMONIALS.slice(0, (startIndex.value + 3) % TESTIMONIALS.length)
        : []
    );

  return (
    <section id="testimonials" class="bg-teal-200">
      <div class="container mx-auto px-6 py-14 border-none">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold">What school leaders say</h2>
          <p class="text-slate-600 mt-2">
            Real feedback from administrators who modernized their schools
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 overflow-hidden">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-down-right"
              class="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 
                     hover:shadow-xl transition-all duration-700 
                     animate-fadeIn"
            >
              <div class="flex items-center gap-4 mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  height={54}
                  width={54}
                  class="rounded-full object-cover border border-teal-200"
                />
                <div>
                  <h4 class="font-semibold text-slate-800">{t.name}</h4>
                  <p class="text-sm text-slate-500">{t.title}</p>
                </div>
              </div>

              {/* rating stars */}
              <div class="flex mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, j) => (
                  <i key={j} class="fa-solid fa-star"></i>
                ))}
                {[...Array(5 - t.rating)].map((_, j) => (
                  <i key={j} class="fa-regular fa-star text-slate-300"></i>
                ))}
              </div>

              <p class="text-slate-700 italic leading-relaxed">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
