import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/tasks" className="mr-4">
          Tasks
        </Link>
        <Link to="/api">API</Link>
      </div>
      <button onClick={toggleTheme} className="bg-gray-700 px-2 py-1 rounded">
        Toggle {theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
}
