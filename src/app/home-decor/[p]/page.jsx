export default function DecorCategoryPage({ params }) {
  const { p } = params;

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
