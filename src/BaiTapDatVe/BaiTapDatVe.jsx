import React, { Component } from 'react';
import "./BaiTapDatVe.css";
import ThongTinGhe from './ThongTinGhe';
import danhSachGheData from "./danhSachGhe.json"
import HangGhe from './HangGhe';

export default class BaiTapDatVe extends Component {



    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>

        })

    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: "cover" }}>
                <div style={{ backgroundColor: "rgb(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-8 text-center ">
                                <h2 style={{paddingRight:"160px"}} className='display-4 text-warning'>Bài tập đặt vé</h2>
                                <div className='mt-3  text-light' style={{fontSize:"25px"}}>
                                    <h3 style={{paddingRight:"160px"}}>Màn hình</h3>
                                    </div>
                                <div className='d-flex flex-column justify-content-center mt-2'>
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className="col-4 ">
                                <h2 className='text-light text-center'>Danh sách ghế bạn chọn</h2>
                                <ThongTinGhe/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
