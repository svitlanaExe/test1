let column = ['123','1238abc', '0.15','3.14ivan', 'infinity','99999999999999999999'];
//creating an array for each function and calculating them
let countParseInt = ["parseInt", ];
column.map((item) => {

    countParseInt.push(parseInt(item));
});

let countParseFloat = ["parseFloat", ];
column.map((item) => {
    countParseFloat.push(parseFloat(item));
});

let countNumber = ["Number", ];
column.map((item) => {

    countNumber.push(Number(item));
});
let countPlus = ['+'];
column.map((item) => {

    countPlus.push(+item);
});
let countBinOr = ['| 0'];
column.map((item) => {

    countBinOr.push(item | 0);
});

//adding all calculated arrays to a new one
const countMain = [ countParseInt, countParseFloat, countNumber, countPlus, countBinOr];
console.table(countMain);
