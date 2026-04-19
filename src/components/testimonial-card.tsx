import { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="card testimonialCard">
      <p className="testimonialQuote">“{testimonial.quote}”</p>
      <div>
        <strong>{testimonial.name}</strong>
        <p className="muted">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </article>
  );
}
