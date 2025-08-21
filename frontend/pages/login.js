import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE + "/api/auth/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) return alert("Login failed");
    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.user.id);
    window.location.href = "/dashboard";
  };
  return (
    <div className="max-w-md mx-auto mt-16 card">
      <h1 className="text-2xl font-semibold mb-4">Log in</h1>
      <form onSubmit={submit} className="space-y-4">
        <div><label className="label">Email</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><label className="label">Password</label><input type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <button className="btn w-full" type="submit">Log in</button>
      </form>
    </div>
  );
}
