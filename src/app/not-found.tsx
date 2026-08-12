import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="page-shell simple-not-found">
        <h1>Page not found</h1>
        <p>The page you were looking for does not exist.</p>
        <Link href="/">Back to Creafex Lab</Link>
      </div>
    </main>
  );
}
