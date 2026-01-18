import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/constants';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          observer.unobserve(entry.target);
        }
      });
    };

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  const whyChooseUs = [
    {
      id: 1,
      text: 'Premium Quality Materials',
    },
    {
      id: 2,
      text: 'Expert Craftsmanship',
    },
    {
      id: 3,
      text: 'Durable & Long-lasting',
    },
    {
      id: 4,
      text: 'Professional Service',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-dark-alt to-primary-dark">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-pulse-slow">
            Premium Luxury Roofing Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Build with confidence. Build with class.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get a Quote
            </Link>
            <Link
              to="/gallery"
              className="btn-secondary"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section 
        id="about-section"
        ref={(el) => (sectionRefs.current['about-section'] = el)}
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isVisible['about-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Excellence in Every Project
              </h2>
              <p className="text-text-medium text-lg leading-relaxed mb-4">
                At Basaweswara Roofing, we specialize in delivering premium roofing solutions that combine exceptional durability with elegant design. Our commitment to quality craftsmanship ensures that every project stands the test of time.
              </p>
              <p className="text-text-medium text-lg leading-relaxed">
                We use only the finest materials and employ skilled professionals who take pride in their work. From initial consultation to final installation, we ensure your roofing project meets the highest standards of excellence.
              </p>
            </div>
            <div className={`relative transition-all duration-700 delay-200 ${isVisible['about-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium roofing work"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section 
        id="services-section"
        ref={(el) => (sectionRefs.current['services-section'] = el)}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible['services-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Services
            </h2>
            <p className="text-text-medium text-lg max-w-2xl mx-auto">
              Comprehensive roofing solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  isVisible['services-section']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        id="why-choose-section"
        ref={(el) => (sectionRefs.current['why-choose-section'] = el)}
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible['why-choose-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Why Choose Us
            </h2>
            <p className="text-text-medium text-lg max-w-2xl mx-auto">
              What sets us apart in the roofing industry
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  isVisible['why-choose-section']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <FaCheckCircle className="text-accent-gold flex-shrink-0 mt-1 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-text-dark font-medium text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="cta-section"
        ref={(el) => (sectionRefs.current['cta-section'] = el)}
        className="py-20 md:py-28 bg-gradient-to-br from-primary-dark via-primary-dark-alt to-primary-dark text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's build something strong and elegant.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Ready to transform your roof? Get in touch with us today for a consultation and quote.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
