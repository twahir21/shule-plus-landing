import { component$ } from "@builder.io/qwik";

const FEATURES = [
  {
    label: 'Manage Teachers & Staff',
    icon: 'fa-chalkboard-user',
    description: 'Simplify teacher and staff management with easy role assignments, tracking, and communication tools.',
  },
  {
    label: 'Student Records & Admissions',
    icon: 'fa-user-graduate',
    description: 'Handle admissions, profiles, and academic records with organized, centralized access.',
  },
  {
    label: 'Exams, Quizzes & Grading',
    icon: 'fa-clipboard-check',
    description: 'Automate assessments and grading with streamlined exam and quiz management.',
  },
  {
    label: 'Classes & Subjects',
    icon: 'fa-book-open',
    description: 'Easily organize classes, subjects, and timetables to enhance academic planning.',
  },
  {
    label: 'Dormitories & Hostel Management',
    icon: 'fa-bed',
    description: 'Assign rooms, track occupancy, and manage student accommodation with full transparency.',
  },
  {
    label: 'School Bus & Routes',
    icon: 'fa-bus',
    description: 'Plan and monitor school transportation routes with accurate schedules and GPS tracking.',
  },
  {
    label: 'Library & Store',
    icon: 'fa-book',
    description: 'Manage library books, stationery, and school inventory in one central system.',
  },
  {
    label: 'Food Services & Canteen',
    icon: 'fa-utensils',
    description: 'Track canteen menus, daily meals, and payments effortlessly across all users.',
  },
  {
    label: 'Health & Hospital Records',
    icon: 'fa-heart-pulse',
    description: 'Maintain secure medical and emergency records for students and staff.',
  },
  {
    label: 'Online Classes & Attendance',
    icon: 'fa-laptop',
    description: 'Enable real-time e-learning, quizzes, and attendance tracking from anywhere.',
  },
  {
    label: 'Reports & Analytics',
    icon: 'fa-chart-line',
    description: 'Generate performance, finance, and attendance analytics to drive smarter decisions.',
  },
  {
    label: 'Notifications & Bulk SMS',
    icon: 'fa-bullhorn', 
    description: 'Send instant alerts via in-app messages or bulk SMS, reaching even non-smartphone users in real time.',
  },
];

export const Features = component$(() => {
  return (
    <section id="features" class="bg-teal-200 relative overflow-hidden pb-32 md:pb-40 border-none">
      <div class="container mx-auto px-6 py-16">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold">Built for every part of a school</h2>
          <p class="text-slate-600 mt-2">
            Modules built-in so you can run operations efficiently
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up-left"
              data-aos-delay={i * 60}
              class="p-6 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="h-12 w-12 flex items-center justify-center mb-4 rounded-xl bg-teal-100 border border-teal-200">
                <i class={`fa-solid ${f.icon} text-2xl text-teal-600`}></i>
              </div>
              <h3 class="font-semibold mb-2">{f.label}</h3>
              <p class="text-sm text-slate-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute bottom-0 left-0"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
});
