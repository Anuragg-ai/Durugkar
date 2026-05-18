import { useState, useEffect } from 'react';
import styles from '../styles/Slider.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/photo-1665558646240-b2190160c400.jpg',
    captions: ['Welcome', 'नमस्ते'],
  },
  {
    image: '/images/917562-ram-photo-constitution.jpeg',
    captions: ['Welcome', 'नमस्ते'],
  },
  {
    image: '/images/indian-legal-system-gavel-and-scales-of-justice-before-the-indian-flag-photo.jpeg',
    captions: ['Welcome', 'नमस्ते'],
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className={styles.overlay}>
            <div className={styles.captionContainer}>
              {slide.captions.map((caption, i) => (
                <h2 key={i} className={styles.caption}>
                  {caption}
                </h2>
              ))}
            </div>
          </div>
        </div>
      ))}

      <button className={styles.prevBtn} onClick={prevSlide}>
        <ChevronLeft size={40} />
      </button>
      <button className={styles.nextBtn} onClick={nextSlide}>
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

export default Slider;
