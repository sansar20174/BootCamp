import { Link } from "react-router-dom";

export default function Logout() {
    return (
        <main className="page-shell page-shell-narrow">
            <section className="page-hero page-hero-center">
                <p className="page-kicker">Logout</p>
                <h1>You have left the active session view.</h1>
                <p className="page-copy">
                    Use this page as the final step in a sign-out flow, or extend it later
                    with actual session cleanup logic.
                </p>
            </section>

            <section className="status-card">
                <span className="status-badge">Session ended</span>
                <p>
                    The interface is ready for a confirmation step, an undo action, or a
                    redirect back to the landing page.
                </p>
            </section>

            <Link className="page-link" to="/">
                Go back home
            </Link>
        </main>
    );
}