// code blockに書くこと
const y = 200 // tpするときのyの高さ
const xRange = [-200,200] // tpするときのxの範囲。0個目<1個目の順の関係にしてください
const zRange = [-200,200] // 同じくzの範囲
const x = Math.random() * (xRange[1] - xRange[0]) + xRange[0] // xを求める
const z = Math.random() * (zRange[1] - zRange[0]) + zRange[0] // zを求める
api.setPosition(myId,x,y,z) // 移動させる
