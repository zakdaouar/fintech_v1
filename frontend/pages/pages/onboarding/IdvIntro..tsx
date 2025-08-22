import dynamic from "next/dynamic";
const Page = dynamic(() => import("@/pages/pages\onboarding\IdvIntro.").then(m => m.default ?? m), { ssr: false });
export default Page;