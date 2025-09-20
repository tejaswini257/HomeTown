import Link from "next/link";

export default function HomeDecorPage() {
  const categories = [
    { name: "Lighting", slug: "lighting" },
    { name: "Wall Art", slug: "wall-art" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Decor Categories</h1>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/home-decor/${cat.slug}`}
              className="text-blue-600 hover:underline"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
