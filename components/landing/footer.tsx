import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-primary/90 p-8 text-center text-primary-foreground md:p-16">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium">
              Free Download
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to Transform Your School&apos;s Attendance?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg opacity-90">
              Join schools that have simplified their attendance tracking with
              Attendify. Download now and experience the future of attendance
              management.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 gap-3 px-10 text-base font-semibold shadow-xl"
              >
                <Download className="h-5 w-5" />
                Download APK Now
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-14 gap-2 px-8 text-base font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-foreground shadow-lg shadow-primary/15 ring-1 ring-border/30">
                <Image
                  src="/logo.png"
                  alt="Attendify logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Attendify</span>
            </div>
            <p className="mb-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Smart attendance management system using geofencing and QR codes
              for schools and educational institutions. Built with modern
              technology for reliable, automated tracking.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download APK
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#features"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/user-guide"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  User Guide
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:presentime.attendify@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm">presentime.attendify@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+639566540246"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm">+63 956 654 0246</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Location
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Quezon City, Philippines
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Attendify. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with dedication for better education.
          </p>
        </div>
      </div>
    </footer>
  );
}
