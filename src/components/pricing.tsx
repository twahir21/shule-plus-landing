import { component$, useSignal } from '@builder.io/qwik';

export const Pricing = component$(() => {
  // toggle between monthly / yearly
  const yearly = useSignal(false);

  // pricing data
  const PLANS = [
    {
      name: 'Starter',
      tagline: 'Perfect for small schools',
      monthly: 150000,
      yearly: 150000 * 12 * 0.85, // 15% off
      features: [
        'Up to 300 students',
        'Basic exams & grading',
        'Library & store',
        'Reports & analytics',
      ],
      color: 'bg-gray-50 border border-navy',
      button: 'bg-navy text-white',
    },
    {
      name: 'Growth',
      tagline: 'For growing institutions',
      monthly: 420000,
      yearly: 420000 * 12 * 0.85,
      features: [
        'Up to 2,000 students',
        'All exams & quizzes',
        'Dorms, buses & meal management',
        'Priority support',
      ],
      color: 'bg-gradient-to-tr from-emerald-50 to-white border-2 border-emerald-600',
      button: 'bg-emerald-600 text-white',
      popular: true,
    },
    {
      name: 'Enterprise',
      tagline: 'Multi-campus and district-level',
      monthly: 0,
      yearly: 0,
      features: [
        'Unlimited students',
        'Dedicated account manager',
        'Custom integrations & SSO',
        'SLAs and on-site training',
      ],
      color: 'bg-teal-50 border border-teal-500',
      button: 'border border-slate-200 bg-teal-300',
    },
  ];

  return (
    <section id="pricing" class="bg-white relative overflow-hidden pb-36 md:pb-48 border-none">
      <div class="container mx-auto px-6 py-20 relative z-10">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-slate-800">
            Pricing — Pay in Tanzanian Shillings (TZS)
          </h2>
          <p class="text-slate-600 mt-2">
            Simple tiers. All plans include 24/7 support and two months free trial.
          </p>
        </div>

        {/* Toggle Button */}
        <div class="flex justify-center items-center gap-3 mb-10">
          <span
            class={`text-sm font-medium ${!yearly.value ? 'text-emerald-700' : 'text-slate-500'}`}
          >
            Monthly
          </span>
          <button
            class="relative w-14 h-7 bg-slate-200 rounded-full p-1 flex items-center transition-all duration-300"
            onClick$={() => (yearly.value = !yearly.value)}
          >
            <span
              class={`absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                yearly.value ? 'translate-x-7' : 'translate-x-0'
              }`}
            ></span>
          </button>
          <span
            class={`text-sm font-medium ${yearly.value ? 'text-emerald-700' : 'text-slate-500'}`}
          >
            Yearly <span class="text-xs text-emerald-500 ml-1">(Save 15%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div class="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              data-aos={i === 0 ? 'flip-right' : i === 1 ? 'flip-down' : 'flip-left'}
              class={`relative p-6 rounded-2xl shadow-md ${plan.color} transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >

              {/* Most Popular Badge */}
              {plan.popular && (
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full 
                             ring-2 ring-emerald-400/60">
                  🌟 Most Popular
                </div>
              )}


              <div class="mb-4 mt-3 text-center">
                <h3 class="text-xl font-semibold">{plan.name}</h3>
                <p class="text-sm text-slate-500">{plan.tagline}</p>
              </div>

              <div class="my-6 text-center">
                {plan.monthly > 0 ? (
                  <>
                    <div class="text-3xl font-extrabold">
                      Tsh{' '}
                      {yearly.value
                        ? plan.yearly.toLocaleString('en-TZ', { maximumFractionDigits: 0 })
                        : plan.monthly.toLocaleString('en-TZ')}
                    </div>
                    <div class="text-sm text-slate-500">
                      / {yearly.value ? 'year' : 'month'}
                    </div>
                  </>
                ) : (
                  <>
                    <div class="text-3xl font-extrabold">Contact us</div>
                    <div class="text-sm text-slate-500">Custom pricing</div>
                  </>
                )}
              </div>

              <ul class="space-y-2 text-sm text-slate-600 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} class="flex items-center gap-2">
                    <i class="fa-solid fa-check text-emerald-500"></i> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                class={`block text-center py-3 rounded-lg font-semibold ${plan.button} hover:opacity-90 transition-opacity`}
              >
                {plan.monthly > 0 ? 'Start free' : 'Contact sales'}
              </a>
            </div>
          ))}
        </div>

        <div class="mt-10 text-sm text-slate-500 text-center">
          Prices shown are {yearly.value ? 'yearly' : 'monthly'}. Save up to 15% on annual billing.
          All plans include a 2-month free trial — no credit card required.
        </div>
      </div>

      {/* Wave Bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute bottom-0 left-0 w-full"
      >
        <path
          fill="#96f7e4"
          d="M0,0L0,128L144,128L144,96L288,96L288,192L432,192L432,64L576,64L576,96L720,96L720,288L864,288L864,160L1008,160L1008,256L1152,256L1152,288L1296,288L1296,288L1440,288L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
});
