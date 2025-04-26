//let name=prompt("Enter ur name")
//console.log(`Hello ${name}`)
//alert("This is alert")
//confirm("this is confirm??")

document.write('This is from js')
document.write('<h1>heading <br> from js</h1>')

document.body.style.backgroundColor='pink'

console.log("selectrs in js");


console.log("get elmnt by id");
let head=document.getElementById('h1')
console.log(head);   
head.style.color='red'

let h2=document.getElementById('h2')
console.log(h2);
h2.textContent='This is h2 from JS'

let h3=document.getElementById('h3')
console.log(h3);
h3.innerHTML='This h3 is from js</i>'


let heading=document.getElementsByClassName('head')
console.log(heading);
heading[1].style.color='blue'
  heading[0].style.color='yellow'
  for(let i=0; i<heading.length; i++){
  heading[i].style.backgroundColor='brown'
  }

  console.log('get elmnt by tag');
  let para=document.getElementsByTagName('p')
    console.log(para);
    para[0].style.color='white'
    para[1].style.color='green'

 for(let i=0; i<para.length; i++){
    para[i].style.textDecoration='underline'
}

console.log('query slectr');//id,clg,tag
let query=document.querySelector('#h_query')
console.log(query);
query.style.fontSize='70px'


let query1=document.querySelector('.h_query')
console.log(query1);
query1.style.backgroundColor='blue'




















