$(function(){
	
	
	$("#login_button").click(function(){
//		console.log($(".ipt_username").val())
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"login","userID":$(".ipt_username").val(),"password":$(".ipt_password").val()},function(data){
				data = JSON.parse(data);
				console.log(data)
				if(data==0){
					$(".tips20").css("display","block")  
				}else if(data==2){
					$(".tips21").css("display","block")  
				}else{
					$.cookie("username",data.userID,{expires:7,path:"/"});
					location.href = "../index.html"
				}
			})
//		$.ajax({
//			type:"get",
//			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//			data:{"status":"login","userID":$(".ipt_uesrname").val(),"password":$(".ipt_password").val()},
//			async:true,
//			success:function(data){
//				console.log(data);
//				if(data==0){
//					$(".error_tips").css("display","block").text("用户名不存在")  
//				}else if(data==2){
//					$(".error_tips").css("display","block").text("用户名和密码不符")  
//				}else{
//					$.cookie("uesrname",data.userID,{expires:7,path:"/"});
////					location.href = "../index.html"
//				}
//				
//			}
//			
//	
//		});
	})
	
	$(".checkbox").click(function(){
		if($(".checkbox").prop("checked")){
			$(".span2").css("display","block")
		}else{
			$(".span2").css("display","none")
			
		}

	})
	
	$("#more").click(function(){
		$(".more_load li").toggle();
	})
	$(".static_pc1").click(function(){
		$(this).css("background","url(../img/toewm.png)no-repeat 0 0")
		$(".login_code").toggle()
		$(".login_pc").toggle()
		
	})
	
	//跳转到首页
	$(".logo").click(function(){
		location.href = "../index.html"
	})
	
	
	
	
	
})
//console.log("aaafdg")

