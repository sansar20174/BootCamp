import { Link } from "react-router-dom";

export default function User() {
    return (
        <main className="page-shell">
            <section className="page-hero user-hero">
                <div>
                    <p className="page-kicker">User profile</p>
                    <h1>One page to show profile data, stats, and actions.</h1>
                    <p className="page-copy">
                        This layout makes the user screen feel more complete while still
                        staying lightweight and easy to replace with real data later.
                    </p>
                </div>

                <aside className="profile-card">
                    <span className="avatar">S</span>
                    <strong>Sansar</strong>
                    <span>Frontend learner</span>
                </aside>
            </section>

            <section className="page-grid user-stats">
                <article className="page-card">
                    <h2>Focus</h2>
                    <p>Routing, component structure, and page composition.</p>
                </article>
                <article className="page-card">
                    <h2>Status</h2>
                    <p>Building a reusable starter for small React experiments.</p>
                </article>
                <article className="page-card">
                    <h2>Next step</h2>
                    <p>Add real data, nested routes, or protected pages.</p>
                </article>
            </section>

            <Link className="page-link" to="/about">
                Learn more
            </Link>
        </main>
    );
}