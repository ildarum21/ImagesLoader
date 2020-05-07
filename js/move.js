
let childrens =[];
function changepositionAndRerender(){
    childrens =[];

    for(let i=0;i<imagesBlock.childNodes.length;i++){
         if (imagesBlock.childNodes[i].nodeName==="SPAN" ){
        childrens.push({id:imagesBlock.childNodes[i].firstChild.id,src:imagesBlock.childNodes[i].firstChild.currentSrc});
        }
    }
    while (imagesBlock.firstChild) {
        imagesBlock.removeChild(imagesBlock.firstChild);
    }
    console.log(childrens);

    let Sortchildrens=childrens.sort(function(a,b){
        return a.id -b.id;
    })
    console.log(Sortchildrens);
    for(let i=0;i<Sortchildrens.length;i++){
        var span2 = document.createElement('span'); 
        span2.innerHTML=['<img  class="image usually" src="', childrens[i].src, '" id ="',childrens[i].id,'" />'].join('');
        imagesBlock.prepend(span2);
    }
}



let currentEl;
let nextEl;
let element;
imagesBlock.ondrag=function(e){
     element =e.target; 
     currentEl =element.id;
       
}
imagesBlock.ondrop=function(e){
   element.id =e.target.id;
   e.target.id =currentEl;
   changepositionAndRerender();
} 



imagesBlock.ondragover=function(e){
    e.preventDefault();
}