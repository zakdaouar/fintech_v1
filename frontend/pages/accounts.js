import Layout from "../components/Layout";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
export default function Accounts() {
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { data } = useSWR(userId ? `/api/accounts/${userId}` : null, fetcher);
  return (
    <Layout title="FIAT Accounts">
      <div className="grid grid-cols-1 gap-4">
        {(data || []).map(c => (
          <div className="card" key={c.id}>
            <div className="flex items-center justify-between">
              <div><div className="font-semibold">{c.fullName}</div><div className="text-sm text-gray-500">{c.email}</div></div>
              <div className="text-sm text-gray-500">Status: {c.status}</div>
            </div>
            <div className="mt-4">
              <div className="text-gray-600">Virtual Accounts</div>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.vAccounts.map(v => (
                  <div className="border rounded-xl p-4" key={v.id}>
                    <div className="font-semibold uppercase">{v.currency}</div>
                    <div className="text-sm text-gray-600">{v.bankName}</div>
                    <div className="text-sm">Acct: {v.bankAccountNumber}</div>
                    <div className="text-sm">Routing: {v.bankRoutingNumber}</div>
                    <div className="text-sm">Status: {v.status}</div>
                  </div>
                ))}
                {c.vAccounts.length === 0 && <div className="text-sm text-gray-500">No virtual accounts yet.</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
