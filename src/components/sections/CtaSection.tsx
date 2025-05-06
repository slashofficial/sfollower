import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-instagram-gradient opacity-10 z-0" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-instagram-purple rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-instagram-pink rounded-full opacity-10 blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <AnimatedElement animation="fadeInLeft" className="p-8 md:p-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get 3 Days <span className="gradient-text">Free Trial</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Experience the power of S FOLLOWER with no commitment. 
                Start growing your Instagram presence today and see the results before you pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="instagram" size="lg" className="font-semibold">
                  <Instagram className="mr-2" size={20} />
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInRight" className="bg-instagram-gradient p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">What's Included in Your Free Trial</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>100 New followers to kickstart your growth</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Full access to targeting features</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Analytics dashboard access</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>No credit card required</span>
                </li>
              </ul>
              <p className="text-white/80 text-sm">
                *No strings attached. Cancel anytime during your trial period.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;