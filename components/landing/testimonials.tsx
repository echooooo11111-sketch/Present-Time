import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "School Principal",
    school: "St. Mary Academy",
    content:
      "Attendify has transformed how we track attendance. What used to take hours now happens automatically. Our teachers can focus on teaching instead of paperwork.",
    rating: 5,
  },
  {
    name: "Juan Reyes",
    role: "Grade 12 Student",
    school: "National High School",
    content:
      "I love that I don't have to sign anything anymore. Just walk into school and I'm marked present. The app even shows my attendance history which helps me stay on track.",
    rating: 5,
  },
  {
    name: "Ana Cruz",
    role: "School Secretary",
    school: "Central Elementary",
    content:
      "Generating attendance reports used to be a nightmare. Now I can pull up any data I need in seconds. The multi-role system makes everything so organized.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by{" "}
            <span className="text-primary">Schools</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            See what educators and students are saying about their experience with Attendify.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-xl"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10 transition-colors group-hover:text-primary/20" />
              
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
