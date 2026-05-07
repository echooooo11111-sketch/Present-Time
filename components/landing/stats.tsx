"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, QrCode, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 3,
    suffix: "",
    label: "User Roles",
    description: "Teachers, Students, Secretaries",
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "m",
    label: "Geofence Radius",
    description: "Accurate location tracking",
  },
  {
    icon: QrCode,
    value: 2,
    suffix: "s",
    label: "QR Scan Time",
    description: "Lightning fast verification",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Availability",
    description: "Works offline too",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl font-bold tracking-tight md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center"
            >
              {/* Decorative line */}
              {index < stats.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border lg:block" />
              )}
              
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <stat.icon className="h-7 w-7" />
              </div>
              
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
