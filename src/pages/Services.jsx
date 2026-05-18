import React, { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/Services.module.css';

const services = [
  {
    pill: "FAMILY",
    title: "Matrimonial Law",
    desc: "Providing sensitive, strategic, and comprehensive legal support for all matrimonial and family disputes involving divorce, alimony, child custody, and domestic violence.",
    image: "/images/service_matrimonial.png",
    type: "white"
  },
  {
    pill: "LITIGATION",
    title: "Civil Litigation",
    desc: "Expert representation in a broad spectrum of civil litigation matters including property disputes, breach of contract, injunctions, and tort claims.",
    image: "/images/service_civil.png",
    type: "dark"
  },
  {
    pill: "SUPPORT",
    title: "Legal Aid & Consultation",
    desc: "Committed to upholding accessible justice by providing legal aid and support to those in need through the District Legal Services Authority.",
    image: "/images/service_legal_aid.png",
    type: "white"
  }
];

const Services = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.servicesPage}>
      
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.badge}>MY SERVICES</div>
          <h1 className={styles.title}>
            Trusted <span className={styles.titleHighlight}>Expertise</span>
          </h1>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.subtitle}>
            I deliver trusted legal services with proven experience and a results-driven focus.
          </p>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carousel} ref={carouselRef}>
          
          {services.map((service, index) => {
            if (service.type === "white") {
              return (
                <div key={index} className={`${styles.card} ${styles.cardWhite}`}>
                  <div className={styles.cardPill}>{service.pill}</div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <div className={styles.imageContainer}>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.arrowIcon}>
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className={`${styles.card} ${styles.cardDark}`}>
                  <div className={styles.imageContainer}>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className={styles.darkOverlay}></div>
                  
                  <div className={styles.cardDarkContent}>
                    <div className={styles.cardPill}>{service.pill}</div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                    <div className={styles.cardFooter}>
                      <div className={styles.arrowIcon}>
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}

        </div>

        {/* Floating subtle DRAG indicator for extra UI polish as seen in mockup */}
        <div className={styles.dragIndicator}>
          <ChevronLeft size={16} /> DRAG <ChevronRight size={16} />
        </div>
      </div>

    </div>
  );
};

export default Services;
