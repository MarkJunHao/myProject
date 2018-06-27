//轮播
$(function(){
	var count = 0;
	var $li = $("#slider>ul>li");
	$(".next").click(function(){
		count++;				
		if(count == $li.length){
			count =0;
		}
		$li.eq(count).fadeIn().siblings().fadeOut();
		$(".slider_icon i").eq(count).addClass("btn_act").siblings().removeClass('btn_act');
		//console.log(count);
	});
	$(".prve").click(function(){
		count--;
		if(count == -1){
			count = $li.length-1;
		}
		console.log(count);
		$li.eq(count).fadeIn().siblings().fadeOut();
		$(".slider_icon i").eq(count).addClass("btn_act").siblings().removeClass('btn_act');
	});
	$(".slider_icon i").mouseenter(function(){
		$(this).addClass('btn_act').siblings().removeClass("btn_act");
		$li.eq($(this).index()).fadeIn().siblings().fadeOut();
		count = $(this).index();
	});
	var timer = setInterval(function(){
		count++;
		if(count == $li.length){
			count =0;
		}
		$li.eq(count).fadeIn().siblings().fadeOut();
		$(".slider_icon i").eq(count).addClass('btn_act').siblings().removeClass("btn_act");
		
	},2000)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


//顶部悬浮
//var fixed = document.getElementsByClassName('fixed_search')[0];
$(window).scroll(function(){
	var num = document.documentElement.scrollTop;
	//console.log(num)
	if(num>590){
		$(".fixed_search").slideDown(500)
	}else{
		$(".fixed_search").slideUp(200)
		
	}
	
//左侧楼梯
	if(num>1460){
		$(".floor_nav").fadeIn()
	}else{
		$(".floor_nav").fadeOut()
		
	}
	
});

//跳转登录页面
$(function(){
	$(".login").click(function(){
		location.href="html/login.html";
		//console.log('aaa')
		return false;
	})
	$(".regist").click(function(){
		location.href="html/regist.html";
		//console.log('aaa')
		return false;
	})
})

//前后轮播










//猜你喜欢中的li 商品详情
//$(function(){
//	$(".like").mouseover(function(){
//		$(this).css("border-color","red")
//		//console.log(this)
//		$(".operate_area").stop().animate({top:"230px"},300)
//	})
//	$(".like").mouseout(function(){
//		$(this).css("border-color",0)
//		//console.log(this)
//		$(".operate_area").stop().animate({top:"266px"},300)
//	})
////	$(".like").mouseout(function(){
////		$(this).css("border-color",0)
////		//console.log(this)
//////		$(".up").
////		$(".up").stop().animate({top:"350px"},500)
////		
////	})
//})
