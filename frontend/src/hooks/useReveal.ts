import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Modern browsers animate with pure CSS (scroll-driven animations),
    // so the observer is only needed as a fallback.
    if (CSS.supports('animation-timeline: view()')) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useReveal;
