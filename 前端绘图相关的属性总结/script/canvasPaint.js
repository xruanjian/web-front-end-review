//canvas相当于一个画布
//1 :首先获得DOM对象。  画布
var canvas = document.getElementById('mc');
//2 :在获得的对象上面绘制CanvasRenderingContext2D对象
var ctx = canvas.getContext('2d');

//3 :设置填充颜色
ctx.fillStyle = '#f00';
//4 :填充一个矩形
ctx.fillRect(30 , 20 , 120 , 60);
ctx.fillStyle="#ff0";
ctx.fillRect(80,60,120,60);

//strokeStyle绘制路径时候所使用的填充风格
ctx.strokeStyle = "#00f";
ctx.lineWidth=10;
ctx.strokeRect(30 ,130 ,120 ,60);

ctx.strokeStyle = "#0ff";
ctx.lineJoin = "round";
ctx.strokeRect(80,160,120,60);

ctx.strokeStyle = "#f0f";
ctx.lineJoin = "bevel";
ctx.strokeRect(130,190,120,60);

//绘制字符串
ctx.fillStyle = "#f40";
ctx.font = "italic 50px 隶书";
ctx.textBasealign = "bottom";
//填充字符串
ctx.fillText("奕辰宝宝",200,50);
ctx.strokeStyle = "#a0f";
ctx.font = "50px 宋体"
//绘制字体边框
ctx.strokeText("奕辰以后身体健康，有出息",200,320);


//绘制一个圆
var canvas2=document.getElementById("mc2");
var p2 = canvas2.getContext("2d");
for(var i=0;i<10; i++){
						//开始定义路径
						p2.beginPath();
						//添加一段圆弧
						p2.arc(i*25,i*25,(i+1)*8,0,Math.PI*2,true);
						//关闭路径
						p2.closePath();
						//rgba(0,0,0,0.1);rgba是CSS3中的属性。rgba括号中前3个数字代表着 red green blue三种颜色的rgb值，0-255，最后一个是设定这个颜色的透明度即alpha值。范围从0到1，越接近1，代表透明度越低
						p2.fillStyle = 'rgba(255,50,255,'+(10-i)*0.1+')';
						p2.fill();
}


//3: 绘制原角矩形
/*
		该方法负责绘制圆角矩形
		x1、y2：是圆角矩形左上角的座标。
		width、height：控制圆角举行的宽、高
		radius：控制圆角矩形的四个圆角的半径
	*/
 
function createRoundRect(ctx, x1 , y1 , width , height , radius)
	{
		// 移动到左上角
		ctx.moveTo(x1 + radius , y1);
		// 添加一条连接到右上角的线段
		ctx.lineTo(x1 + width - radius, y1);
		// 添加一段圆弧
		ctx.arcTo(x1 + width , y1, x1 + width, y1 + radius, radius);
		// 添加一条连接到右下角的线段
		ctx.lineTo(x1 + width, y1 + height - radius);
		// 添加一段圆弧
		ctx.arcTo(x1 + width, y1 + height , x1 + width - radius 
			, y1 + height , radius);
		// 添加一条连接到左下角的线段
		ctx.lineTo(x1 + radius, y1 + height); 
		// 添加一段圆弧
		ctx.arcTo(x1, y1 + height , x1 , y1 + height - radius , radius);
		// 添加一条连接到左上角的线段
		ctx.lineTo(x1 , y1 + radius);
		// 添加一段圆弧
		ctx.arcTo(x1 , y1 , x1 + radius , y1 , radius);
		ctx.closePath();
	}
var canvas3 = document.getElementById("mc3");
var p3 = canvas3.getContext("2d");
p3.lineWidth=3;
createRoundRect(p3,30,30,200,100,20);
p3.stroke();


//4 :开始下雪特效
function createFlower(context , n , dx , dy , size , length)
	{
		// 开始创建路径  
		context.beginPath(); 
		context.moveTo(dx , dy + size);
		var dig = 2 * Math.PI / n;
		for(var i = 1; i < n + 1 ; i++) 
		{
			// 结算控制点坐标
			var ctrlX = Math.sin((i - 0.5) * dig) * length + dx;
			var ctrlY= Math.cos((i - 0.5 ) * dig) * length + dy;
			// 结算结束点的坐标
			var x = Math.sin(i * dig) * size + dx;
			var y = Math.cos(i * dig) * size + dy; 
			// 绘制二次曲线
			context.quadraticCurveTo(ctrlX , ctrlY , x , y);
		}
		context.closePath();  
	}
	// 定义每个雪花的初始位置
	snowPos = [
		{x : 20, y : 4},
		{x : 60, y : 4},
		{x : 100, y : 4},
		{x : 140, y : 4},
		{x : 180, y : 4},
		{x : 220, y : 4},
		{x : 260, y : 4},
		{x : 300, y : 4},
		{x : 340, y : 4},
		{x : 380, y : 4}
	];
	function fall(context)
	{
		// 设置采用黑色作为填充色
		context.fillStyle = "#000";
		// 填充矩形
		context.fillRect(0 , 0 , 420 , 280);
		// 设置采用白色作为填充色
		context.fillStyle = "#fff";
		for (var i = 0 , len = snowPos.length ; i <len ; i++ )
		{
			// 保存当前绘图
           context.save();
			// 平移坐标系统评
			context.translate(snowPos[i].x , snowPos[i].y);
			// 旋转坐标系统
			context.rotate((Math.random() * 6 - 3 ) * Math.PI / 10);
			// 控制“雪花”下掉
			snowPos[i].y += Math.random() * 8;
			if (snowPos[i].y > 280)
			{
				snowPos[i].y = 4;
			}
			// 创建、并绘制“雪花”
			createFlower(context , 6 , 0 , 0 , 5 , 8);
			context.fill();
			// 恢复绘图状态
			context.restore();
		}		
	}
	// 获取canvas元素对应的DOM对象
	var canvas4 = document.getElementById('mc4');
	// 获取在canvas上绘图的CanvasRenderingContext2D对象
	var p4= canvas4.getContext('2d');
	setInterval("fall(p4);" , 200);


/*5 :实用技能:抠图技能*/

// 获取canvas元素对应的DOM对象
	var canvas5 = document.getElementById('mc5');
	// 获取在canvas上绘图的CanvasRenderingContext2D对象
	var p5 = canvas5.getContext('2d');
	// 创建Image对象
	var image = new Image();
	// 指定Image对象装载图片
	image.src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544290054270&di=6c6f8ae9877d571fb8b08bff83095be1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff9dcd100baa1cd11177d1220b212c8fcc2ce2de2.jpg";
	// 当图片装载完成时激发该函数
	image.onload = function()
	{
		// 保持原大小绘制图片
		p5.drawImage(image , 20 , 10);
		// 绘制图片时进行缩放
		p5.drawImage(image , 180 , 10 , 76 , 110);
		var sd = 50;
		var sh = 65
		// 从源位图中挖取一块、放大3倍后绘制在Canvas上
		p5.drawImage(image , 2 , 50  , sd  ,  sh 
			, 265 , 10 , sd * 3 , sh * 3);
	}