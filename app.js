console.log("Hello Web Standards");
console.log("Hello Kais");
var cnt = 1;
this.btn = document.querySelector("#BTN1");

this.btn.onclick = e => {
  console.log("Clicked" + cnt);
  this.ul = document.querySelector("#UL1");
  console.log(this.ul.innerHTML);
  this.ul.innerHTML = this.ul.innerHTML + "<li>"+cnt+"</li>";
  cnt++;
};



