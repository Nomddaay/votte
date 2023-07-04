import React from 'react';
import './css/FadeInSection.css';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(true);  
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection