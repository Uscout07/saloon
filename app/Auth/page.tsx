import { Suspense } from 'react';
import AuthForm from './AuthForm'; // Adjust path if needed

export default function AuthPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AuthForm />
    </Suspense>
  );
}
