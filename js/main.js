
console.log('js script start');

let files=document.getElementById('file');





function uploadFiles(evt) {
    var files = evt.target.files; 
    ReadFiles(files);
 }

 document.getElementById('file').addEventListener('change',uploadFiles, false);




 (function(){
  var dropzone= document.getElementById('uploadBlock');

  dropzone.ondragover =function(){
      this.className="uploadBlock dragover";
      return false;
  }
  dropzone.ondragleave=function(){
      this.className="uploadBlock";
      return false;
  }
  dropzone.ondrop =function(e){
      e.preventDefault();
      this.className ="uploadBlock";
      let files =e.dataTransfer.files;
      ReadFiles(files);
  }
}());

    

