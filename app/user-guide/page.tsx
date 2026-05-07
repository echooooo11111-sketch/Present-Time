import { PageLayout } from "@/components/page-layout";
import { Card } from "@/components/ui/card";
import {
  Download,
  MapPin,
  QrCode,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export const metadata = {
  title: "User Guide - Attendify",
  description:
    "Learn how to use Attendify for efficient attendance management.",
};

export default function UserGuidePage() {
  const guides = [
    {
      icon: Download,
      title: "Getting Started",
      description: "Installation and initial setup",
      content: [
        "Download the Attendify APK from the official website",
        "Install the application on your Android device",
        "Log in to your account with your school credentials",
        "Complete your profile setup and verification",
        "Grant necessary permissions for location and camera access",
      ],
    },
    {
      icon: MapPin,
      title: "Geofencing Setup",
      description: "Configure school boundaries and locations",
      content: [
        "Navigate to the Settings menu",
        'Select "Geofencing Configuration"',
        "Define your school location boundaries on the map",
        "Set the required distance radius (recommended 100-500 meters)",
        "Enable notifications for geofence entry/exit",
        "Test the geofence with a test device to ensure accuracy",
      ],
    },
    {
      icon: QrCode,
      title: "QR Code Attendance",
      description: "Using QR codes for quick attendance marking",
      content: [
        "Students generate unique QR codes from the dashboard",
        'Teachers or secretary open the app and tap "Scan QR Code"',
        "Point camera at the QR code displayed by student",
        "System automatically marks attendance upon successful scan",
        "View confirmation message and timestamp in the app",
        "Reports update in real-time on the backend",
      ],
    },
    {
      icon: Users,
      title: "User Management",
      description: "Managing students and teachers",
      content: [
        "Access the Admin Dashboard from the main menu",
        'Go to "User Management" section',
        "Add new students by uploading CSV file or manual entry",
        "Assign students to classes and sections",
        "Set teacher roles and permissions",
        "Monitor user activity and login history",
      ],
    },
    {
      icon: BarChart3,
      title: "Viewing Reports",
      description: "Analyzing attendance data and reports",
      content: [
        "Navigate to the Reports section from the dashboard",
        "Select date range for analysis",
        "Filter by class, section, or individual student",
        "View attendance percentage and patterns",
        "Export reports in PDF or Excel format",
        "Generate alerts for students with low attendance",
      ],
    },
    {
      icon: Settings,
      title: "Advanced Settings",
      description: "Customization and configuration options",
      content: [
        "Access Settings from the profile menu",
        "Customize notification preferences",
        "Set up automatic report generation schedules",
        "Configure backup and data sync options",
        "Manage two-factor authentication",
        "View and export account data",
      ],
    },
  ];

  return (
    <PageLayout
      title="User Guide"
      description="Complete guide to using Attendify for attendance management"
    >
      {/* Quick Navigation */}
      <div className="mb-12 rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-6 text-2xl font-bold">Quick Navigation</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="#getting-started"
              className="text-primary transition-colors hover:underline"
            >
              Getting Started with Attendify
            </a>
          </li>
          <li>
            <a
              href="#geofencing"
              className="text-primary transition-colors hover:underline"
            >
              Setting up Geofencing
            </a>
          </li>
          <li>
            <a
              href="#qr-code"
              className="text-primary transition-colors hover:underline"
            >
              Using QR Code Attendance
            </a>
          </li>
          <li>
            <a
              href="#users"
              className="text-primary transition-colors hover:underline"
            >
              Managing Users
            </a>
          </li>
          <li>
            <a
              href="#reports"
              className="text-primary transition-colors hover:underline"
            >
              Viewing Attendance Reports
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className="text-primary transition-colors hover:underline"
            >
              Advanced Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Guides Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {guides.map((guide, index) => {
          const IconComponent = guide.icon;
          const sectionIds = [
            "getting-started",
            "geofencing",
            "qr-code",
            "users",
            "reports",
            "settings",
          ];

          return (
            <Card
              key={index}
              id={sectionIds[index]}
              className="overflow-hidden"
            >
              <div className="border-b border-border bg-gradient-to-r from-primary/5 to-primary/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ol className="space-y-3">
                  {guide.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {itemIndex + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Card>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="mt-12 rounded-2xl border border-border bg-card p-8">
        <h2 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-foreground">
              What are the system requirements?
            </h3>
            <p className="text-muted-foreground">
              Attendify requires Android 8.0 or higher, 100MB free storage, and
              a stable internet connection. GPS and camera access are required
              for full functionality.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="mb-2 font-semibold text-foreground">
              How accurate is the geofencing feature?
            </h3>
            <p className="text-muted-foreground">
              Geofencing uses GPS and can typically pinpoint location within
              5-15 meters. For best results, configure your geofence radius
              based on your school&apos;s actual boundaries.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="mb-2 font-semibold text-foreground">
              Can I use both QR codes and geofencing together?
            </h3>
            <p className="text-muted-foreground">
              Yes! You can configure which method to use or combine both for
              enhanced accuracy. Administrators have full control over the
              attendance methods available in their school.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="mb-2 font-semibold text-foreground">
              How do I export attendance reports?
            </h3>
            <p className="text-muted-foreground">
              Navigate to the Reports section, select your date range and
              filters, then click the Export button. Choose between PDF or Excel
              format for download.
            </p>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
        <h2 className="mb-4 text-2xl font-bold">Need More Help?</h2>
        <p className="mb-6 text-muted-foreground">
          If you have additional questions or encounter issues, please
          don&apos;t hesitate to reach out to our support team.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Support
          </a>
          <a
            href="mailto:support@attendify.app"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-semibold transition-colors hover:bg-muted"
          >
            Email Us
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
