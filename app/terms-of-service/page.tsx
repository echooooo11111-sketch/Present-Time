import { PageLayout } from "@/components/page-layout";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Terms of Service - Attendify",
  description: "Terms of Service for Attendify attendance management system.",
};

export default function TermsOfServicePage() {
  return (
    <PageLayout
      title="Terms of Service"
      description="Last updated: January 2024"
    >
      <div className="max-w-3xl space-y-8">
        {/* Introduction */}
        <Card className="border-border p-6">
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the Attendify mobile application and related services
            (&quot;Service&quot;). By accessing or using Attendify, you agree to
            be bound by these Terms. If you do not agree with any part of these
            Terms, you may not use the Service.
          </p>
        </Card>

        {/* 1. Use License */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">1. Use License</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Attendify for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Modify or copy the materials</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Use the materials for any commercial purpose or for any public
                  display
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Attempt to decompile or reverse engineer any software
                  contained on Attendify
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Remove any copyright or other proprietary notations from the
                  materials
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Transfer the materials to another person or &quot;mirror&quot;
                  the materials on any other server
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Transmit illegal content or engage in unauthorized access
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* 2. User Responsibilities */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">2. User Responsibilities</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              As a user of Attendify, you agree to:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  Provide accurate and complete information during registration
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  Maintain the confidentiality of your password
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  Accept responsibility for all activities that occur under your
                  account
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  Use the Service in compliance with all applicable laws and
                  regulations
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  Not engage in any conduct that restricts or inhibits
                  anyone&apos;s use or enjoyment of the Service
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* 3. Account Registration */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">3. Account Registration</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              To use Attendify, you must register for an account. You are
              responsible for:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Maintaining the confidentiality of your login credentials
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>All activities that occur under your account</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Notifying us of any unauthorized use of your account
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              We reserve the right to refuse service, terminate accounts, or
              remove content at our sole discretion.
            </p>
          </Card>
        </section>

        {/* 4. Attendance Records */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            4. Attendance Records and Accuracy
          </h2>
          <Card className="border-border p-6">
            <p className="text-muted-foreground">
              While Attendify uses advanced technology for attendance tracking,
              users acknowledge that:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  GPS and geofencing data may have inherent accuracy limitations
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Technical malfunctions or network issues may affect attendance
                  recording
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Schools should maintain backup attendance methods</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Administrators are responsible for reviewing and validating
                  records
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* 5. Limitation of Liability */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            5. Limitation of Liability
          </h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              IN NO EVENT SHALL ATTENDIFY, ITS DIRECTORS, EMPLOYEES, OR AGENTS
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING LOST PROFITS, EVEN IF ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-muted-foreground">
              The Service is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis. Attendify makes no warranties, expressed or
              implied, regarding the Service.
            </p>
          </Card>
        </section>

        {/* 6. Data Retention */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            6. Data Retention and Backup
          </h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              Attendify will maintain attendance records in accordance with
              applicable laws and our data retention policies. However:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>
                  Schools are responsible for maintaining their own backups
                </span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>We are not liable for data loss or corruption</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Data may be deleted upon account termination</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* 7. Intellectual Property */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            7. Intellectual Property Rights
          </h2>
          <Card className="border-border p-6">
            <p className="text-muted-foreground">
              The Attendify Service, including all content, features, and
              functionality (including but not limited to all information,
              software, text, displays, images, video, and audio), is owned by
              Attendify, its licensors, or other providers of such material and
              is protected by copyright, trademark, and other intellectual
              property laws.
            </p>
          </Card>
        </section>

        {/* 8. Third-Party Links */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">8. Third-Party Links</h2>
          <Card className="border-border p-6">
            <p className="text-muted-foreground">
              Attendify may contain links to third-party websites. We are not
              responsible for the content, accuracy, or practices of these
              external sites. Your use of third-party websites is governed by
              their terms of service and privacy policies.
            </p>
          </Card>
        </section>

        {/* 9. Termination */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">9. Termination</h2>
          <Card className="border-border p-6">
            <p className="text-muted-foreground">
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason,
              including if you breach any of these Terms. Upon termination, your
              right to use the Service will cease immediately.
            </p>
          </Card>
        </section>

        {/* 10. Modifications */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            10. Modifications to Terms
          </h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              Attendify may modify these Terms at any time. The most current
              version will always be available at this page. By continuing to
              use the Service after changes become effective, you agree to the
              modified Terms.
            </p>
            <p className="text-muted-foreground">
              We will notify users of significant changes via email or prominent
              notice on the Service.
            </p>
          </Card>
        </section>

        {/* 11. Governing Law */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">11. Governing Law</h2>
          <Card className="border-border p-6">
            <p className="text-muted-foreground">
              These Terms and your use of the Service are governed by and
              construed in accordance with the laws of the Republic of the
              Philippines, without regard to its conflict of law provisions.
            </p>
          </Card>
        </section>

        {/* 12. Contact Information */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">12. Contact Us</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:presentime.attendify@gmail.com"
                  className="text-primary hover:underline"
                >
                  presentime.attendify@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">Phone: +63 956 654 0246</li>
              <li className="text-muted-foreground">
                Address: Quezon City, Philippines
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
}
