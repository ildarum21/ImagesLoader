let overlay =document.querySelector('.overlay');
imagesBlock.oncontextmenu=function(e){
    e.preventDefault();
    let elem =e.target.src;
    if(elem !=this){
    let modal=document.createElement('DIV');
    modal.classList.add('modal');
    let img=new Image();
    img.src =elem;
    img.style.width=700 +'px';
    img.style.height=400 +'px';
    modal.prepend(img);
    modal.style.display='block';
    document.body.appendChild(modal);
    overlay.style.display='block';

    overlay.onclick =function(){
        console.log('overlay');
        modal.style.display='none';
        overlay.style.display='none';

    }
    }
}