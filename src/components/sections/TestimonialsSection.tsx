import React from 'react';
import { Instagram, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import AnimatedElement from '../ui/AnimatedElement';
import AnimatedCounter from '../ui/AnimatedCounter';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container-custom">
        <AnimatedElement className="text-center mb-16">
          <h2 className="mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of creators and businesses have already transformed their Instagram presence with S FOLLOWER.
          </p>
        </AnimatedElement>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement 
              key={testimonial.id} 
              animation="fadeInUp"
              delay={0.2 + index * 0.1}
              className="card card-hover"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-instagram-purple">{testimonial.username}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>
              
              <div className="flex items-center border-t border-gray-200 pt-4 mt-4">
                <Instagram className="w-5 h-5 text-instagram-pink mr-2" />
                <span className="text-gray-500 mr-1">Gained</span>
                <span className="font-bold text-instagram-purple">
                  <AnimatedCounter targetValue={testimonial.followersGained} />
                </span>
                <span className="text-gray-500 ml-1">followers</span>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fadeInUp" delay={0.6} className="mt-12 text-center">
          <a 
            href="#" 
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View more customer stories →
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default TestimonialsSection;