function like(id){
  var element=document.getElementById('like'+id);
  element.classList.toggle('fas')
  element.classList.toggle('far')
  element.classList.toggle('red')
  element=document.getElementById('like'+id+'value')
  liked(id);
}
function comment(id){
  const element=document.getElementById('comment'+id);
  
}
function share(id){
  const element=document.getElementById('share'+id);

}
function save(id){
  const element=document.getElementById('save'+id);
  element.classList.toggle('fas')
  element.classList.toggle('far')
  element.classList.toggle('gold')
}
function dot(id)
{
  hide('menu'+id);
  
}
function hide(id){
  var popup = document.getElementById(id);
  popup.classList.toggle("hide");
  //console.log('hiding')
}
//window events
/* window.onclick = function(event) {
  var b=document.getElementsByClassName('menu')
  b.style.display = "none";
   
  } */