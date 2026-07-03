import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/login", title: "Login" },
    { path: "/logout", title: "Logout" },
    { path: "/user", title: "User" },
  ];

  return (
    <header className="site-header">
      <Link className="site-brand" to="/">
        <span className="site-brand-mark">R</span>
        <span>
          <strong>React Router</strong>
          <small>Practice layout</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {links.map(({ path, title }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `site-nav-link${isActive ? " is-active" : ""}`
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
