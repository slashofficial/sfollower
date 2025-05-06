import React from 'react';
import { Instagram } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 z-0" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-instagram-gradient rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-instagram-gradient rounded-full opacity-10 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <h1 className="mb-6">
              <span className="gradient-text">Boost Your Instagram Presence</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Gain real, engaged followers who are interested in your content. 
              Grow your account and increase your influence on Instagram.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInUp" delay={0.5}>
            <Button 
              variant="instagram" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-6"
            >
              <Instagram className="mr-3 h-6 w-6" />
              Start Your Free Trial Now
            </Button>
          </AnimatedElement>
        </div>
        
        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedElement animation="fadeInUp" delay={0.6} className="card card-hover flex flex-col items-center text-center py-6">
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInUp" delay={0.7} className="card card-hover flex flex-col items-center text-center py-6">
            <div className="text-4xl font-bold gradient-text mb-2">24hr</div>
            <div className="text-gray-600">Fast Delivery</div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInUp" delay={0.8} className="card card-hover flex flex-col items-center text-center py-6">
            <div className="text-4xl font-bold gradient-text mb-2">98.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HeroSection