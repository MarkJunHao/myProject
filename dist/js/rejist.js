$(function(){
	
	$(".y_same_item").click(function(){
		$(this).css("border-color","red").children(".y_s_lable").css("left","-62px").siblings(".r_tips").css("display","block")
		//console.log("aaa")
		
	})
	
	
	$(".dx").click(function(){
		$(this).css("border-color","red").children(".y_s_lable").css("left","-76px")
	})
	
	$(".receice_yzm").click(function(){
		var a = Math.floor(Math.random()*26);
        var b = Math.floor(Math.random()*26);
        var c = Math.floor(Math.random()*26);
        var d = Math.floor(Math.random()*26);

        var a = String.fromCharCode(65+a);
        var b = String.fromCharCode(65+b);
        var c = String.fromCharCode(65+c);
        var d = String.fromCharCode(65+d);
        var f = a+b+c+d
        //console.log(f)
        $(this).text(f).css({"background":"#cecece","color":"#000"})
	})
	
	$("#psw1").on("blur",function(){
		if($("#psw").val() == $("#psw1").val()){
				$(".r_tips1").css("display","none")
			}else{
				$(".r_tips1").css("display","none").next().css("display","block")
//				$(".r_tips3").css("display","block")
			}
	})
	
	 $(".regist_btn2").click(function(){
    	//console.log($(".ysame_input").val())
    	//console.log($(".receice_yzm").text())
			if($(".ysame_input").val().toUpperCase() == $(".receice_yzm").text()){
				$(".r_tips2").css("display","none")
			}else{
				$(".r_tips2").css("display","block")
			}
			
			$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"register","userID":$("#userName").val(),"password":$("#psw").val()},function(data){
				console.log(data)
				if(data==0){
					$(".tips20").css("display","block")  
				}else if(data==2){
					$(".tips21").css("display","block")  
				}else{
					location.href = "login.html"
				}
			})
			
//			$.ajax({
//				type:"get",
//				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//				data:{"status":"register","userID":$("#userName").val(),"password":$("#psw").val()},
//				console.log($("#psw").val()),
//				async:true,
//				success:function(data){
//					console.log(data);
//					if(data==0){
//						$(".tips20").css("display","block")  
//					}else if(data==2){
//						$(".tips21").css("display","block")  
//					}else{
////						location.href = "login.html"
//console.log("aaa")
//					}
//				}
//			});
		})
		$(".tips20 span").click(function(){
			$(this).parent().css("display","none") 
		})
	$(".tips21 span").click(function(){
			$(this).parent().css("display","none") 
		})
	
	
	//跳转到首页
	$(".logo").click(function(){
		location.href = "../index.html"
	})
	
//   oBtn.onclick =function() {
//
//      var val1 =oTxt1.value;
//      var reg =/^[a-zA-Z][a-zA-Z0-9_]{5,19}$/g;
//      if(reg.test(val1) == true){
//         oP[0].style.display = "none";
//      }else {
//          oP[0].style.display = "block";
//      }
//
//       var val2 =oTxt2.value;
//       var reg =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/g;
//       if(reg.test(val2) == true){
//           oP[1].style.display = "none";
//       }else {
//           oP[1].style.display = "block";
//       }
//
//
//       if(oTxt2.value == oTxt3.value){
//           oP[2].style.display = "none";
//       }else {
//           oP[2].style.display = "block";
//       }
//
//
//       if(oTxt4.value == oBox.innerText){
//           oP[3].style.display = "none";
//       }else {
//           oP[3].style.display = "block";
//       }
//
//  }
//
//   var oBox = document.getElementById("box");
//
//  oBox.innerText = "获取验证码"
//  oBox.onclick = function () {
//      var a = Math.floor(Math.random()*26);
//      var b = Math.floor(Math.random()*26);
//      var c = Math.floor(Math.random()*26);
//      var d = Math.floor(Math.random()*26);
//
//      var a = String.fromCharCode(65+a);
//      var b = String.fromCharCode(65+b);
//      var c = String.fromCharCode(65+c);
//      var d = String.fromCharCode(65+d);
//      oBox.innerText = a + b + c + d;
//  }

})
