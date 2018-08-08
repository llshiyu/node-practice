const circle = require('./circle');
let r = 5;
console.log(`半径为${r}的圆面积为：${circle.area(r)}，周长为：${circle.circumference(r)},,${require.main === module}`);
console.log(`dirname  ,${__dirname}, filename  ,${__filename}`)