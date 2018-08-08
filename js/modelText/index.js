const Square = require('./square');
const mySquare = new Square(3);
console.log(`mySquare 面积是：${mySquare.area()},,${require.main === module}`);