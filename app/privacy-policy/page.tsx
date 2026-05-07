import { PageLayout } from "@/components/page-layout";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Database,
  Lock,
  Share2,
  CheckCircle,
  Bell,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Attendify",
  description: "Privacy policy for Attendify attendance management system.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      subsections: [
        {
          title: "Personal Information",
          items: [
            "Full name and email address",
            "Phone number and school/institution affiliation",
            "Username and password (encrypted)",
            "Profile information and preferences",
          ],
        },
        {
          title: "Location Data",
          description:
            "For geofencing functionality, we collect GPS coordinates and location information. This data is used solely to determine attendance status within school boundaries. You can disable location tracking in your device settings at any time.",
        },
        {
          title: "Camera Access",
          description:
            "To use QR code scanning features, we request camera access. The camera is used only for scanning attendance QR codes and is not stored or accessed without your explicit permission.",
        },
        {
          title: "Attendance Records",
          description:
            "We collect and maintain records including timestamps, location data at time of check-in, and attendance status. This information is essential for the core functionality of the Attendify system.",
        },
        {
          title: "Device Information",
          description:
            "We automatically collect device identifiers, device type, operating system version, mobile network information, and app crash logs to improve service quality and functionality.",
        },
      ],
    },
    {
      icon: CheckCircle,
      title: "How We Use Your Information",
      items: [
        "To provide and maintain the Attendify service",
        "To process attendance records and generate reports",
        "To notify you about changes to our Service",
        "To provide customer support and respond to inquiries",
        "To monitor and analyze usage and trends to improve user experience",
        "To detect and prevent fraudulent transactions and other illegal activities",
        "For anonymous statistical analysis and aggregated reporting",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      description:
        "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We implement the following security measures:",
      items: [
        "End-to-end encryption for sensitive data transmission",
        "Secure password hashing and storage protocols",
        "Regular security audits and vulnerability assessments",
        "Access controls and role-based permissions",
      ],
    },
    {
      icon: Share2,
      title: "Sharing Your Information",
      description:
        "We do not share your personal information with third parties except:",
      items: [
        {
          label: "With Service Providers",
          text: "We may share data with vendors who assist us in operating our website and conducting our business (hosting, analytics, customer service)",
        },
        {
          label: "With School Administration",
          text: "Attendance records are shared with authorized school administrators",
        },
        {
          label: "For Legal Compliance",
          text: "If required by law or in response to valid legal requests",
        },
        {
          label: "Business Transfers",
          text: "If we are involved in a merger, acquisition, or asset sale",
        },
      ],
    },
    {
      icon: CheckCircle,
      title: "Your Rights",
      description: "You have the right to:",
      items: [
        "Access your personal information",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Withdraw consent for data collection",
        "Opt-out of marketing communications",
      ],
    },
    {
      icon: Bell,
      title: "Changes to This Privacy Policy",
      description:
        'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.',
    },
    {
      icon: Mail,
      title: "Contact Us",
      description:
        "If you have any questions about this Privacy Policy, please contact us:",
      contacts: [
        { label: "Email", value: "privacy@attendify.app" },
        { label: "Support", value: "support@attendify.app" },
        { label: "Address", value: "Quezon City, Philippines" },
      ],
    },
  ];

  return (
    <PageLayout title="Privacy Policy" description="Last updated: January 2024">
      <div className="max-w-4xl space-y-8">
        {/* Introduction */}
        <Card className="border-border bg-gradient-to-br from-accent/50 to-transparent p-6">
          <p className="text-muted-foreground leading-relaxed">
            Attendify (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or
            &quot;Company&quot;) operates the Attendify mobile application
            (&quot;Service&quot;). This page informs you of our policies
            regarding the collection, use, and disclosure of personal data when
            you use our Service and the choices you have associated with that
            data. We are committed to protecting your privacy and ensuring you
            have a positive experience on our platform.
          </p>
        </Card>

        {/* Table of Contents */}
        <Card className="border-border p-6">
          <h2 className="mb-4 font-semibold text-foreground">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {sections.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                >
                  <IconComponent className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {section.title}
                  </span>
                </a>
              );
            })}
          </div>
        </Card>

        {/* Policy Sections */}
        {sections.map((section, idx) => {
          const IconComponent = section.icon;
          return (
            <section key={idx} id={`section-${idx}`} className="scroll-mt-20">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {idx + 1}. {section.title}
                </h2>
              </div>

              {section.description && (
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              )}

              {/* For sections with subsections (Information We Collect) */}
              {section.subsections && (
                <div className="space-y-4">
                  {section.subsections.map((subsection, subIdx) => (
                    <Card
                      key={subIdx}
                      className="border-border p-5 transition-shadow hover:shadow-sm"
                    >
                      <h3 className="mb-3 font-semibold text-foreground">
                        {subsection.title}
                      </h3>
                      {subsection.description && (
                        <p className="text-muted-foreground">
                          {subsection.description}
                        </p>
                      )}
                      {subsection.items && (
                        <ul className="mt-3 space-y-2">
                          {subsection.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex gap-3 text-muted-foreground"
                            >
                              <span className="text-primary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  ))}
                </div>
              )}

              {/* For sections with items (regular list) */}
              {section.items && !section.subsections && (
                <Card className="border-border p-6">
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3">
                        <span className="text-primary">✓</span>
                        {typeof item === "string" ? (
                          <span className="text-muted-foreground">{item}</span>
                        ) : (
                          <span className="text-muted-foreground">
                            <strong>{item.label}:</strong> {item.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* For contact section */}
              {section.contacts && (
                <Card className="border-border p-6">
                  <ul className="space-y-2">
                    {section.contacts.map((contact, contactIdx) => (
                      <li key={contactIdx} className="text-muted-foreground">
                        <strong>{contact.label}:</strong>{" "}
                        {contact.label === "Email" &&
                        contact.value.includes("@") ? (
                          <a
                            href={`mailto:${contact.value}`}
                            className="text-primary hover:underline"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span>{contact.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </section>
          );
        })}
      </div>
    </PageLayout>
  );
}
