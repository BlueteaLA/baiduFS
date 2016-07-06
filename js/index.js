$(function(){
	// 返回顶部
	$(".back-top").click(function(){})


	// 轮播图
	var $ban=$(".banner-box .left");
	var $banImg=$(".banner-box .left .ban-photo a");
	var $banLis=$(".banner-box .left .bottom-btn li");
	var $banBtn=$(".banner-box .left .rlbtn div");
	var now=0;
	var next=0;
	console.log($ban)
	var flag=true;
	$banImg.css({left:"100%"}).eq(now).css({left:0});
	$banLis.eq(now).attr("id","hot");
	var banT=setInterval(moveLeft,2000);
	$ban.mouseover(function(){
		clearInterval(banT);
	});
	$ban.mouseout(function(){
		banT=setInterval(moveLeft,2000);
	})

	$banLis.click(clickFn);

	$banBtn.eq(0).click(function(){
		if(flag){
			flag=false;
			moveRight();
		}
	})

	$banBtn.eq(1).click(function(){
		if(flag){
			flag=false;
			moveLeft();
		}
	})

	function moveLeft(){
		next++;
		if(next==$banImg.length){
			next=0;
		}
		$banLis.removeAttr("id");
		$banLis.eq(next).attr("id","hot");
		$banImg.eq(next).css({left:"100%"});
		$banImg.eq(now).animate({left:"-100%"});
		$banImg.eq(next).animate({left:0},function(){
			flag=true;
		});
		now=next;
	}

	function moveRight(){
		next--;
		if(next<0){
			next=$banImg.length-1;
		}
		$banLis.removeAttr("id");
		$banLis.eq(next).attr("id","hot");
		$banImg.eq(next).css({left:"-100%"});
		$banImg.eq(now).animate({left:"100%"});
		$banImg.eq(next).animate({left:0},function(){
			flag=true;
		});
		now=next;
	}

	function clickFn(){
		var $index=$(this).index();
		console.log($index)
		$banLis.removeAttr("id");
		$banLis.eq($index).attr("id","hot");
		if($index>now){
			$banImg.eq($index).css({left:"100%"});
			$banImg.eq(now).animate({left:"-100%"});
			$banImg.eq($index).animate({left:0});
		}
		if($index<now){
			$banImg.eq($index).css({left:"-100%"});
			$banImg.eq(now).animate({left:"100%"});
			$banImg.eq($index).animate({left:0});
		}
		now=next=$index;
	}
	console.log($ban)
})