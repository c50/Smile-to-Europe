//id of the DOM element
var divPlaceHolder = "smileGrid";
var divImageRightPlaceHolder = "smile-to-image";
//array of images to be loaded
var images = [
{"path":"images/smiles/01-smile.jpg", "value":1},
{"path":"images/smiles/02-smile.jpg", "value":2},
{"path":"images/smiles/03-smile.jpg", "value":3},
{"path":"images/smiles/04-smile.jpg", "value":4},
{"path":"images/smiles/05-smile.jpg", "value":5},
{"path":"images/smiles/06-smile.jpg", "value":6},
{"path":"images/smiles/07-smile.jpg", "value":7},
{"path":"images/smiles/08-smile.jpg", "value":8},
{"path":"images/smiles/09-smile.jpg", "value":9},
];

var images_right = [
{"path":"images/subjects/01-subject.jpg", "value":0},
{"path":"images/subjects/02-subject.jpg", "value":1},
{"path":"images/subjects/03-subject.jpg", "value":2},
{"path":"images/subjects/04-subject.jpg", "value":3},
{"path":"images/subjects/05-subject.jpg", "value":4}
];

(function (){
    var div = document.getElementById(divPlaceHolder);
    var smileTable = "";
    var imgtoadd = "";
	var value = 0;
    var indextoextract = 0;
	var nbOfImages = images.length;
    for (var i = 0; i < nbOfImages; i++) {
		indextoextract = Math.ceil(Math.random()*images.length) - 1;
        imgtoadd = images[indextoextract].path;
		value = images[indextoextract].value;
        smileTable += "<button class='smile' type='submit' name='image" + i+1 + "' value='" + value + "'><img src='" + imgtoadd + "' /></button>";
		images.splice(indextoextract,1);
    }
    div.innerHTML = smileTable;
	
	var div_image_right = document.getElementById(divImageRightPlaceHolder);
	var indexRighttoextract = Math.ceil(Math.random()*images_right.length) - 1;
	var imgRightToadd = images_right[indexRighttoextract].path;
	div_image_right.innerHTML = "<img class='image_right' id="+ images_right[indexRighttoextract].value + " src='" + imgRightToadd + "' />";
})();