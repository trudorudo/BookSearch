import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Search Books
      </a>
      <a className="navbar-brand" href="/saved">
        My Library
      </a>

    </nav>
  );
}

export default Nav;
