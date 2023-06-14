var text = document.getElementById("t1"),
    btn = document.getElementById("btn"),
    audio = document.getElementById("a1"),
    menu = document.getElementById("d3"),
    pabtn = document.getElementById("pau"),
    tcbtn = document.getElementById("apply"),
    dogdiv = document.getElementById("dogdiv");
var sec,min,act=false,men=true,m;
m=180;
min=3;
sec=0;
btn.addEventListener("click",function(){
    if(act==true){
        min=parseInt(m/60);
        sec=m%60;
        act=false;
        //text.textContent="3:00";
        audio.pause();
        text.style.color = "black";
        change();
    }
})
tcbtn.addEventListener("click",function(){
    hint();
    change();
})

function tik(){
    if(paused==false){
        if(sec>0){
            sec--;
        }
        else if(min>0){
            sec=59;
            min--;
        }
        else{
            audio.play();
            text.style.color = "red";
        }
    }
    console.log("time pass")
}
function change(){
    if(sec>9&&sec<60){
        text.textContent=min + ":" + sec;
    }
    else{
        text.textContent=min + ":0" + sec;
    }
    console.log("changed")
}
function hint(){
    if(min*60+sec<=60){
        act=true;
    }
    else{
        act=false;
    }
    if(act==true){
        if(sec!=0){
            btn.style.backgroundColor = "rgb(0,233,1)";
            btn.style.borderColor = "rgb(0,150,1)";
        }
        else{
            //btn.style.backgroundColor = "rgb(255,0,0)";
            //btn.style.borderColor="rgb(150,0,0)";
            //text.style.color = "red";
        }
    }
    else{
        btn.style.backgroundColor = "rgb(58,67,77)";
        btn.style.borderColor = "rgb(18,18,18)";
    }
}
window.addEventListener("keydown",function(keydown){
    console.log(keydown.key);
    if(keydown.key == "a" || keydown.key == "A"){
        let t=5;
        while(t>0){
            tik();
            t--;
        }
    }
    if(keydown.key == "p"){
        let a="";
        if(paused){
            a="resume";
        }
        else{
            a="pause";
        }
        if(men){
            men=false;
            menu.style.left="0px";
            /*menu.style.backgroundColor = "dimgray";
            menu.innerHTML = ``;*/
        }
        else{
            men=true;
            menu.style.left="-200px";
            /*const noade = document.createElement("button");
            noade.id="pau";
            noade.innerText = "pause";
            menu.appendChild(noade);*/
        }
    }
    if(keydown.key=="q"){
        dogdiv.innerHTML=`<img id="dog" src="https://i.imgur.com/Wz9hTie.jpg">`;
    }
})
//menu.innerHTML = ``;
//text.textContent="succeed";
setInterval(tik,1000);
setInterval(change,50);
setInterval(hint,100);