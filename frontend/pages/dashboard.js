import Layout from "../components/Layout";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
export default function Dashboard() {
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { data } = useSWR(userId ? `/api/accounts/${userId}` : null, fetcher);
  const totalBalance = 0;
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card"><div className="text-gray-600">Total Balance</div><div className="text-3xl font-semibold">${totalBalance.toFixed(2)}</div></div>
        <div className="card"><div className="text-gray-600">Accounts</div><div className="text-3xl font-semibold">{data?.length || 0}</div></div>
        <div className="card"><div className="text-gray-600">Status</div><div className="text-3xl font-semibold">All Systems Go</div></div>
      </div>
    </Layout>
  );
}
