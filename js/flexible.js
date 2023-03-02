// 如何获取当前视口宽度？
var vw = document.documentElement.clientWidth;
// 我们获取视口宽度之后 要计算新的视口中 1rem的宽度
//  此时 rem_value获得的就是我们新视口中1rem代表的大小
//  document.documentElement.style.fontSize=(16/1920)*vw+"px";

// document.documentElement.style.fontSize意思为获取html当前的font-size的字体大小并更改
document.documentElement.style.fontSize = (16 / 750) * vw + "px";
