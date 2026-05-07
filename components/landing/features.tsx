import {
  MapPin,
  QrCode,
  WifiOff,
  Users,
  Shield,
  BarChart3,
  Bell,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "GPS Geofencing",
    description:
      "Automatic attendance tracking when students enter the school campus. No manual check-ins required.",
    highlight: true,
  },
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description:
      "Quick attendance verification through QR codes for classes and events. Scan and go!",
    highlight: true,
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description:
      "Student attendance can be recorded offline and syncs automatically when internet is restored. Secretary and teacher tools require an active connection.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Multi-Role System",
    description:
      "Tailored dashboards for Teachers, Students, and Secretaries with role-specific features.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Firebase-backed security with encrypted data storage. Your information stays protected.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Real-time Reports",
    description:
      "Generate detailed attendance reports instantly. Track patterns and identify issues early.",
    highlight: false,
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get alerts for late arrivals, absences, and important attendance updates in real-time.",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Android Native",
    description:
      "Built with Java for optimal performance. Smooth experience on all Android devices.",
    highlight: false,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Powerful Features
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything You Need for{" "}
            <span className="text-primary">Smart Attendance</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Attendify combines cutting-edge technology with simplicity to
            revolutionize how schools track student attendance.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                feature.highlight
                  ? "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                  feature.highlight
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25"
                }`}
              >
                <feature.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
