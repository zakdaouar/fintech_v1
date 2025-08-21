import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => { setAuthed(!!localStorage.getItem("token")); }, []);
  const logout = () => { localStorage.removeItem("token"); window.location.href = "/login"; };
  return (
    <nav className="bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-primary">Fintech</Link>
        <div className="flex items-center gap-4">
          {authed ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/accounts">Accounts</Link>
              <Link href="/transfer">Transfer</Link>
              <Link href="/transactions">Transactions</Link>
              <button className="btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
