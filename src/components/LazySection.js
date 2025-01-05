import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function LazySection({ children }) {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div ref={ref}>
      {isVisible && children}
    </div>
  );
} 