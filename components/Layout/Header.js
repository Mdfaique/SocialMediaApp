import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <style jsx>{`
        .container span {
          cursor: pointer;
        }
      `}</style>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link href="/">
            <span className="navbar-brand">Mohd Faique</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <span className="nav-link active" aria-current="page">
                    Home
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about">
                  <span className="nav-link active" aria-current="page">
                    About
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/register">
                  <span className="nav-link active" aria-current="page">
                    Register
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/login">
                  <span className="nav-link active" aria-current="page">
                    Login
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
