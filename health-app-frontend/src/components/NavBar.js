import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/result" style={styles.link}>Result</Link>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#4CAF50",
    padding: "10px",
    textAlign: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    fontSize: "18px",
  },
};

export default NavBar;
