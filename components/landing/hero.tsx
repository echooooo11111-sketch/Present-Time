"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  QrCode,
  Shield,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute left-1/4 top-20 h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute bottom-20 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/15 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Smart Attendance Solution
              </span>
            </div>

            {/* Logo and name */}
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-foreground shadow-lg shadow-primary/15 ring-1 ring-border/30">
                <Image
                  src="/logo.png"
                  alt="Attendify logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold tracking-tight">
                Attendify
              </span>
            </div>

            {/* Tagline */}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Smart Attendance,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
              Automate student attendance tracking with GPS geofencing and QR
              codes. Save time, reduce errors, and gain real-time insights for
              your school.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-14 gap-3 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <Download className="h-5 w-5" />
                Download APK
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 gap-2 px-8 text-base"
              >
                <Smartphone className="h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Easy Setup</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">3 User Roles</span>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Phone mockup */}
          <div className="relative flex-1">
            <div className="relative mx-auto w-[300px] md:w-[340px]">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-b from-primary/20 to-transparent blur-2xl" />

              {/* Phone frame */}
              <div className="relative rounded-[3rem] border-[14px] border-foreground/90 bg-foreground/90 p-1 shadow-2xl">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-2 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-foreground/90" />

                {/* Screen content */}
                <div className="relative overflow-hidden rounded-[2.3rem] bg-background">
                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/90 px-6 py-4 pt-10 text-primary-foreground">
                    <div>
                      <p className="text-xs opacity-80">Good Morning</p>
                      <p className="text-lg font-semibold">Juan Dela Cruz</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>

                  {/* App content preview */}
                  <div className="p-5">
                    {/* Status card */}
                    <div className="mb-5 overflow-hidden rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                            <span className="text-xs font-medium text-green-700">
                              Checked In
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-green-800">
                            7:45 AM
                          </p>
                          <p className="text-xs text-green-600">
                            Mathematics - Room 101
                          </p>
                        </div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-500/30">
                          <MapPin className="h-7 w-7" />
                        </div>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="mb-5 grid grid-cols-2 gap-3">
                      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <QrCode className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium">Scan QR</span>
                      </div>
                      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium">My History</span>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div>
                      <p className="mb-3 text-sm font-semibold">
                        {"Today's Schedule"}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-xl bg-primary/5 p-3">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-sm font-medium">
                              Mathematics
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            8:00 - 9:00
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-muted/50 p-3">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                            <span className="text-sm font-medium">Science</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            9:00 - 10:00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -left-8 top-1/4 animate-bounce rounded-2xl border border-border bg-card p-4 shadow-xl"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-sm font-semibold">Auto Check-in</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-8 bottom-1/3 animate-bounce rounded-2xl border border-border bg-card p-4 shadow-xl"
                style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <QrCode className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Scan</p>
                    <p className="text-sm font-semibold">QR Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
