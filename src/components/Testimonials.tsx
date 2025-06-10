import React from 'react';
import Carousel from './Carousel';
import { testimonialsData } from '../mock/mockData';

interface TestimonialItemData {
  id: number;
  image: string;
  title: string;
  description: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const renderTestimonialItem = (testimonial: TestimonialItemData) => (
    <div className="testimonial-item" key={testimonial.id}>
      <img src={testimonial.image} alt={testimonial.title} className="testimonial-image" />
      <div className="testimonial-overlay">
        <h3>{testimonial.title}</h3>
        <p className="testimonial-company">{testimonial.company}</p>
        <p className="testimonial-description">{testimonial.description}</p>
      </div>
    </div>
  );

  return (
    <section className="testimonials-section" id='testimonials'>
      <h2>Testimonials</h2>
      <div className="testimonials-carousel-container">
        <Carousel items={testimonialsData} renderItem={renderTestimonialItem} />
      </div>
    </section>
  );
};

export default Testimonials; 