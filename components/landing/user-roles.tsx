import { GraduationCap, Users, ClipboardList, Check } from "lucide-react";

const roles = [
  {
    icon: GraduationCap,
    title: "Teachers",
    description:
      "Manage classes and track student attendance with powerful tools.",
    features: [
      "Create and manage class sessions",
      "View real-time attendance status",
      "Scan QR codes for manual attendance",
      "Export attendance reports",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    icon: Users,
    title: "Students",
    description:
      "Easy attendance tracking with automatic check-in capabilities.",
    features: [
      "Automatic GPS-based check-in",
      "Generate QR codes for verification",
      "View personal attendance history",
      "Receive notifications and reminders",
    ],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
  },
  {
    icon: ClipboardList,
    title: "Secretaries",
    description: "Complete administrative control over school attendance data.",
    features: [
      "Access comprehensive reports",
      "Manage all users and classes",
      "Scan QR codes for manual attendance",
      "Monitor school-wide attendance",
    ],
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20",
    textColor: "text-primary",
  },
];

export function UserRoles() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            User Roles
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Designed for <span className="text-primary">Everyone</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Attendify provides tailored experiences for each user type with
            role-specific features and dashboards.
          </p>
        </div>

        {/* Roles grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border ${role.borderColor} ${role.bgColor} p-8 transition-all hover:shadow-xl`}
            >
              {/* Icon */}
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${role.color} text-white shadow-lg`}
              >
                <role.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-2xl font-bold">{role.title}</h3>
              <p className="mb-6 text-muted-foreground">{role.description}</p>

              {/* Features list */}
              <ul className="space-y-3">
                {role.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${role.textColor} bg-current/10`}
                    >
                      <Check className={`h-3 w-3 ${role.textColor}`} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
