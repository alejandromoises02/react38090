import React from "react";
import logo from "../../assets/logo.png";
import CartWidget from "../Cartidget/CartWidget";
import { Nav } from "./Nav/Nav";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  const categories = [
    { id: 0, title: "electronics", route: "/category/electronics" },
    { id: 1, title: "jewelery", route: "/category/jewelery" },
    { id: 2, title: "men's clothing", route: "/category/men's clothing" },
    { id: 3, title: "women's clothing", route: "/category/women's clothing" },
  ];

  return (
    <header style={styles.container}>
      <div style={styles.branchContainer}>
        <Link to="/">
          <img style={styles.imagen} src={logo} alt="logo" />
        </Link>
        <h1>Bienvenido {name}</h1>
      </div>
      <div style={styles.links}>
        <Nav categories={categories} />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  branchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  links: {
    display: "flex",
  },
  imagen: {
    width: "30%",
  },
};

export default Navbar;
