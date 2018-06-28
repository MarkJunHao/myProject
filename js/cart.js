$(function(){
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
		console.log(data);
//		$(".list_text a").append(`${data[0].goodsName}`)
//		$(".list_img a").append(`<img src="${data[0].goodsListImg}" >`)
//		$(".list_price .price").append(`${data[0].price}`)
//		$(".sum_price").append(`${data[0].price}`)

	for(i=0;i<data.length;i++){

			var str = "";
			str = `
			<ul class="order_lists">
					<li class="list_chk">
						<input type="checkbox" id="checkbox_2" class="son_check">
						
					</li>
					<li class="list_con">
						<div class="list_img"><a href="javascript:;"><img src="${data[i].goodsListImg}"></a></div>
						<div class="list_text"><a href="detail.html?id=${data[i].goodsID}">${data[i].goodsName}</a></div>
					</li>
					<li class="list_info">
						<p>规格：默认</p>
						<p>尺寸：16*16*3(cm)</p>
					</li>
					<li class="list_price">
						<p class="price">${data[i].price}</p>
					</li>
					<li class="list_amount">
						<div class="amount_box">
							<a href="javascript:;" class="reduce">-</a>
							<input type="text" value="1" class="sum">
							<a href="javascript:;" class="plus">+</a>
						</div>
					</li>
					<li class="list_sum">
						<p class="sum_price">${data[i].price}</p>
					</li>
					<li class="list_op">
						<p class="del"><a href="javascript:;" class="delBtn" data-id="${data[i].goodsID}">移除商品</a></p>
					</li>
				</ul>
			`
			$(".order_content").append(str)
		
		}
		var num = parseInt($(".sum").val())
		
		$(".plus").click(function(){
			var index = $(this).index(".plus") ;
			num++;
			console.log(index)
			$(".sum").eq(index).val(num);
			sum1 =parseInt(num*$(".price").eq(index).text()) ;
//			console.log(sum1)
			$(".sum_price").eq(index).text(sum1)
			zongjia();
		})
		
		$(".reduce").click(function(){
			var index = $(this).index(".reduce") ;
			
			num--;
			if(num<1){
				num = 1;
			}else{
				$(".sum").eq(index).val(num);
				sum1 =parseInt(num*$(".price").eq(index).text()) ;
				$(".sum_price").eq(index).text(sum1)
			}
			zongjia();
		})
	
	
	//全选反选
		$("#all").click(function(){
			$(".son_check").prop("checked",$(this).prop("checked"))
			
			
			
			//console.log($(this))
		})
		$(".son_check").click(function(){
			var sum2 = 0;
			if($(".son_check:checked").length == $(".son_check").length){
				$("#all").prop("checked",true)
			}else{
				$("#all").prop("checked",false)
				
			}
			
			zongjia();
		})
	function zongjia(){
		var count = 0;
		var sum2 = 0
		$(".son_check:checked").each(function(){
			sum2 += parseInt($(this).parent().siblings(".list_sum").children().text())	
		})
			if($(".son_check:checked").length == 0){
				
				count = 0
			}else{
				count = $(".son_check:checked").length
			}
			//console.log($(".son_check:checked"))
			$(".total_text").text(sum2);
			$(".piece_num").text(count);
		
	}
	
		//移除商品
		
	$(".delBtn").click(function(){
	   	var id = $(this).attr("data-id")
	   //	console.log(id)
		$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:0},function(res){
			alert("确认删除此商品吗？")
			location.href = "cart.html"
		})
	   
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	})
	
	
	






  

   

//  //点击跳转页面
//  $(".hd_topbar_home span").click(function(){
//  	location.href = "../index.html"
//  })
		
		

})