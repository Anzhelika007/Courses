export default function NotFound({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
