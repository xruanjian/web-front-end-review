function changeBg(){
         var bgColor="";
         //产生一个六位数
         for(var i=0;i<6; i++){
           bgColor +=""+Math.round(Math.random()*9);
         }
         //将生成随机颜色赋值给元素
         document.body.style.backgroundColor="#"+bgColor;
    }
    //为按钮单击绑定事件
    document.getElementById("change-background").onclick=changeBg;