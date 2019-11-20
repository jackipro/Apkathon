import React from "react";
export default function Home() {
  return (
    <div>
      <section class="hero is-info is-medium is-bold">
        <div class="hero-head"></div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 className="title showcase">
              Welcome to<span style={{ color: "#FF9C1A" }}> BikeShare</span>
            </h1>
          </div>
        </div>
      </section>
      <div class="box cta"></div>
      <section>
        <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fas fa-check-circle fa-3x"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Tiện Lợi</h4>
                  <p>
                    Purus semper eget duis at tellus at urna condimentum mattis.
                    Non blandit massa enim nec. Integer enim neque volutpat ac
                    tincidunt vitae semper quis. Accumsan tortor posuere ac ut
                    consequat semper viverra nam.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fas fa-user-check fa-3x"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Giới Thiệu</h4>
                  <p>
                    Ut venenatis tellus in metus vulputate. Amet consectetur
                    adipiscing elit pellentesque. Sed arcu non odio euismod
                    lacinia at quis risus. Faucibus turpis in eu mi bibendum
                    neque egestas cmonsu songue. Phasellus vestibulum lorem sed
                    risus.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fas fa-bullseye fa-3x"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4> Mục Tiêu </h4>
                  <p>
                    Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce
                    ut placerat orci nulla pellentesque dignissim enim. Libero
                    id faucibus nisl tincidunt eget nullam. Commodo viverra
                    maecenas accumsan lacus vel facilisis.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro column is-8 is-offset-2"></div>
      </section>
    </div>
  );
}
