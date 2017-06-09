//id of the DOM element
var divPlaceHolder = "smileGrid";
//array of images to be loaded
var images = ["images/smiles/01-smile.jpg","images/smiles/02-smile.jpg","images/smiles/03-smile.jpg","images/smiles/04-smile.jpg","images/smiles/05-smile.jpg","images/smiles/06-smile.jpg","images/smiles/07-smile.jpg","images/smiles/08-smile.jpg"];

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
                smileTable += "<div class='cell' id='cell" + i + "_" + j + "'><button class='smile' type='submit' name='image" + j + "' value='" + j + "'><img src='" + imgtoadd + "' /></button>";
                images.splice(indextoextract,1);
            }
        }
        smileTable += "</div>";
    }
    div.innerHTML = smileTable;
})();