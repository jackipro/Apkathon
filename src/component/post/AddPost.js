import React from "react";

const AddPost = ({
  quangduongdi,
  quangduongden,
  ngaythang,
  thoigian,
  thongtinkhac,
  onChangeQuangDuongDi,
  onChangeQuangDuongDen,
  onChangeNgayThang,
  onChangeThoiGian,
  onChangeThongTinKhac,
  onSubmit
}) => {
  return (
    <div className="addpost">
      <div class="field is-horizontal"></div>
      <form onSubmit={onSubmit}>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Địa điểm bắt đầu đi</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  value={quangduongdi}
                  onChange={onChangeQuangDuongDi}
                  class="input"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Địa điểm kết thúc</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  value={quangduongden}
                  onChange={onChangeQuangDuongDen}
                  class="input"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Ngày Tháng Di Chuyển </label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  value={ngaythang}
                  onChange={onChangeNgayThang}
                  class="input"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Thời Gian</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  onChange={onChangeThoiGian}
                  value={thoigian}
                  class="input"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Thông tin khác</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  value={thongtinkhac}
                  onChange={onChangeThongTinKhac}
                  class="textarea"
                  placeholder="Explain how we can help you"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button type="submit" class="button is-primary">
                  Đăng Bài
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddPost;
