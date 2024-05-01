// hooks/useIntersectionObserver.ts
import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  ref: RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
  }: UseIntersectionObserverProps,
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, root, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin]);

  return isIntersecting;
};

export default useIntersectionObserver;
