import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/constants';

const Services = () => {
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

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gray-50">
      {/* Header Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-text-medium text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive roofing solutions tailored to your needs. We deliver excellence in every project with premium materials and expert craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section 
        id="services-grid"
        ref={(el) => (sectionRefs.current['services-grid'] = el)}
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  isVisible['services-grid']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard service={service} link={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-services"
        ref={(el) => (sectionRefs.current['cta-services'] = el)}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${isVisible['cta-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-medium text-lg mb-6">
              Contact us today for a consultation and quote on your roofing project.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
