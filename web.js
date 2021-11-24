 
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
 
 close.addEventListener('click' ,()=>{
          kill  .style.display='none';
 })     

