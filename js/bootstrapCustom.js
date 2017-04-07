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


function itemSelected(id, div){
	var item = document.getElementById(id);
	var itemdiv = document.getElementById(div);
	if (item.style.width < '250px'){
		enlarge(item, itemdiv);
		itemdiv.style.height = '270px';
		
	}else{
		shrink(item, itemdiv);
		
		itemdiv.style.height = '170px';
	}
}

function enlarge(item, itemdiv){
	var w = 150;
	var h = 170;
	var id = setInterval(frame, 1);
	function frame(){
		if(w == 250){
			clearInterval(id);
		} else {
			w++;
			h++;
			item.style.width = w + 'px';
			itemdiv.style.height = h + 'px';
		}
	}
}

function shrink(item, itemdiv){
	var w = 250;
	var h = 270;
	var id = setInterval(frame, 1);
	function frame(){
		if(w == 150){
			clearInterval(id);
		} else {
			w--;
			h--;
			item.style.width = w + 'px';
			itemdiv.style.height = h + 'px';
		}
	}
}