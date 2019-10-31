

//mảng sắp xếp 1 tập các giá trị
var values = [];
for (var i = 0; i < 10; i++){
 values.push([
  2 ** i, //2^0 = 1
  2 * i ** 2, // 2* (2^0) = 0
  i ** 3

 ])
};
console.table(values)