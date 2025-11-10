import { component$ } from '@builder.io/qwik';
import HeroImg from "~/assets/images/computer.png?jsx";

export const Hero = component$(() => {
  const usersCount = 12_482; // sample live number — replace with dynamic value from your API
  const schoolsCount = 128; // sample

  return (
    <section class="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 hero-container border-none">
      <div class="container mx-auto px-6 py-20 lg:py-28 hero-content mt-20">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          {/* <!-- Left Text --> */}
          <div>
            <div data-aos="fade-up" class="inline-flex items-center gap-3 mb-6">
              <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">Two months free</span>
              <span class="text-sm text-slate-500">No credit card • Easy & fast setup</span>
            </div>

            <h1 data-aos="fade-right" class="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              The all-in-one multi <span class="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">School management </span>system
            </h1>

            <p data-aos="fade-right" data-aos-delay="120" class="text-lg text-slate-600 mb-8 max-w-xl">
              Everything a school needs — from students, teachers, exams and dormitories to buses, library, store, food services and hospital records. Fast setup, 24/7 support.
            </p>

            <div data-aos="fade-up" class="flex flex-wrap gap-4">
              <a href="#pricing" class="inline-flex items-center gap-3 bg-teal-200 border border-[#0A1C2E] text-[#0A1C2E] px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-shadow font-extrabold">
                Start free — 2 months
              </a>
              <a href="#demo" class="inline-flex items-center gap-3 border border-[#0A1C2E] px-5 py-3 rounded-2xl font-semibold hover:bg-teal-500">
                 <i class="fa-solid fa-play"></i>Watch demo video
              </a>
              <span class="px-4 py-3 text-sm text-slate-500 self-center">No credit card required</span>
            </div>

            <div class="mt-8 grid grid-cols-3 gap-4 max-w-md text-sm text-slate-600">
              <div class="flex flex-col">
                <strong class="text-xl">{usersCount.toLocaleString()}</strong>
                <span>Users on platform</span>
              </div>
              <div class="flex flex-col">
                <strong class="text-xl">{schoolsCount}</strong>
                <span>Schools onboard</span>
              </div>
              <div class="flex flex-col">
                <strong class="text-xl">24/7</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* <!-- Right Image Frame --> */}
          <div class="relative flex justify-center items-center ">
            <div
              data-aos="fade-left" 
              data-aos-delay="200"
              class="animated-circle mx-auto w-80 h-80 sm:w-80 sm:h-80 lg:w-full lg:h-full rounded-full bg-gradient-to-tr from-white via-teal-100 to-teal-200 p-6 shadow-2xl overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105 border border-gray-400"
            >
              <div class="rounded-full overflow-hidden bg-white w-full h-full flex items-center justify-center">
                <HeroImg class="object-cover w-full h-full"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

  );
});
