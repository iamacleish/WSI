var modal;

function purchaseModal(){
  modal = document.getElementById('purchaseModal');
  var val = document.getElementById('amount-of-product').value;
  var type = document.getElementById('hero-title').innerHTML;
  var str = val + " " + type;
  var cost = (val*19.95).toFixed(2);
  document.getElementById('modal-amount').innerHTML = str;
  document.getElementById('modal-cost').innerHTML = cost;
  modal.style.display = "block";
}

function closeModal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
