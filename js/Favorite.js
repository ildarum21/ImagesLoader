let imagesBlock =document.querySelector('.imagesBlock');


imagesBlock.onclick=function(e){
    let elem =e.target;
    if(elem !=this){
    elem.classList.toggle('favorite');
    elem.classList.toggle('usually');
    }
}

let input =document.querySelector('#OnlyFavorite');
input.addEventListener('change',
function(){
    let usually =document.querySelectorAll('.usually');
    if(input.checked){
        usually.forEach(function(item) {
            console.log(item);
            item.style.display='none';
          });   
    }else{
        usually.forEach(function(item) {
            item.style.display='inline-block';
          });  
    }
        
});