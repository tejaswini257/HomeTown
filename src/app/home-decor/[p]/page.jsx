export default async function CategoryPage({ params }) {
  const { p } = await params; // ✅ now it's awaited

  const displayName = p
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{displayName}</h1>
      <p>Showing products for {displayName}...</p>
    </div>
  );
}
