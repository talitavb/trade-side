export default function Card({ children, className = '', ...props }) {
  return (
    <div 
      className={`bg-off-white border-4 border-black p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
