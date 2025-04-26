 let btn=document.getElementById('btn')
 
 btn.onclick=()=>{
    alert('Button is clicked')
 }
 
 document.getElementById('dbtn').ondblclick=()=>{
    alert('btn duble clicked!!')
 }

 let input=document.getElementById('inp')
 input.onchange= function (){
    alert('input changed '+this.value)
    input.style.backgroundColor='red'
 }

 let form=document.getElementById('form')
  form.onsubmit= function(){

    alert('form submitted!!!')
  }

