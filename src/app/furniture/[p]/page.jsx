export default function CategoryPage({ params }) {
  const { p } = params;

  // You can replace this with product fetching logic later
  const displayName = p
    .replace("-", " ") // replace dashes with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize words

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{displayName}</h1>
      <p>Showing products for {displayName}...</p>
    </div>
  );
}
