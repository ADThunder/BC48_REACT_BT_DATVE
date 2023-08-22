import React, { Component } from "react";
import {connect} from "react-redux"

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      //todo : trạng thái ghế đã bị người khác đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      
      //todo : xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe) 
      if(indexGheDangDat !== -1 ) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe)
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">
        {hang.soGhe}

      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div style={{marginLeft:"30px"}}>
          {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    // console.log(this.props.hangGhe)
    // console.log(this.props)
    return (
      <div
        className="text-light text-start mt-1"
        style={{ fontSize: "30px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    danhSachGheDangDat : state.datVeReducer.danhSachGheDangDat,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe : (payload) => {
      const action = {
        type : "DAT_GHE",
        payload
      }
      dispatch(action)
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)


