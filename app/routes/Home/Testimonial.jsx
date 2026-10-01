import React from 'react';

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "Before Tekzen, I knew C++ syntax from college but couldn't write memory-safe code to save my life. Building a custom allocator and having it ripped apart in PR reviews changed my entire perspective on engineering.",
    initials: "RJ",
    initialsBg: "bg-[#c8f269] text-[#133e2b]",
    name: "Rahul Joshi",
    role: "Associate Software Engineer",
    track: "C++ Systems",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "The 15-student cohort rule is genuine. You can't hide in the back row. We pushed production PRs daily, had real staging environments, and cracked my full-stack startup offer in Bangalore within 45 days of graduation.",
    initials: "PM",
    initialsBg: "bg-[#ebd9c1] text-[#133e2b]",
    name: "Pooja Mishra",
    role: "Full Stack Engineer",
    track: "MERN + Next.js",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Most coaching institutes just show you how to write Spring annotations blindly. At Tekzen, we analyzed garbage collector pauses and Kafka partitions under simulated load. Unmatched depth for anyone serious about backend.",
    initials: "AS",
    initialsBg: "bg-[#133e2b] text-[#c8f269]",
    name: "Aman Sharma",
    role: "Backend Engineer",
    track: "Java Enterprise",
  },
];

function Testimonial() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div>
          {/* Tag Pill */}
          <span className="inline-block bg-[#c8f269] text-[#133e2b] text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-2xs mb-3">
            VERIFIABLE OUTCOMES
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15]">
            Student Success Stories
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl mt-3 leading-relaxed">
            Hear directly from engineers who broke out of tutorial loops into high-impact engineering roles.
          </p>
        </div>

        {/* Rating Badge */}
        <div className="shrink-0">
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/80 shadow-xs px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-neutral-800">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span>4.9 / 5 Rating (180+ Graduates)</span>
          </div>
        </div>
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs border border-neutral-200/60 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-5 border-t border-neutral-100 flex items-center gap-3.5">
              {/* Initials Avatar */}
              <div
                className={`w-10 h-10 rounded-full ${item.initialsBg} font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-2xs`}
              >
                {item.initials}
              </div>

              {/* Author Metadata */}
              <div>
                <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-tight mt-0.5">
                  {item.role} • Track: {item.track}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;