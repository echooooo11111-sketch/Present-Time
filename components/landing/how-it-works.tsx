import {
  Download,
  UserPlus,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description:
      "Get Attendify from our website. Available for Android devices with simple one-click installation.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Log in Your Account",
    description:
      "Your account is created by the admin or app developer and assigned a role. Simply log in with your credentials to access the correct dashboard.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Enable Location",
    description:
      "Allow location access so the app can detect when you arrive at school campus automatically.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Attendance Tracked",
    description:
      "Walk into school and your attendance is recorded automatically. View your complete history anytime.",
    color: "from-primary to-primary/80",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-muted/30 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Simple Setup
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Get Started in <span className="text-primary">Minutes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Setting up Attendify is quick and easy. Follow these simple steps to
            start tracking attendance automatically.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="absolute left-0 right-0 top-[4.5rem] hidden h-1 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-primary lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 md:hidden">
                    <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
                  </div>
                )}

                <div className="text-center">
                  {/* Step number circle */}
                  <div
                    className={`relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-2xl font-bold text-white shadow-xl`}
                  >
                    {step.step}
                    {/* Ring effect */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30 blur-md`}
                    />
                  </div>

                  {/* Card */}
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
                    {/* Icon */}
                    <div
                      className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                    >
                      <step.icon className="h-7 w-7" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="h-14 gap-3 px-10 text-base shadow-lg shadow-primary/25"
          >
            <Download className="h-5 w-5" />
            Download Now
          </Button>
        </div>
      </div>
    </section>
  );
}
