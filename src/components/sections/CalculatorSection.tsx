import React, { useState, useEffect } from 'react';
import { Instagram, Sparkles, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedCounter from '../ui/AnimatedCounter';
import AnimatedElement from '../ui/AnimatedElement';

const CalculatorSection: React.FC = () => {
  const [desiredFollowers, setDesiredFollowers] = useState<number>(1000);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const basePrice = 0.015; // Price per follower in dollars

  // Calculate the estimated price
  const calculatedPrice = (desiredFollowers * basePrice).toFixed(2);
  
  // Calculate delivery time in days (just for demonstration)
  const deliveryTime = Math.max(1, Math.ceil(desiredFollowers / 1000));
  
  const handleCalculate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 1200);
  };
  
  // Reset result when input changes
  useEffect(() => {
    if (showResult) setShowResult(false);
  }, [desiredFollowers]);

  return (
    <section id="calculator" className="section bg-gray-50 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement className="text-center mb-12">
            <h2 className="mb-4">
              Calculate Your <span className="gradient-text">Growth Potential</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use our calculator to see how many followers you can gain and how it can transform your Instagram presence.
            </p>
          </AnimatedElement>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <AnimatedElement animation="fadeInLeft" className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Follower Calculator</h3>
                
                <div className="mb-6">
                  <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-2">
                    How many followers would you like to gain?
                  </label>
                  <input 
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={desiredFollowers}
                    onChange={(e) => setDesiredFollowers(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-instagram-purple"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>100</span>
                    <span>5,000</span>
                    <span>10,000</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="followerInput" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter specific amount:
                  </label>
                  <input
                    id="followerInput"
                    type="number"
                    min="100"
                    max="100000"
                    value={desiredFollowers}
                    onChange={(e) => setDesiredFollowers(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <Button
                  variant="instagram"
                  className="w-full justify-center font-semibold"
                  onClick={handleCalculate}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </>
                  ) : (
                    'Calculate Growth'
                  )}
                </Button>
              </AnimatedElement>
              
              <AnimatedElement animation="fadeInRight" className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Your Growth Preview</h3>
                
                <div className={`space-y-6 ${showResult ? 'opacity-100' : 'opacity-70'}`}>
                  <div>
                    <p className="text-white/80 mb-2">You will receive approximately:</p>
                    <div className="text-4xl font-bold flex items-center">
                      {showResult ? (
                        <AnimatedCounter targetValue={desiredFollowers} className="mr-2" />
                      ) : (
                        <span>{desiredFollowers.toLocaleString()}</span>
                      )}
                      <span> New followers</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-white/80 mb-2">Estimated delivery time:</p>
                    <div className="text-2xl font-semibold flex items-center">
                      <TrendingUp className="mr-2" />
                      {showResult ? (
                        <AnimatedCounter targetValue={deliveryTime} duration={800} formatter={(val) => `${val} day${val !== 1 ? 's' : ''}`} />
                      ) : (
                        <span>{deliveryTime} day{deliveryTime !== 1 ? 's' : ''}</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-white/80 mb-2">Starting from:</p>
                    <div className="text-3xl font-bold flex items-center">
                      <Sparkles className="mr-2" />
                      ${calculatedPrice}
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full justify-center bg-white text-primary-600 hover:bg-white/90"
                  >
                    <Instagram className="mr-2" size={20} />
                    Connect with Instagram
                  </Button>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;