import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Page Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
