import React, { useEffect, useState, useRef } from 'react';

export default function GlowCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);

      // Check if hovering over interactive element
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.skill-card') ||
        target.closest('.cert-card') ||
        target.closest('.laptop-card') ||
        target.closest('[role="button"]')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth physics loop with linear interpolation (lerp)
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      // Crisp dot tracking
      dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.65);
      dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.65);

      // Trailing ring
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.2);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.2);

      // Fluid ambient background glow
      glowPos.current.x = lerp(glowPos.current.x, mouse.current.x, 0.08);
      glowPos.current.y = lerp(glowPos.current.y, mouse.current.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (isTouch) return null;

  return (
    <div className={`glow-cursor-container ${visible ? 'is-active' : ''} ${hovered ? 'is-hovering' : ''} ${clicked ? 'is-clicking' : ''}`}>
      {/* Ambient background glow orb */}
      <div ref={glowRef} className="cursor-ambient-glow" />
      {/* Precision tracking ring */}
      <div ref={ringRef} className="cursor-ring" />
      {/* Central gold dot */}
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
