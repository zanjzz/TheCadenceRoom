import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

type ScrollZoomImageProps = {
  src: string;
  alt: string;
  from?: number;
  to?: number;
  className?: string;
};

export default function ScrollZoomImage({
  src,
  alt,
  from = 0.55,
  to = 1,
  className = "",
}: ScrollZoomImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        width={1200}
        height={900}
        loading="lazy"
        className="brut-border brut-shadow mx-auto block h-auto w-full max-w-full origin-center object-cover"
        style={prefersReducedMotion ? {} : { scale }}
      />
    </div>
  );
}
