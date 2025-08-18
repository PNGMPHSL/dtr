import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Suspense } from 'react';
import { Sidebar } from './sidebar';
import { SidebarFallback } from '@/components/ui/loading-states';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {

    return (
      <>
        <SignedIn>
          <div className="min-h-screen w-full bg-background">
            <Suspense fallback={<SidebarFallback />}>
              <Sidebar />
            </Suspense>
            <div className="lg:pl-64">
              <main className="py-6 px-4 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          {children}
        </SignedOut>
      </>
  );
}