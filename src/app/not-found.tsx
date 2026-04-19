import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notFoundShell">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="muted">The page you’re looking for doesn’t exist or may have moved.</p>
        <Link href="/" className="button buttonPrimary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
