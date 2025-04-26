
console.log("no para & return type");
function greet(){
    console.log("Hlo this is a normal function")
}
greet()

console.log("paramatrized & no rturn");
function add(a,b){
    console.log(a+b);
    
}
add(10,2)

console.log("no prara & return");
function div(){
    console.log("inside fun")
    let a=10
    let b=2
    return a/b

}
let res=div()
console.log(res);

console.log(div());

//paramtrized  & return type

console.log("paramtrized & return type");
function pow(a,b){
    return Math.pow(a,b)
}
console.log(pow(2,3));

console.log("Anonymas fun"); 
let fn=function(name){
    console.log(`hlo ${name}`);
    console.log(`hlo `+name);
}
fn('ajay')
console.log('arrow function');  


let sqroot=(a)=>{
return Math.sqrt(a);
}
console.log(sqroot(9));

console.log("Implicit return");
let sq=(a)=>a*a
console.log(sq(3))

console.log("call back fun after 3 sec");
let fun=()=>{
console.log("hlo"+name);
}
//setTimeout(fun,3000,'abc')//3 sec
let stop=setInterval(fun,1000,'ajay')
clearInterval(stop)

let d=new Date()//date obj
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getTime());

d.setFullYear(2025,5,24)



                

