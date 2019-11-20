import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar" style={{ background: "#3298dc" }}>
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <h1 className="title is-1" style={{ color: "#FF9C1A" }}>
                <i class="fas fa-motorcycle"></i>BikeShare
              </h1>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="tabs is-right">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/post">Post</Link>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Team</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
                <span class="navbar-item">
                  <a
                    class="button is-white is-outlined"
                    href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
                  >
                    <span>
                      <i class="far fa-address-book"></i>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
