import styles from '../styles/Events.module.css';
import { events } from '../data/events';
import { Calendar, MapPin } from 'lucide-react';
import { clsx } from 'clsx';

const Events = () => {
  return (
    <section>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Events & Speaking</h2>
          <p>Engagement in the legal community and upcoming educational workshops.</p>
        </div>
        
        <div className={styles.eventList}>
          {events.map((event) => (
            <div key={event.id} className={clsx(styles.eventCard, event.type === 'Past' && styles.pastEvent)}>
              <div className={styles.eventInfo}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span className={styles.badge}>{event.type}</span>
                  <h3>{event.title}</h3>
                </div>
                <div className={styles.eventMeta}>
                  <span><Calendar size={16} /> {event.date}</span>
                  <span><MapPin size={16} /> {event.location}</span>
                </div>
                <p className={styles.eventDesc}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
