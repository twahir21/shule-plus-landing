import { component$ } from "@builder.io/qwik";

const SAMPLE_SCHOOLS = [
  'St. Augustine Academy',
  'Mlimani Secondary',
  'Kilimanjaro Preparatory',
  'Dar City High',
  'Bagamoyo International',
  'Tanga Model School',
  'Zanzibar Girls School',
];


export const Marquee = component$(() => {
    return <>
        <section class="bg-white">
          <div class="container mx-auto px-4 md:px-6 py-12 border-none">
              <strong class="text-slate-700">Trusted by : </strong>
            <div class="overflow-hidden border rounded-xl py-3 px-2 bg-slate-50">
              <div class="flex items-center gap-4">
                <div class="flex-1">
                  <div class="animate-marquee whitespace-nowrap">
                    {SAMPLE_SCHOOLS.concat(SAMPLE_SCHOOLS).map((s, i) => (
                      <span key={i} class="inline-block mx-8 text-slate-600 font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#96f7e4" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path></svg>

        </section>  
    </>
});