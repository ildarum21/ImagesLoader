let elem =document.querySelector('#progressLine');
let width=0;
function progress(filesLength){
    width =0;
    elem.innerHTML=width +'%';
    elem.style.width =width +'%';
    id=setInterval(progressStatus,1);
    function progressStatus(){    
         
        if(width >=100){
            clearInterval(id);
            
        }else{
            width=(100/filesLength)*loadCount;
            elem.style.width =width +'%';
            elem.innerHTML=width +'%';
        }
    }
}
