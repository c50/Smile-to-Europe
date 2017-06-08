//id of the DOM element
var divPlaceHolder = "smileGrid";
//array of images to be loaded
var images = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15","image16","image17","image18","image19","image20","image21","image22","image23","image24","image25","image26","image27","image28","image29","image30","image31","image32"];

(function (){
    //number of columns
    var gridCols = 6;
    //number of lines calculated based in the number of columns and number of images
    var gridLns = Math.ceil(images.length / gridCols);
    var div = document.getElementById(divPlaceHolder);
    var smileTable = "";
    var imgtoadd = "";
    var indextoextract = 0;
    for (var i = 1; i <= gridLns; i++) {
        smileTable += "<div class='row'>";
        for (var j = 1; j <= gridCols; j++) {
            if (images.length > 0) {
                indextoextract = Math.ceil(Math.random()*images.length) - 1;
                imgtoadd = images[indextoextract];
                smileTable += "<div class='cell' id='cell" + i + "_" + j + "'><img src='" + imgtoadd + "' /></div>";
                images.splice(indextoextract,1);
            }
        }
        smileTable += "</div>";
    }
    div.innerHTML = smileTable;
})();