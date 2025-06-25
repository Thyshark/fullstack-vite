// pages/ApiData.jsx
import { useEffect, useState } from "react";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter((post) => post.title.includes(query));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      <input
        className="border p-2 mb-4"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading posts</p>}
      <ul className="space-y-2">
        {filtered.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 border rounded hover:shadow">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
