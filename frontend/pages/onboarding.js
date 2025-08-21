import Layout from "../components/Layout";
import { useState } from "react";
export default function Onboarding() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/customers/create-kyc-link", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ fullName, email })
    });
    if (!res.ok) return alert("Failed to create KYC link");
    const data = await res.json();
    alert("KYC link created. Share with customer: " + data.kyc.kyc_link);
    localStorage.setItem("customerBridgeId", data.kyc.customer_id || data.kyc.id);
    localStorage.setItem("customerId", data.customer?.id || ""); // if present
  };
  return (
    <Layout title="Onboard a Customer">
      <form onSubmit={submit} className="max-w-lg card space-y-4">
        <div><label className="label">Full Name</label><input className="input" value={fullName} onChange={e=>setFullName(e.target.value)} /></div>
        <div><label className="label">Email</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <button className="btn" type="submit">Create KYC Link</button>
      </form>
    </Layout>
  );
}
