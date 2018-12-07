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