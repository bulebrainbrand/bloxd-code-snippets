// code blockに書いてください
const toPositions = [  // [x,y,z]の配列です。この中からランダムに選ばれます
  [1,1,1],
  [2,2,2],
  [3,3,3]
] 

const posIndex = Math.floor(Math.random() * toPositions.length) // indexを決定します

api.setPosition(myId,toPositions[posIndex]) // 移動させる
