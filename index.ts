import inquirer from "inquirer"
import PromptSync from "prompt-sync";
import promptsyn from "prompt-sync"
const prompt = PromptSync()
// homework: switch case or enum ki mila k aik example bna do
// today topic is loops:
//====== enum:=====
// ======loops:=========
// ======= enum======== //enum is only used in typescript; ye javascript ma nhi hoti
// enum dosri language ma zyada istamal hoti h
// enum k andar hum index nmbr change kr skty hn but arry ma nhi kr skty
enum Color{
    red,
    yellow,
    greenlet
}
let traficlight: Color = Color.red; //is ma value print nhi hoti /issy index nmbr print hota h
//====== first method:=====
// is sy srf index value 
console.log(traficlight);
// agr hum ny value print krwani h to index nmbr likhna pry ga:
// 1:first method:
// is sy srf index value print ho gi
console.log(Color.greenlet); // its output is 2
// 2:second method: is method ma value [] square bracket ma likhi jy gi nmbers ma
// is sy  value print ho gi
console.log(Color[1]); // ooutput is yellow
// 3:third method: is ma bhi value [] square bracket ma hi likhi jy gi is ma hum string dyn gy
// is sy srf index value print ho gi
console.log(Color["yellow"]); //output is 1

enum color{
    red= 8, //enum ma hum index number change kr skty hn //ab is ma index nmbr 8 sy shoro ho ga
    yellow,
    greenlet
}
enum num1{
    red, //iska index 0 sy hi shoro hoga // jis index sy value change kryn gy wahan sy index nmbr usi value sy change ho ga
    yellow= 3, //lkin iska index nmbr 3 sy shoro ho ga /jhan sy hum index number change kryn gy us k baad ki index nmbr bhi us sy agy use hon gy
    greenlet
}
const enum coolor{
    red,
    yellow,
    greenlet
}

// console.log(coolor[1]); // agr hum const use krty hn to us ma hum ye wala method use nhi kr skty

// ======loops:=====// loops baar baar repeat krny kly use hoti h
//====== while loop ======
//== 1: while //=== 2: do-while
//===== while loop==// syntax:// while(){}
// example1:
// let i=0; // starting loop: is ma loop ( ) round bracket sy bahar loop start hota h
// while(i<8); // condition: in round brackets
// {
//     console.log(`hye zakia`);
//     i++ //incriment in the {}curley bracket
// }
// example2:
// let j=0; // starting loop: is ma loop ( ) round bracket sy bahar loop start hota h
// while(j<=8); // condition: in round brackets
// {
//     if(j**2 === 0)
//     console.log(`printing number is ${j}`);
//     i++ //incriment in the {}curley bracket
// }
 //=== 2: do-while: // syntax: do{}while(); /// ye loop aik dafa lazmi print hota h agr condition false hi q na ho
 let i = 0;
do{
    console.log(`hye, how are you?`);
    console.log(`what are you doing?`);
    i++ //infinity loop sy bchny kli ye loop di jati h ///agr ye nhi dyn gy to hmara loop chalta hi jy ga
}
while(i<=4);
// ====== for loop:========
//1:==for //== 2: for-of //=== 3: for-in /// === 4: for-each===
///=== for loop== syntex:// for(let i=0; i<=7; i++){console.log(`hello world)}
// 1:starting loop: first starting loop
// 2:conditin: khan tak print ho ga ya 
// 3: increment:
//==example1:
// for(let i= 0; true; i++) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log("how are you?" );
// break;
// }
// === example2:
// for(let i= 2; i<21; i=i+2) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(i );

// }
// === example 3:
// for(let i= 5; i<=10; i++) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );

// }
// ==example 4:
// for(let i= 0; i<55; i--) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );

// }
// == example 5:
// for(let i= 10; i>=0; i--) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );}
// for(let i= 10; i>=0; i--) //yhan p samicolon use ho ga saperate krney kly
//     {
// console.log(`${i} hello zakia` );

// }
// ==example 6:
let fruits:string[] =[ "apple","banana","peach"];
for(let i= 0; i<3; i++) //yhan p samicolon use ho ga saperate krney kly
    {


console.log(fruits[i]);
    }
    // == example 7:
    // agr apko array ki lenght nhi pta to phr uskly hum kia kryn gy
    //====== fruit.lenght use kryn gy=====
    let fruit:string[] =[ "apple","banana","peach" ,"amroad"];
for(let i= 0; i<fruit.length; i++) //yhan p samicolon use ho ga saperate krney kly
    {


console.log(fruit[i]);
    }
    // == example8:
    let car:string[] =[ "car","mehran","civic" ,"alto","toyota"];
for(let i= 0; i<car.length; i++) //yhan p samicolon use ho ga saperate krney kly
    {


console.log(car[i]);

    }
    // === example#9:
//     for(let i:number= 0; i<=fruit.length; i++); //yhan p samicolon use ho ga saperate krney kly
//     {

 
// console.log(fruit[i]);
//     }
//  ==== table creation code ====
for(let i = 1; i<=10; i++){
console.log(`4 x ${i} = ${i*4}`)
}
/////
for(let i = 1; i<=10; i++){
    console.log(`5 x ${i} = ${i*5}`)
    }
    ////
    for(let i = 1; i<=10; i++){
        console.log(`32 x ${i} = ${i*32}`)
        }
// ==== even && odd number nikalny kly =====
for(let i = 0; i<=100; i++){
if(i%2 === 0){
    console.log(`even number ${i}`);
}
else{console.log(`odd number ${i}`)}
}
//*****sum of n numbers******* *// 
// let sum = 0;
// let input = Number(prompt(`enter how many first n number you want to add: `));
// for(let i=1; i<=input; i++){
//     sum = sum+i;
//     console.log(sum)}

    // =====count vowels of a string ======
    let inputstring = prompt(`enter any string: `);
let inputlength = inputstring.length;
let vowels = 'aeiou';
let vowelscount =0;
// ===== array or string methods==== 
//1: =====array.includes() 
// 2: ===== array.indexof()
//1: =====array.includes()====// includes method is used in string and arrays====include hmyn ye bty ga agr wo us k under ho ga to hmyn true dy dy ga such as jo string hum dyn gy agr us ma vowel h to true output ho gi other wise false

// console.log(vowels.includes('a')); // its output is true //is sy srf aik lafaz ko chek kery ga
for(let i = 0; i<inputlength; i++){
    let letters = inputstring[i]; //letters sy sary letters ko check kr k bty ga kh vowels hn ya nhi
    
   if(vowels.includes(letters)){
    console.log(`it is a vowele :${letters}`)
   }
   
   else{
    console.log(`it is not a vowele :${letters}`)
   }
   vowelscount++ //vowels count krney kly
}
console.log(vowelscount);
// 2: ===== array.indexof() ===== //indexof method bhi string or array dono kly istamal hota h ////ye element k index ko check krny kly use hota h
let myname = 'zakia';
let veg = ['aloo', 'gobhi', 'matar']
console.log(veg.indexOf('apple'));
for(let i=0; i<3;i++){
    console.log(veg[i]);
}
console.log(myname.indexOf('k'));