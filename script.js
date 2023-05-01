var count=0;
document.getElementById("inner").addEventListener("click",function(){
    if(count%2==0){
        document.getElementById("inner").style.cssText="background-color:#7f8c8d";
        document.getElementById("toggler").style.cssText="float:right";
        document.getElementsByTagName("body")[0].style.cssText="background-color:black";
        document.getElementsByTagName("h1")[0].style.cssText="color:white";
        count++;
    }else{
        document.getElementById("inner").style.cssText="background-color:#95a5a6";
        document.getElementById("toggler").style.cssText="float:left";
        document.getElementsByTagName("body")[0].style.cssText="background-color:white";
        document.getElementsByTagName("h1")[0].style.cssText="color:black";
        count++
    }
})
