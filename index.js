// 1-masala

// let a=+prompt("Son kiriting");
// if(a>0){
//     a++;
// }
// console.log(a);

// 2-masala

// let a=+prompt("Ixtiyoriy son kiriting")
// if(a>0){
//     a++;
// }else{
//     a-=2;
// }
// console.log(a);

// 3-masala

// let a=+prompt("Son kiriting");
// if(a>0){
//     a++;
// }
// else if(a<0){
//     a-=2;
// } else{
//     a=10;
// }
// console.log(a);

// 4-masala

// let a=+prompt("1-sonni kiriting");
// let b=+prompt("2-sonni kiriting");
// let c=+prompt("3-sonni kiriting");
// let sum=0;
// if(a>0){
//     sum++;
// }else if(b>0){
//     sum++;
// } else if(c>0){
//     sum++;
// }
// console.log(sum);

// 5-masala

// let a = +prompt("1-sonni kiriting"),
//   b = +prompt("2-sonni kiriting"),
//   c = +prompt("3-sonni kiriting"),
//   musbatCount = null,
//   manfiyCount = null;
// if (a > 0) {
//   musbatCount++;
// } else if (b > 0) {
//   musbatCount++;
// } else if (c > 0) {
//   musbatCount++;
// } else if (a < 0) {
//   manfiyCount++;
// } else if (b < 0) {
//   musbatCount++;
// } else if (c < 0) {
//   musbatCount++;
// }

// console.log("Musbat sonlar " + musbatCount + " ta");
// console.log("Manfiy sonlar " + manfiyCount + " ta");

// 6-masala

// let a = +prompt("1-sonni kiriting"),
//   b = +prompt("2-sonni kiriting");
// if (a > b) {
//   console.log("1-son katta -> "+a);
// } else {
//   console.log("2-son katta -> "+ b);
// }

// 7-masala

// let a = +prompt("1-sonni kiriting"),
//   b = +prompt("2-sonni kiriting");
// if (a > b) {
//   console.log("1-son katta");
// } else {
//   console.log("2-son katta");
// }

// 8-masala

// let a = +prompt("1-sonni kiriting"),
//   b = +prompt("2-sonni kiriting"),
//     kattaSon=null,
//     kichikSon=null;
// if (a > b) {
//   kattaSon=a;
//   kichikSon=b;
// } else {
//     kattaSon=b;
//     kichikSon=a;
// }
// console.log(kattaSon);
// console.log(kichikSon);

// 9-masala

// let a = +prompt("A-sonni kiriting"),
//   b = +prompt("B-sonni kiriting A sondan kichik bo'lsin!");

//   a=a*(-1);
//   b=b*(-1);

//   console.log("A soni -" +a);
//   console.log("B soni -" +b);



// 10-masala
// let a = +prompt("A-sonni kiriting"),
//   b = +prompt("B-sonni kiriting A sondan kichik bo'lsin!");
// if(a!=b){
//     a=a+b;
//     b=a+b;
// }else{
//     a=0;
//     b=0;
// }
// console.log("A = "+a);
// console.log("B = "+b);


// 11-masala

// let a = +prompt("A-sonni kiriting"),
//   b = +prompt("B-sonni kiriting A sondan kichik bo'lsin!");
// if(a!=b){
//    if(a>b){
//     a=a;
//     b=a;
//    }else{
//     b=b;
//     a=b;    
//    }
// }else{
//     a=0;
//     b=0;
// }
// console.log("A = "+a);
// console.log("B = "+b);


// 13-masala

let a=+prompt("1-sonni kiriting"),
    b=+prompt("2-sonni kiriting"),
    c=+prompt("3-sonni kiriting");
if(a>b & b>c){
    console.log(a);
} else if(b>a & a>c){
    console.log(b);
}else{
    console.log(c);
}


