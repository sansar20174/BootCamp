import { Link } from "react-router-dom";

const highlights = [
    {
        title: "Learn by route",
        text: "Jump between pages and see how the router updates the view without a full reload.",
    },
    {
        title: "Keep it organized",
        text: "Each page lives in its own component so the app stays easy to extend.",
    },
    {
        title: "Built for practice",
        text: "This starter is a clean base for experimenting with links, layouts, and nested routes.",
    },
];

const stats = [
    { value: "5", label: "routes in the demo" },
    { value: "1", label: "shared navigation bar" },
    { value: "0", label: "page refreshes needed" },
];

export default function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <p className="home-kicker">React Router practice space</p>
                <h1>Build pages that feel connected, fast, and easy to explore.</h1>
                <p className="home-intro">
                    This home page gives the app a clear starting point: a short intro,
                    quick stats, and direct links into the rest of the routes.
                </p>

                <div className="home-actions">
                    <Link className="home-button home-button-primary" to="/about">
                        Go to About
                    </Link>
                    <Link className="home-button home-button-secondary" to="/user">
                        View User Page
                    </Link>
                </div>
            </section>

            <section className="home-stats" aria-label="Project highlights">
                {stats.map((stat) => (
                    <article className="home-stat" key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </article>
                ))}
            </section>

            <section className="home-highlights">
                {highlights.map((highlight) => (
                    <article className="home-card" key={highlight.title}>
                        <h2>{highlight.title}</h2>
                        <p>{highlight.text}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
