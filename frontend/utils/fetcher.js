export default async function fetcher(url, opts={}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE + url, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {})
    },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
