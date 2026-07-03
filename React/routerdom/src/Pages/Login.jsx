import { Link } from "react-router-dom";

export default function Login() {
    return (
        <main className="page-shell page-shell-narrow">
            <section className="page-hero page-hero-center">
                <p className="page-kicker">Login</p>
                <h1>Sign in to continue the route demo.</h1>
                <p className="page-copy">
                    This is a visual-only login screen for practice. It is styled like a
                    real auth page so you can extend it later with state or form handling.
                </p>
            </section>

            <section className="auth-card">
                <label>
                    Email
                    <input type="email" placeholder="you@example.com" />
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Enter your password" />
                </label>
                <button type="button">Continue</button>
            </section>

            <Link className="page-link" to="/">
                Return home
            </Link>
        </main>
    );
}