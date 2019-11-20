import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <section class="main-content columns is-fullheight">
        <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
          <p class="menu-label is-hidden-touch">Navigation</p>
          <ul class="menu-list">
            <li>
              <Link to="/" href="#" class="">
                <span class="icon">
                  <i class="fa fa-home"></i>
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <a href="#" class="is-active">
                <span class="icon">
                  <i class="fa fa-table"></i>
                </span>{" "}
                Links
              </a>

              <a href="#" class="">
                <span class="icon">
                  <i class="fa fa-info"></i>
                </span>{" "}
                About
              </a>
            </li>
          </ul>
        </aside>

        <div class="container column is-10">
          <div class="section">
            <br />

            <div class="card is-hidden1">
              <div class="card-header">
                <p class="card-header-title">Header</p>
              </div>
              <div class="card-content">
                <div class="content">Content</div>
              </div>
            </div>
            <br />

            <br />
          </div>
        </div>
      </section>
    </div>
  );
}
