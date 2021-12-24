var mobclose=document.getElementById('mobclose');
var lopio=document.getElementById('lopio');
var lacklose=document.getElementById('lacklose'); 
 
mobclose.addEventListener('click',  ()=>{
        lopio.style.display='block';
        lopio.style.width='100%';
        lopio.style.transition='1s';
})
lacklose.addEventListener('click',()=>{
        lopio.style.display='none';
})
var tered=document.getElementById('tered');
var close=document.getElementById('close');
 

const bady=document.getElementById('bady');
const anoc=document.getElementById('anothercloser');
const fundwith=document.getElementById('fundwith');
fundwith.addEventListener('click',()=>{
      bady.style.display="block";
})
anoc.addEventListener('click',()=>{
           bady.style.display="none";
});