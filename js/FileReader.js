let count=0;
let loadCount;
function ReadFiles(files){
  loadCount=0;
  progress(files.length);
    count+=files.length;
  if(count >10){
        return alert('Максимум 10 фотографий!');
   }
    for ( var i = 0,  f; f = files[i]; i++) {
        var reader = new FileReader();
        
         reader.onload = (function() {
          
            return function(e) {
              
              loadCount++;
             var span = document.createElement('span');
             span.innerHTML = 
             ['<img class="image usually" src="', e.target.result, '" />'].join('');
            imagesBlock.prepend(span);
         };
    })(f);

    reader.readAsDataURL(f);
    }
}

