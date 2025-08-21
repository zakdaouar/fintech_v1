export default function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title && <div className="text-lg font-semibold mb-3">{title}</div>}
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
