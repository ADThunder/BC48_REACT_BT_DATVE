const initialState = {
    danhSachGheDangDat : [
        // {soGhe : "A1", gia : 1000}
    ]

}

export const datVeReducer = (state = initialState, aciton) => {
    console.log(aciton)
    switch (aciton.type) {
        case "DAT_GHE": {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === aciton.payload.soGhe)
            if(index !== -1) {
                //todo : khi người dùng click vô mà nó có trong mảng => xoá đi
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                //todo : khi người dùng click vô mà nó có trong mảng thì push vào
                danhSachGheDangDatUpdate.push(aciton.payload)
            }
            // console.log(index)
            // console.log(danhSachGheDangDatUpdate)
            //todo : cập nhật lại state để render lại giao diện
            return {...state, danhSachGheDangDat :danhSachGheDangDatUpdate}
        }
        case "HUY_GHE" : {
            let danhSachGheDangDatUpdate = state.danhSachGheDangDat.filter(gheDangDat => gheDangDat.soGhe !== aciton.payload) 
            return {...state, danhSachGheDangDat : danhSachGheDangDatUpdate}
        }    
        default:
            return state
    }

}