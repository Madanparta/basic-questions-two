// 1.SUM,DIFF, PRODUCT, QUOTIENT AND MODULUS.
// ANSWER.
// let mathsOperater =(num1,num2,symbles)=>{
//     if(symbles == '+'){
//         return num2+num1;
//     }else if(symbles =='-'){
//         return num2-num1;
//     }else if(symbles == '*'){
//         return num2*num1;
//     }else if(symbles =='/' ){
//         return num2/num1
//     }else if(symbles == '%'){
//         return num2%num1;
//     }else{
//         return`${symbles} no matching this sybles.`;
//     }
// }
// console.log(mathsOperater(20,10,'%'))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.SQUARE OF NUMBERS.
// ANSWERS.
// function squareOfNumb (num){
//     let square = Math.pow(num,2)
//     return square;
// }
// console.log(squareOfNumb(4))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.PRINT A INTEGER PART OF..
// ANSWER.

// function intDivi (num,nu1){
//     let rem = nu1%num;
//     return rem
// }
// console.log(intDivi(2,3))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4.POWERS..
// ANSWER.

// let pow =(num,pow)=>{
//     let power = Math.pow(num, pow)
//     return power
// }
// console.log(pow(2,5))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5.PRINT DICIMAL PART OF NUMBERS.
// ANSWER.

// function decimalNum (num,num2){
//     let deci = num2/num;
//     let remaingDeci = deci-Math.floor(deci);
//     return remaingDeci
// }
// console.log(decimalNum(2,3))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 6.A,B,C,D,E AVERAGES.
// ANSWER,
// function average (a,b,c,d,e){
//     let avr = (a+b+c+d+e)/5;
//     return avr
// }
// console.log(average(29,48,89,98,88))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7.PROFITS.
// ANSWERS.

// function profit (sell,product){
//     let profit = sell-product
//     return profit
// }
// console.log(profit(120,110))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8.PRINT LAST DIGIT NUMBERS.
// ANSWERS.

// function lastDigits (number){
//     let lastDigits = number%10
//     return lastDigits
// }
// console.log(lastDigits(1543))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// `0.PRINT FIRST AND LAST DIGITS.
// ANSWERS.

// function firstLast (num){
//     if(num>99){
//         let first = Math.floor(num/100);
//         let last = num%10
//         return (first+" "+last)
//     }else{
//         let first = Math.floor(num/10);
//         let last = num%10
//         return (first+" "+last)
//     }
// }
// console.log(firstLast(12))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 10. PRITN LAST TWO DIGITS NUMBERS.
// ANSWERS.

// function lastTwoReverse (num){
//     let n = num;
//     let rem = 0;
//     while(n!=0){
//         rem =((rem*10)+( n%10));
//         n = Math.floor(n/10)
//     }
//     return rem
// }
// console.log(lastTwoReverse(234))