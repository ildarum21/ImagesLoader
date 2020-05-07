let count=0;
function ReadFiles(files){
    count+=files.length;
    if(count >10){
        return alert('Максимум 10 фотографий!');
    }
    for (var i = 0, f; f = files[i]; i++) {
  
      var reader = new FileReader();
  
      reader.onload = (function(theFile) {
        return function(e) {
         var span = document.createElement('span');
         span.innerHTML = 
         ['<img class="image" src="', e.target.result, '" />'].join('');
                            imagesBlock.prepend(span);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }