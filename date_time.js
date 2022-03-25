//DATE TIME
console.log("DATE TIME MINUTES SECONDS HOURS ");
const date = new Date();
console.log(date);
console.log("Today Day =>" + date.getDate());
console.log("TodayMonth =>" + date.getMonth());
console.log("Todayear =>" + date.getYear());
console.log("Today seconds =>" + date.getSeconds());
console.log("Today minutes =>" + date.getMinutes());
console.log("Today Hours =>" + date.getHours());

//SPLICE
Array123=["A","B","C","D","E"]
a=Array123.splice(1,4)
console.log(a);

const Fruit=["Banana", "Orange", "Apple", "Mango"];
Fruit.splice(2,1,"Lemon", "kiwi");
console.log(Fruit)

//SLICE
Array=["khubaib","hassan","taha","wahab","aqib"]
Name=Array.slice(1,4)
console.log(Name)

//SETTIMEOUT
function one(){
    console.log("khubaib")
}
function two(){
    setTimeout(function(){
        console.log("taha")
    },2000)
}
function three(){
    console.log("asad")
}
one()
two()
three()