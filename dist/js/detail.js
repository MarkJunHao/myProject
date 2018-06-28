$(function(){
	var goodsid = location.search.split("=")[1];
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
		//console.log(data);
		//console.log(data[0].imgsUrl)//xiaotu 
		var xiaotu =JSON.parse(data[0].imgsUrl) ;
		//console.log(xiaotu)
		var str1 = "";
		for(var i=0;i<xiaotu.length;i++){
			str1 += `<img src="${xiaotu[i]}" class="xiaotu">`;
		}
		$(".p_bottom").append(str1);
		
		//滑动变图
	$(".xiaotu").on("mouseover",function(){
		var src1 = $(this)[0].src;
		$(".yuantu img")[0].src = src1;
		$(".fangdajing img")[0].src = src1;
	})
	
	//跳转购物车
	$(".btn2").click(function(){
		location.href = "cart.html"
	})
	
		$(".yuantu").append(`<img src="${data[0].goodsListImg}" class="yt1">`);
		$(".fangdajing").append(`<img src="${data[0].goodsListImg}" class="fdj">`)
		$(".right1").append(`<p class="detail_name">${data[0].goodsName}</p>`)
		$(".detail_price").append(`<p class="detail_price">\￥${data[0].price}</p>`)
		$(".detail_buy").append(`<input type= "button" value="加入购物车" class="detail_btn">`)
		

//放大镜
	$(".yuantu").mouseenter(function(){
		$(".fdq").show();
		$(".fangdajing").show();
	})
	$(".yuantu").mouseleave(function(){
		$(".fdq").hide();
		$(".fangdajing").hide();
	})
	$(".yuantu").mousemove(function(e){
		var evt = e || event;
		var x = evt.pageX-$(".left1").offset().left-20;
		var y = evt.pageY-$(".left1").offset().top-20;
		//console.log(x,y)
		var _left=x-$(".fdq")[0].offsetWidth/2;
		var _top=y-$(".fdq")[0].offsetHeight/2;
		console.log(_left)
		var maxleft= $(".yuantu")[0].offsetWidth-$(".fdq")[0].offsetWidth;
		console.log(maxleft)
		var maxtop=$(".yuantu")[0].offsetHeight-$(".fdq")[0].offsetHeight;
		if(_left<=0){
			_left=0;
		}
		if(_top<=0){
			_top=0;
		}
		if(_left>=maxleft){
			_left=maxleft;
		}
		if(_top>=maxtop){
			_top=maxtop;
		}
		$(".fdq")[0].style.left=_left+"px";
		console.log(_left,$(".fdq")[0].style.left)
		$(".fdq")[0].style.top=_top+"px";
		$(".fangdajing>img")[0].style.left=-_left*2+"px";
		$(".fangdajing>img")[0].style.top=-_top*2+"px"; 
	})






			
			$("input:button").click(function(){
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
					console.log(data);
					if(data==0){
						alert("添加失败");
					}
					if(data == 1){
						alert("添加成功");
					}
				})
			})
		});
		
		
		

})


