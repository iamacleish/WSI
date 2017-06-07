var modal;

//function to create the model of what the user wants to purchase.
function purchaseModal(){
  modal = document.getElementById('purchaseModal');
  var val = document.getElementById('amount-of-product').value;
  var type = document.getElementById('hero-title').innerHTML;
  var str = val + " " + type;
  var cost = (val*19.95).toFixed(2);

  //set the modal based on the user selected add to cart options
  document.getElementById('modal-amount').innerHTML = str;
  document.getElementById('modal-cost').innerHTML = cost;
  modal.style.display = "block";
}

//close model when x is clicked
function closeModal(){
  modal.style.display = "none";
}

//close model if anywhere is clicked
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
