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
      <section class="container">
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
                  BikeShare hướng đến nhu cầu chia sẽ đường đi đã có kế hoạch sẳn dành cho những ai có nhu cầu di chuyển cùng.
                  Giao diện thân thiện, dễ dàng thao tác. Và khả năng an toàn cao vì BikeShare chỉ áp dụng cho các sinh viên.
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
                    Nhu cầu đi lại thường ngày đã trở thành một phần không thể thiếu với nhiều đối tượng, nhất là sinh viên. 
                    BikeShare mạng lại khả năng chia sẽ những chuyến đi, tăng thu nhập hoặc giảm chi phí đi lại cho sinh viên.
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
                    BikeShare hướng đến tính an toàn cũng như khả năng bảo mật cao cấp hơn.
                    Và trong tương lai sẽ áp dụng những công nghệ hiện đại, tiện ích cao và khả năng tương tác dễ dàng hơn với người dùng.
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
