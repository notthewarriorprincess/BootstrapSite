/*window.onload = function(){
	var itemClick = document.getElementsByClassName("storeItem");
	itemClick.onclick = iClick;
};

function iClick(){
	var curImage = document.getElementById("itemImg");
	curImage.style.width = 250;
}*/

/*$('.storeItem').click(function(){
	for (var i=0; i<=1; i++){
	document.getElementsByClassName('storeItem')[i].style.margin = '10px';
	}
});*/

function itemSelected(id){
	var item = document.getElementById(id);
	var itemdiv = document.getElementById('shoes').style.height = '250px';
	if (item.style.width != '250px'){
		item.style.width = '250px';
		itemdiv.style.height = '270px';
	}else{
		item.style.width = '150px';
		itemdiv.style.height = '170px';
	}
}