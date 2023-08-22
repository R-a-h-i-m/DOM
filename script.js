
var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var ttprice = document.querySelector("#total");
var tprice = document.querySelectorAll(".price")
var delete_btn = document.querySelectorAll (".delete")
var like_btn = document.querySelectorAll(".like")


function increment(e){
    var cible = e.target
    var div = cible.parentElement
  var divP =div.querySelector('p')
  var value = Number(divP.innerHTML)
  value++
  divP.innerHTML=value

  var td = div.parentElement
  var tr = td.parentElement

  var price = tr.querySelector(".unitPrice")
  var totalPrice = tr.querySelector(".price")

  totalPrice.innerHTML =  Number (price.innerHTML) * value
  somme(); 
}

function decrement(e){
  var cible = e.target
  var div = cible.parentElement
var divP =div.querySelector('p')
var value = Number(divP.innerHTML)
if (value > 0) value--
divP.innerHTML=value

var td = div.parentElement
var tr = td.parentElement

var price = tr.querySelector(".unitPrice")
var totalPrice = tr.querySelector(".price")

totalPrice.innerHTML =  Number (price.innerHTML) * value 
somme();
}

function somme() {
  var ini=0 ;
  for (var i=0; i < tprice.length; i++){
  
ini= Number(tprice[i].innerHTML)+ini;
}
ttprice.innerHTML=ini;  
    }
  
    function delet(e) {
    var  cible = e.target;
    var tr= cible.parentElement.parentElement.parentElement.parentElement;
tr.remove();
                
    }

    function changeColor(e) {
      var cible =e.target;
        if (cible.style.color=='red'){
          cible.style.color='#424242';
   } else cible.style.color='red';
  
        }



for (let i = 0; i < plus.length; i++) {
   plus[i].addEventListener("click", increment);
    }


    for (let i =0; i<minus.length;i++){
        minus[i].addEventListener("click", decrement);
    }

for (let i = 0 ;i < delete_btn.length; i++) {
  delete_btn[i].addEventListener('click', delet)
  
}


for (let i= 0; i < like_btn.length; i++) {
  like_btn[i].addEventListener('click', changeColor);
  
}