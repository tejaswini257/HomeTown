import Link from "next/link";

export default function KitchenDiningPage() {
  const categories = [
    { name: "Cookware", slug: "cookware" },
    { name: "Dinnerware", slug: "dinnerware" },
    { name: "Storage & Containers", slug: "storage" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Kitchen & Dining Categories</h1>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/kitchen-dining/${cat.slug}`}
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
