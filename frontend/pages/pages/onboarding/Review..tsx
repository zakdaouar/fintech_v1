import dynamic from "next/dynamic";
const Page = dynamic(() => import("@/pages/pages\onboarding\Review.").then(m => m.default ?? m), { ssr: false });
export default Page;