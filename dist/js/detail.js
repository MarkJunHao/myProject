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
//			var str2 = `<img src="${data[0].goodsListImg}" class="detail_img">
//			<p class="detail_name">${data[0].goodsName}</p>
//			<span class="detail_price1">\价格</span>
//			<p class="detail_price">\￥${data[0].price}</p>
//			<input type= "button" value="添加购物车" class="detail_btn">
//			`
			$(".yuantu").append(`<img src="${data[0].goodsListImg}">`);
			
//			var str = str1 + str2
//			$("#product_detail").html(str);
			
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
		
		//滑动变图
		$(".xiaotu").on("click",function(){
			var src1 = $(this)[0].src;
			console.log($(this))
			$(".detail_img")[0].src = src1;
		})
		

})


//$(function(){
//	var goodsid = location.search.split("=")[1];
//	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
////		var str = `<img src="${data[0].goodsListImg}">
////					<p>${data[0].goodsName}</p>
////					<p>${data[0].price}</p>
////					<input type= "button" value="添加购物车">
////					`;
////		$(".list_xx").html(str);
//		var str="";
////		console.log(JSON.parse(data[0].imgsUrl));
//		var arrimg=JSON.parse(data[0].imgsUrl)
//		for(var i=0;i<arrimg.length;i++){
//			str+=`<img src="${arrimg[i]}">`;
//		}
//		$(".bottom_pic").html(str);
//		$(".min_pic").append(`<img src="${arrimg[0]}">`);
//		$(".max_pic").append(`<img src="${arrimg[0]}">`);
//		$(".xx_right").html(`<p class="pname">${data[0].goodsName}</p><p class="pprice">￥${data[0].price}</p>`)
//		.append(`<div class="xx_shop">
//					<span>购买数量</span>
//					<div class="num_hid">
//						<a href="#" class="addnum"></a>
//						<input type="text" name="num_shop" id="num_shop" />
//						<a href="#" class="downnum"></a>
//					</div>
//					<div class="num_show"></div>
//					<a href="">加入购物车</a>
//				</div>`);
//	});
//	$(".min_pic").mouseenter(function(){
//		$(".min_kuai").show();
//		$(".max_pic").show();
//	});
//	$(".min_pic").mouseleave(function(){
//		$(".min_kuai").hide();
//		$(".max_pic").hide();
//	});
//	$(".min_pic").mousemove(function(e){
//		var evt= e||event;
//		var xx = evt.pageX-$(".list_xx")[0].offsetLeft;
//		var yy = evt.pageY-$(".list_xx")[0].offsetTop;
//		var _left=xx-$(".min_kuai")[0].offsetWidth/2;
//		var _top=yy-$(".min_kuai")[0].offsetHeight/2;
//		var maxleft=$(".min_pic")[0].offsetWidth-$(".min_kuai")[0].offsetWidth;
//		var maxtop=$(".min_pic")[0].offsetHeight-$(".min_kuai")[0].offsetHeight;
//		if(_left<=0){
//			_left=0;
//		}
//		if(_top<=0){
//			_top=0;
//		}
//		if(_left>=maxleft){
//			_left=maxleft;
//		}
//		if(_top>=maxtop){
//			_top=maxtop;
//		}
//		$(".min_kuai")[0].style.left=_left+"px";
//		$(".min_kuai")[0].style.top=_top+"px";
//		$(".max_pic>img")[0].style.left=-_left*2+"px";
//		$(".max_pic>img")[0].style.top=-_top*2+"px";
//	});
//});