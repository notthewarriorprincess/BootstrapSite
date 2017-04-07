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
	if (itemdiv.style.height != '360px'){
		
		enlarge(item, itemdiv);
		
	}else{
		
		shrink(item, itemdiv);
		
	}
}

function enlarge(item, itemdiv){
	var h = 170;
	var id = setInterval(frame, 1);
	function frame(){
		if(h == 360){
			clearInterval(id);
		} else {
			h++;
			itemdiv.style.height = h + 'px';
		}
	}
}

function shrink(item, itemdiv){
	var h = 360;
	var id = setInterval(frame, 1);
	function frame(){
		if(h == 170){
			clearInterval(id);
		} else {
			h--;
			itemdiv.style.height = h + 'px';
		}
	}
}