import React from 'react';
import Carousel from './Carousel';
import { servicesData } from '../mock/mockData';

interface ServiceItemData {
  id: number;
  image: string;
  title: string;
}

const Services: React.FC = () => {
  const renderServiceItem = (service: ServiceItemData) => (
    <div className="service-item" key={service.id}>
      <div className="service-image-wrapper">
        <img src={service.image} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
    </div>
  );

  return (
    <section className="services-section" id='services'>
      <h2>Our Services</h2>
      <div className="services-carousel">
        <Carousel items={servicesData} renderItem={renderServiceItem} />
      </div>
    </section>
  );
};

export default Services; 




