import Link from "next/link";

export default function HomeFurnishingPage() {
  const categories = [
    { name: "Curtains", slug: "curtains" },
    { name: "Cushions", slug: "cushions" },
    { name: "Bed Linen", slug: "bed-linen" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Furnishing Categories</h1>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/home-furnishing/${cat.slug}`}
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
