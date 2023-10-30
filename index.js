i=0;
v=setInterval(np,2000)
function np(){
p=document.getElementById('banner');
a=["images/banner1.jpeg","images/banner2.jpeg","images/banner3.jpeg","images/banner.jpg"];
p.src=a[i];
i++;
if(i==a.length)
{
	i=0;
}}