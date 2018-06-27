$(function(){
		var classid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
			console.log(data);
			var str = "";
			$.each(data,function(index,item){
				str += `<div>
				<a href="detail.html?id=${item.goodsID}">
				<img src="${item.goodsListImg}" class="list_pic">
				<p class="list_name">${item.goodsName}</p>
				<p class="list_price">\￥${item.price}</p>
				<span>\查看详情</span>
				</a>
				</div>`
			})
			$("#product_list").html(str);
		});
		
})