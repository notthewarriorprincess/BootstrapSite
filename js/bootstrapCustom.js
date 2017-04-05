window.onload = function(){
	var itemClick = document.getElementsByClassName("storeItem");
	itemClick.onclick = iClick;
};

function iClick(){
	var curImage = document.getElementById("itemImg");
	curImage.style.width = 250;
}