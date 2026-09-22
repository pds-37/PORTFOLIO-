import React, { useRef, useState, useCallback, useEffect } from 'react';

/**
 * TiltCard: Wraps any card with smooth 3D tilt and dynamic light glare
 */
export default function TiltCard({
  as: Component = 'div',
  children,
  className = '',
  style = {},
  max = 10,
  scale = 1.02,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices to prevent scroll stutter
    if (window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches) {
      setEnabled(false);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!enabled) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * max;
      const rotateY = ((x - centerX) / centerX) * max;

      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.08s ease-out',
        willChange: 'transform'
      });

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          opacity: 1,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, var(--tilt-glare, rgba(214, 178, 127, 0.16)), transparent 65%)`,
          transition: 'opacity 0.15s ease-out'
        });
      }
    },
    [enabled, max, scale, glare]
  );

  const handleMouseLeave = useCallback(() => {
    if (!enabled) return;
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
    });
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 0.5s ease-out'
      });
    }
  }, [enabled, glare]);

  return (
    <Component
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        position: 'relative',
        ...style,
        ...tiltStyle
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {glare && enabled && (
        <div
          className="tilt-glare-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 4,
            ...glareStyle
          }}
        />
      )}
    </Component>
  );
}
