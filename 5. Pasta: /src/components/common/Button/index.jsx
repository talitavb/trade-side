export default function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`bg-pastelGreen text-black text-xl font-bold py-3 px-8 border-4 border-black hover:bg-opacity-90 transition-colors duration-150 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
