/*window.onload = function(){
	var itemClick = document.getElementsByClassName("storeItem");
	itemClick.onclick = iClick;
};

function iClick(){
	var curImage = document.getElementById("itemImg");
	curImage.style.width = 250;
}*/

$('.storeItem').click(function(){
	for (var i=0; i<=1; i++){
	document.getElementsByClassName('storeItem')[i].style.margin = '10px';
	}
});