export default function MetricCard({ title, value, className = '' }) {
  return (
    <div className={`bg-off-white border-4 border-black p-6 ${className}`}>
      <h3 className="text-black text-2xl font-bold mb-2">{title}</h3>
      <p className="text-black text-6xl font-black">{value}</p>
    </div>
  );
}
