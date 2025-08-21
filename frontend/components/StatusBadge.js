export default function StatusBadge({ status }) {
  const s = (status || "").toLowerCase();
  const cls = s.includes("success") || s.includes("processed")
    ? "badge badge-success"
    : s.includes("pending") || s.includes("awaiting") || s.includes("received")
    ? "badge badge-pending"
    : "badge badge-failed";
  return <span className={cls}>{status}</span>;
}
