import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="page-shell page-shell-narrow">
            <section className="page-hero page-hero-center error-hero">
                <p className="page-kicker">404</p>
                <h1>That route does not exist.</h1>
                <p className="page-copy">
                    Use the navigation to return to a valid page and continue exploring
                    the demo.
                </p>
            </section>

            <Link className="page-link" to="/">
                Back to Home
            </Link>
        </main>
    );
}