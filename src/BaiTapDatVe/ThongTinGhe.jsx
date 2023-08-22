import React, { Component } from "react";
import { connect} from "react-redux";

class ThongTinGhe extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="mt-3">
          <button className="gheDuocChon"></button>{" "}
          <span style={{ fontSize: "30px" }} className="text-light">
            ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span style={{ fontSize: "30px" }} className="text-light">
            ghế đang đặt
          </span>
          <br />
          <button className="ghe ms-0"></button>{" "}
          <span style={{ fontSize: "30px" }} className="text-light">
            ghế chưa đặt
          </span>
        </div>

        <div>
          <div className="table-responsive">
            <table className="table border">
              <thead>
                <tr className="text-light" style={{fontSize: "30px"}}>
                  <th className="border-end">Số ghế</th>
                  <th>Giá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="text-light">
                  <td className="border-end">Số ghế</td>
                  <td>Giá</td>
                  <td></td>
                </tr>
                <tr className="text-light">
                  <td className="border-end">Số ghế</td>
                  <td>Giá</td>
                  <td></td>
                </tr> */}
                {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                  console.log(gheDangDat)
                  const {soGhe, gia} = gheDangDat
                  return <tr className="text-warning" key={index}>
                    <td className="border-end">{soGhe}</td>
                    <td className="border-end">{gia.toLocaleString()}</td>
                    <td>
                      <button onClick={() => {
                        this.props.huyGhe(soGhe)

                      }} className="btn btn-success">Huỷ</button>
                    </td>
                  </tr>
                })}
              </tbody>
              <tfoot>
                <tr className="text-danger">
                  <td></td>
                  <td>Tổng tiền</td>
                  <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat, index) => {
                    return tongTien += gheDangDat.gia;

                  },0).toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat : state.datVeReducer.danhSachGheDangDat,
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe : (payload) => {
      const action = {
        type : "HUY_GHE",
        payload
      }
      dispatch(action)
    }
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe)