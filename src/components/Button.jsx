export default function Button({ children, icon, className = '' }) {
  return (
    <button
      className={`flex items-center gap-2 border rounded-full px-6 py-2 text-sm font-medium hover:shadow-md transition ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
