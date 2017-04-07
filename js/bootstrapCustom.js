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

window.onload = function(){
	$('.buyOptions').hide();
};

function itemSelected(cont, opt, div){
	var itemCont = cont;
	var itemOpt = opt;
	var itemdiv = document.getElementById(div);
	if (itemdiv.style.height != '360px'){
		
		enlarge(itemCont, itemOpt, itemdiv);
		
	}else{
		
		shrink(itemCont, itemOpt, itemdiv);
		
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