import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <SignUp signInUrl="/sign-in" forceRedirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
}