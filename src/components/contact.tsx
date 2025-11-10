import { component$ } from "@builder.io/qwik";

export const Contact = component$(() => {
    return <>
        <section id="contact" class="bg-slate-50 border-none">
          <div class="container mx-auto px-6 py-16">
            <div class="grid md:grid-cols-2 gap-8">
              <div data-aos="fade-right">
                <h3 class="text-2xl font-bold mb-3">Get in touch</h3>
                <p class="text-slate-600 mb-6">Have questions or want a tailored demo? Our team is here to help.</p>
                <ul class="text-sm text-slate-600 space-y-2">
                  <li>📧 support@shuleplus.co.tz</li>
                  <li>📞 +255 674 291 587</li>
                  <li>📍 Dar es Salaam, Tanzania</li>
                </ul>
              </div>

              <form data-aos="fade-left" class="p-6 bg-white rounded-2xl shadow">
                <div class="grid grid-cols-1 gap-4">
                  <input placeholder="Full name" class="px-4 py-3 border rounded-lg" />
                  <input placeholder="School name" class="px-4 py-3 border rounded-lg" />
                  <input placeholder="Email" type="email" class="px-4 py-3 border rounded-lg" />
                  <textarea placeholder="Message" class="px-4 py-3 border rounded-lg" rows={4}></textarea>
                  <button class="bg-navy text-white px-4 py-3 rounded-lg font-semibold">Send message</button>
                </div>
              </form>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A1C2E" fill-opacity="1" d="M0,256L720,224L1440,288L1440,320L720,320L0,320Z"></path></svg>
        </section>    
    </>
})