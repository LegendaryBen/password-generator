function query(a){
  return document.querySelector(a);
};

let showPassword = query(".show");
let changePassword = query(".change");

changePassword.addEventListener("click",runPassword);

function tell(){
	return Math.floor(Math.random()*15);
}

let diff = [1,2,"G", "y" ,8, "+", "%", "#","(","d",59,"[", "$","?", "£",0]


function runPassword(){
    let start = "" ;
    for(let i = 0; i<19;i++){
      let v = tell();
      start += diff[v];
    }
    showPassword.textContent = start;
}

let hover = query(".hover");
let hover1 = query(".hover>div");

window.addEventListener("scroll", kop);

let scroll = window.scrollY;
  console.log(scroll)

function kop(){
  let scroll = window.scrollY;
  let k = hover.getBoundingClientRect().top;
  if(scroll >= k){
  	hover1.style.top = "0";
  }else{
  	hover1.style.top = "-100%";
  }
}