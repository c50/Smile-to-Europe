//id of the DOM element
var divPlaceHolder = "smileGrid";
//array of images to be loaded
var images = [
{"path":"images/smiles/01-smile.jpg", "value":1},
{"path":"images/smiles/02-smile.jpg", "value":2},
{"path":"images/smiles/03-smile.jpg", "value":3},
{"path":"images/smiles/04-smile.jpg", "value":4},
{"path":"images/smiles/05-smile.jpg", "value":5},
{"path":"images/smiles/06-smile.jpg", "value":6},
{"path":"images/smiles/07-smile.jpg", "value":7},
{"path":"images/smiles/08-smile.jpg", "value":8}
];

(function (){
    //number of columns
    var gridCols = 6;
    //number of lines calculated based in the number of columns and number of images
    var gridLns = Math.ceil(images.length / gridCols);
    var div = document.getElementById(divPlaceHolder);
    var smileTable = "";
    var imgtoadd = "";
	var value = 0;
    var indextoextract = 0;
    for (var i = 1; i <= gridLns; i++) {
        smileTable += "<div class='row'>";
        for (var j = 1; j <= gridCols; j++) {
            if (images.length > 0) {
                indextoextract = Math.ceil(Math.random()*images.length) - 1;
                imgtoadd = images[indextoextract].path;
				value = images[indextoextract].value;
                smileTable += "<div class='cell' id='cell" + i + "_" + j + "'><button class='smile' type='submit' name='image" + j + "' value='" + value + "'><img src='" + imgtoadd + "' /></button>";
                images.splice(indextoextract,1);
            }
        }
        smileTable += "</div>";
    }
    div.innerHTML = smileTable;
})();