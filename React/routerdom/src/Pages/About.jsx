import { Link } from "react-router-dom";

const principles = ["Small components", "Clear routes", "Reusable layout"];

export default function About() {
    return (
        <main className="page-shell">
            <section className="page-hero">
                <p className="page-kicker">About this project</p>
                <h1>Route-based practice with a cleaner visual system.</h1>
                <p className="page-copy">
                    This app is built as a React Router learning space. Each screen keeps a
                    focused message, and the navigation stays consistent while the content
                    changes.
                </p>
            </section>

            <section className="page-grid">
                {principles.map((principle) => (
                    <article className="page-card" key={principle}>
                        <h2>{principle}</h2>
                        <p>
                            The layout keeps the information simple and easy to scan so the
                            routing behavior stays front and center.
                        </p>
                    </article>
                ))}
            </section>

            <Link className="page-link" to="/">
                Back to Home
            </Link>
        </main>
    );
}