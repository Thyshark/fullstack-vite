const variants = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-black",
  danger: "bg-red-500 text-white",
};

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`px-4 py-2 rounded ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
