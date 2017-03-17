window.onload = function (){
	var div = document.getElementById('CourseDetails');
	var aEm = div.getElementsByTagName('em');
	var aDiv = div.getElementsByTagName('div');
	var aH2 = div.getElementsByTagName('h2');
	var aLi = div.getElementsByTagName('li');
	var iHeight = aH2[0].offsetHeight-1;
	var iTimer = null;
	var onOff = true;
	
	var ul = document.getElementById('menu');
	var li = ul.getElementsByTagName('li');
	var winHeight = document.documentElement.clientHeight;
	
	ul.style.top = (document.documentElement.clientHeight-ul.offsetHeight)/2+'px';

	aLi[aLi.length-1].style.border = 'none';
	

	function show(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].onOff = true;
			aLi[i].style.height = aH2[i].height + 'px';
			aEm[i].style.lineHeight = aEm[i].height + 'px';
		}
		startMove(0);
	}
	
	li[0].onclick = function (){

		for(var i=0; i<aLi.length; i++){
			aLi[i].onOff = true;
			aLi[i].style.height = aH2[i].height + 'px';
			aEm[i].style.lineHeight = aEm[i].height + 'px';
		}
		startMove(0);
	};
	li[1].onclick = function (){
		for(var i=0; i<aLi.length; i++){
			aLi[i].onOff = false;
			aLi[i].style.height = iHeight + 'px';
			aEm[i].style.lineHeight = iHeight + 'px';
		}
		startMove(0);
	};
	li[2].onclick = function (){ startMove(0); };
	
	li[3].onmouseover = function(){
		this.innerHTML = "290850250";
	}
	li[3].onmouseout = function(){
		this.innerHTML = "联系QQ";
	}
	li[3].onclick = function(){
		
		alert('咨询请加QQ：290850250');
	}
	for(var i=0; i<aDiv.length; i++){

		aLi[i].style.height = iHeight + 'px';
		aEm[i].style.lineHeight = iHeight + 'px';
		
		aEm[i].innerHTML = i+1;

		var dl = aDiv[i].getElementsByTagName('dl');
		dl[dl.length-1].style.border = 'none';

		aLi[i].onOff = false;
		aH2[i].index = aEm[i].index = i;
		aH2[i].height = aEm[i].height = aDiv[i].offsetHeight;

		aEm[i].onclick = aH2[i].onclick = function (){
			
			if(aLi[this.index].onOff){
				aLi[this.index].style.height = iHeight + 'px';
				aEm[this.index].style.lineHeight = iHeight + 'px';
			}else{
				aLi[this.index].style.height = this.height + 'px';
				aEm[this.index].style.lineHeight = this.height + 'px';
			}
			
			startMove(this.parentNode.offsetTop+7);
			aLi[this.index].onOff = !aLi[this.index].onOff;
		};
	}

	//show();  默认如果打开就启用这个

	window.onscroll = function (){
		!onOff&&clearInterval(iTimer);
		onOff = false;
	};
	
	window.onresize = function (){
		ul.style.top = (document.documentElement.clientHeight-ul.offsetHeight)/2 +'px';
	};

	function startMove(target) {
			
		clearInterval(iTimer);
		var iCur = 0;
		var iSpeed = 0;
		
		iTimer = setInterval(function() {
			iCur = document.documentElement.scrollTop || document.body.scrollTop;
			iSpeed = Math.floor((target - iCur) / 8);
			
			if (iSpeed == 0) {
				clearInterval(iTimer);
			} else {
				document.documentElement.scrollTop = document.body.scrollTop = iCur + iSpeed;
				onOff = true;
			}
		}, 30);
		
	}

};