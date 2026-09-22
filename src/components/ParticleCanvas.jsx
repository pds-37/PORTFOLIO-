import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Mouse coordinates relative to hero
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    // Particle definition
    const particleCount = window.innerWidth < 768 ? 35 : 65;
    const particles = [];

    // Warm gold palette: matching #d6b27f and cream
    const colors = [
      'rgba(214, 178, 127, 0.75)', // primary gold
      'rgba(245, 238, 228, 0.65)', // warm cream
      'rgba(230, 200, 155, 0.55)', // soft amber gold
      'rgba(255, 255, 255, 0.45)', // white starlight
    ];

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.size = Math.random() * 2 + 0.6;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.45 + 0.15); // gentle upward drift
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.6 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.008;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Twinkle opacity oscillation
        this.twinklePhase += this.twinkleSpeed;
        const currentAlpha = Math.max(0.1, this.alpha + Math.sin(this.twinklePhase) * 0.25);

        // Mouse gentle repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = dx / distance;
          const dirY = dy / distance;
          this.x -= dirX * force * 1.5;
          this.y -= dirY * force * 1.5;
        }

        // Loop back when drifting off top, bottom, or sides
        if (this.y < -10) this.reset();
        if (this.x < -10) this.x = width + 5;
        if (this.x > width + 10) this.x = -5;

        return currentAlpha;
      }

      draw(alpha) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(/[\d\.]+\)$/, `${alpha})`);
        ctx.shadowColor = 'rgba(214, 178, 127, 0.45)';
        ctx.shadowBlur = this.size * 3.5;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    resize();
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect close neighboring particles with subtle constellations
    const drawConstellations = () => {
      const maxDistance = 90;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(214, 178, 127, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      drawConstellations();

      for (let i = 0; i < particles.length; i++) {
        const alpha = particles[i].update();
        particles[i].draw(alpha);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event Handlers
    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      resize();
    };

    // Pause canvas when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            render();
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    window.addEventListener('resize', handleResize);
    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
      aria-hidden="true"
    />
  );
}
