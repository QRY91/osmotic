import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface StreamParticle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  source: string;
}

const NEWS_SOURCES = [
  { name: "Global", color: "#6b2737" },
  { name: "Tech", color: "#4a5d7a" },
  { name: "Legal", color: "#7a4a5d" },
  { name: "Economics", color: "#c67b8a" },
  { name: "Regional", color: "#d4a5b0" },
];

export default function StreamFlow() {
  const particles = useSignal<StreamParticle[]>([]);

  const createParticle = (): StreamParticle => {
    const source =
      NEWS_SOURCES[Math.floor(Math.random() * NEWS_SOURCES.length)];
    return {
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * window.innerWidth,
      y: -10,
      vx: (Math.random() - 0.5) * 1,
      vy: Math.random() * 2 + 1,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.7 + 0.3,
      color: source.color,
      source: source.name,
    };
  };

  const updateParticles = () => {
    particles.value = particles.value
      .map((particle) => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        opacity: particle.opacity * 0.998,
      }))
      .filter(
        (particle) =>
          particle.y < window.innerHeight + 50 &&
          particle.opacity > 0.1 &&
          particle.x > -50 &&
          particle.x < window.innerWidth + 50,
      );

    // Add new particles occasionally
    if (Math.random() < 0.3 && particles.value.length < 50) {
      particles.value = [...particles.value, createParticle()];
    }
  };

  useEffect(() => {
    const interval = setInterval(updateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize with some particles
    const initialParticles: StreamParticle[] = [];
    for (let i = 0; i < 15; i++) {
      initialParticles.push(createParticle());
    }
    particles.value = initialParticles;
  }, []);

  const handleStreamClick = (e: MouseEvent) => {
    // Create burst of particles at click location
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const burstParticles: StreamParticle[] = [];
    for (let i = 0; i < 8; i++) {
      const source =
        NEWS_SOURCES[Math.floor(Math.random() * NEWS_SOURCES.length)];
      burstParticles.push({
        id: Math.random().toString(36).substr(2, 9),
        x: clickX + (Math.random() - 0.5) * 100,
        y: clickY + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 6 + 3,
        opacity: 0.9,
        color: source.color,
        source: source.name,
      });
    }

    particles.value = [...particles.value, ...burstParticles];
  };

  return (
    <div
      class="absolute inset-0 overflow-hidden cursor-crosshair"
      onClick={handleStreamClick}
    >
      {/* Background flow lines */}
      <svg class="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6b2737;stop-opacity:0.1" />
            <stop offset="50%" style="stop-color:#c67b8a;stop-opacity:0.05" />
            <stop offset="100%" style="stop-color:#7a4a5d;stop-opacity:0.1" />
          </linearGradient>
        </defs>

        {/* Flowing background paths */}
        <path
          d="M-100,200 Q200,100 500,300 T1000,200 Q1300,100 1600,400"
          stroke="url(#flowGradient)"
          stroke-width="2"
          fill="none"
          class="animate-flow"
        />
        <path
          d="M-100,400 Q300,300 600,500 T1200,400 Q1500,300 1800,600"
          stroke="url(#flowGradient)"
          stroke-width="1.5"
          fill="none"
          class="animate-flow"
          style="animation-delay: 2s"
        />
        <path
          d="M-100,600 Q400,500 700,700 T1300,600 Q1600,500 1900,800"
          stroke="url(#flowGradient)"
          stroke-width="1"
          fill="none"
          class="animate-flow"
          style="animation-delay: 4s"
        />
      </svg>

      {/* Particle streams */}
      {particles.value.map((particle) => (
        <div
          key={particle.id}
          class="absolute rounded-full pointer-events-none transition-all duration-100"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
          }}
        />
      ))}

      {/* Stream labels */}
      <div class="absolute top-4 left-4 space-y-2">
        {NEWS_SOURCES.map((source, index) => (
          <div
            key={source.name}
            class="flex items-center space-x-2 text-xs text-gray-600 bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full animate-absorb"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div
              class="w-2 h-2 rounded-full"
              style={{ backgroundColor: source.color }}
            />
            <span>{source.name}</span>
          </div>
        ))}
      </div>

      {/* Interaction hint */}
      <div class="absolute bottom-4 right-4 text-xs text-gray-500 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg">
        💡 Click to create data burst
      </div>
    </div>
  );
}
