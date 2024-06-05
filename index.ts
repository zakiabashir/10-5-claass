import inquirer from "inquirer"
// homework: switch case or enum ki mila k aik example bna do
// today topic is loops:
// enum:
// loops:
// enum is only used in typescript; ye javascript ma nhi hoti
// enum dosri language ma zyada istamal hoti h
// enum k andar hum index nmbr change kr skty hn but arry ma nhi kr skty
enum Color{
    red,
    yellow,
    greenlet
}
let traficlight: Color = Color.red; //is ma value print nhi hoti /issy index nmbr print hota h
// first method:
// is sy srf index value 
console.log(traficlight);
// agr hum ny value print krwani h to index nmbr likhna pry ga:
// 1:first method:
// is sy srf index value print ho gi
console.log(Color.greenlet);
// 2:second method:
// is sy  value print ho gi
console.log(Color[1]);
// 3:third method:
// is sy srf index value print ho gi
console.log(Color["yellow"]);

enum color{
    red= 8, //enum ma hum index number change kr skty hn
    yellow,
    greenlet
}
enum num1{
    red, //iska index 0 sy hi shoro hoga
    yellow= 3, //lkin iska index nmbr 3 sy shoro ho ga /jhan sy hum index number change kryn gy us k baad ki index nmbr bhi us sy agy use hon gy
    greenlet
}
const enum coolor{
    red,
    yellow,
    greenlet
}

// console.log(coolor[1]); // agr hum const use krty hn to us ma hum ye wala method use nhi kr skty

// loops: loops baar repeat krny kly use hoti h
// for loop:
// 1:starting loop: first starting loop
// 2:conditin: khan tak print ho ga ya 
// 3: increment:
// for(let i= 0; true; i++) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log("how are you?" );
// break;
// }
// for(let i= 2; i<21; i=i+2) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(i );

// }
// for(let i= 5; i<=10; i++) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );

// }
// for(let i= 0; i<55; i--) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );

// }
// for(let i= 10; i>=0; i--) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );}
// for(let i= 10; i>=0; i--) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );

// }
let fruits:string[] =[ "apple","banana","peach"];
for(let i= 0; i<3; i++) //yhan p samicolon use ho ga saperate krney kly
    {


console.log(fruits[i]);
    }
    // agr apko array ki lenght nhi pta to phr uskly hum kia kryn gy
    // fruit.lenght use kryn gy
    let fruit:string[] =[ "apple","banana","peach" ,"amroad"];
for(let i= 0; i<fruit.length; i++) //yhan p samicolon use ho ga saperate krney kly
    {


console.log(fruit[i]);
    }
    let car:string[] =[ "car","mehran","civic" ,"alto","toyota"];
for(let i= 0; i<car.length; i++) //yhan p samicolon use ho ga saperate krney kly
    {


console.log(car[i]);

    }
    for(let i:number= 0; i<=fruit.length; i++); //yhan p samicolon use ho ga saperate krney kly
    {

 
console.log(fruit[i]);
    }