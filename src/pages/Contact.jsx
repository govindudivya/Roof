import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../utils/constants';

const Contact = () => {
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
    <div className="min-h-screen pt-16 md:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-text-medium max-w-2xl mx-auto">
            Have a roofing project in mind? We're here to help. Reach out to us
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form Section */}
          <div 
            id="contact-form-section"
            ref={(el) => (sectionRefs.current['contact-form-section'] = el)}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible['contact-form-section']
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Business Info Section */}
          <div 
            id="contact-info-section"
            ref={(el) => (sectionRefs.current['contact-info-section'] = el)}
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible['contact-info-section']
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-primary-dark rounded-xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-accent-gold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-accent-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-300">{contactInfo.location}</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-accent-gold text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <div className="space-y-2">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="block text-gray-300 hover:text-accent-gold transition-all duration-300 hover:translate-x-2"
                      >
                        {contactInfo.phone}
                      </a>
                      <a
                        href={`tel:${contactInfo.alternatePhone}`}
                        className="block text-gray-300 hover:text-accent-gold transition-all duration-300 hover:translate-x-2"
                      >
                        {contactInfo.alternatePhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust/CTA Message */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  We're committed to providing exceptional service and easy
                  communication. Whether you have questions about our services,
                  need a quote, or want to discuss your roofing project, we're
                  just a call or message away. Let's build something strong and
                  elegant together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
