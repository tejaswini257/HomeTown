import Link from "next/link";

export default function FurniturePage() {
  const categories = [
    { name: "Sofas & Seating", slug: "sofas" },
    { name: "Tables & Desks", slug: "tables" },
    { name: "Beds & Wardrobes", slug: "beds" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Furniture Categories</h1>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/furniture/${cat.slug}`}
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
