export default function Input({ className = '', ...props }) {
  return (
    <input 
      className={`bg-pastelGreen border-4 border-black text-black px-4 py-2 w-full font-mono text-xl ${className}`}
      {...props}
    />
  );
}
