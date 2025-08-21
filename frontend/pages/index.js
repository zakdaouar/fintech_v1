import Link from "next/link";
export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">Modern, Light, and Fast Payments</h1>
        <p className="text-gray-600 text-lg mb-8">Receive FIAT deposits, convert to stablecoins, and send crypto globally. Built on Bridge.</p>
        <div className="flex justify-center gap-4">
          <Link href="/signup" className="btn">Get Started</Link>
          <Link href="/login" className="btn bg-white text-primary border border-primary">Log in</Link>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card"><h3 className="font-semibold mb-2">Secure</h3><p>JWT auth & signed webhooks.</p></div>
          <div className="card"><h3 className="font-semibold mb-2">Compliant</h3><p>KYC/KYB onboarding flows.</p></div>
          <div className="card"><h3 className="font-semibold mb-2">Fast</h3><p>Real-time status via webhooks.</p></div>
        </div>
      </div>
    </div>
  );
}
