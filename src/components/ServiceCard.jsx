import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaIndustry, 
  FaTools, 
  FaHammer 
} from 'react-icons/fa';

const ServiceCard = ({ service, link = true }) => {
  const getIcon = (iconName) => {
    const iconMap = {
      roof: FaHome,
      metal: FaIndustry,
      repair: FaTools,
      custom: FaHammer,
    };
    const IconComponent = iconMap[iconName] || FaHome;
    return <IconComponent className="w-12 h-12" />;
  };

  const cardContent = (
    <>
      <div className="text-accent-gold mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out">
        {getIcon(service.icon)}
      </div>
      <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent-gold transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-text-medium text-sm leading-relaxed group-hover:text-text-dark transition-colors duration-300">
        {service.description}
      </p>
    </>
  );

  const cardClassName = "group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-out p-6 hover:-translate-y-2 active:translate-y-0 flex flex-col items-center text-center border border-transparent hover:border-accent-gold/20";

  if (link) {
    return (
      <Link to="/services" className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
};

export default ServiceCard;
