import Layout from "../components/Layout";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import StatusBadge from "../components/StatusBadge";
export default function Transactions() {
  const customerId = typeof window !== "undefined" ? localStorage.getItem("customerId") : null;
  const { data } = useSWR(customerId ? `/api/transactions/${customerId}` : null, fetcher);
  return (
    <Layout title="Transactions">
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead><tr><th className="text-left">Date</th><th className="text-left">Amount</th><th className="text-left">Currency</th><th className="text-left">Status</th></tr></thead>
          <tbody>
            {(data||[]).map(tx => (
              <tr key={tx.id} className="border-t">
                <td className="py-2">{new Date(tx.createdAt).toLocaleString()}</td>
                <td className="py-2">${tx.amount.toFixed(2)}</td>
                <td className="py-2 uppercase">{tx.currency}</td>
                <td className="py-2"><StatusBadge status={tx.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
