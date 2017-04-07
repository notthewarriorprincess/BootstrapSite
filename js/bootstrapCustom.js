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

function itemSelected(cont, opt, div){
	var itemdiv = document.getElementById(div);
	if (itemdiv.style.height != '360px'){
		
		enlarge(cont, opt, itemdiv);
		
	}else{
		
	}
}

function itemMinimize(cont, opt, div){
	var itemdiv = document.getElementById(div);
	if (itemdiv.style.height == '360px'){
		shrink(cont, opt, itemdiv);
	}
}

function enlarge(itemCont, itemOpt, itemdiv){
	var h = 170;
	var id = setInterval(frame, 1);
	function frame(){
		if(h == 360){
			clearInterval(id);
			$("#" + itemOpt).fadeIn(200);
		} else {
			h++;
			itemdiv.style.height = h + 'px';
			$("#" + itemCont).fadeOut(200);
		}
	}
}

function shrink(itemCont, itemOpt, itemdiv){
	var h = 360;
	var id = setInterval(frame, 1);
	function frame(){
		if(h == 170){
			clearInterval(id);
			$("#" + itemCont).fadeIn(200);
		} else {
			h--;
			itemdiv.style.height = h + 'px';
			$("#" + itemOpt).fadeOut(200);
		}
	}
}