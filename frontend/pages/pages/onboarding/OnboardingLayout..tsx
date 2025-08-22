import dynamic from "next/dynamic";
const Page = dynamic(() => import("@/pages/pages\onboarding\OnboardingLayout.").then(m => m.default ?? m), { ssr: false });
export default Page;