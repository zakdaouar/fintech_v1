import dynamic from "next/dynamic";
const Page = dynamic(() => import("@/pages/pages\onboarding\ConfirmEmail.").then(m => m.default ?? m), { ssr: false });
export default Page;