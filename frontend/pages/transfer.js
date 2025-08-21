import Layout from "../components/Layout";
import { useState } from "react";
export default function Transfer() {
  const [bridgeCustomerId, setBridgeCustomerId] = useState("");
  const [amount, setAmount] = useState("");
  const [toAddress, setToAddress] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      bridgeCustomerId,
      amount: parseFloat(amount),
      source: { payment_rail: "wire", currency: "usd" },
      destination: { payment_rail: "ethereum", currency: "usdc", to_address: toAddress }
    };
    const token = localStorage.getItem("token");
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/transfers", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload)
    });
    if (!res.ok) return alert("Transfer failed");
    const data = await res.json();
    alert("Transfer created: " + data.transfer.id);
  };
  return (
    <Layout title="Create Transfer">
      <form onSubmit={submit} className="max-w-lg card space-y-4">
        <div><label className="label">Bridge Customer ID</label><input className="input" value={bridgeCustomerId} onChange={e=>setBridgeCustomerId(e.target.value)} /></div>
        <div><label className="label">Amount (USD)</label><input className="input" value={amount} onChange={e=>setAmount(e.target.value)} /></div>
        <div><label className="label">Destination ETH Address</label><input className="input" value={toAddress} onChange={e=>setToAddress(e.target.value)} /></div>
        <button className="btn" type="submit">Submit Transfer</button>
      </form>
    </Layout>
  );
}
