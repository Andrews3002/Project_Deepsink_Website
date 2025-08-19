import { useEffect, useRef } from "react";

export function useResponsiveFont() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;

    if (!container || !heading || !content) return;

    const updateFont = () => {
      const width = container.offsetWidth;
      heading.style.fontSize = `${width * 0.05}px`;
      content.style.fontSize = `${width * 0.02}px`;
    };

    updateFont(); // run once on mount

    const observer = new ResizeObserver(() => updateFont());
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return { containerRef, headingRef, contentRef };
}