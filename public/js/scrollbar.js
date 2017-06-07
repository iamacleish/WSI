var srcImgA = "assets/jpg/product-large-a.jpg";
var srcImgB = "assets/jpg/product-large-b.jpg";
var srcImgC = "assets/jpg/product-large-c.jpg";
var srcImgD = "assets/jpg/product-large-d.jpg";
var productNameA = "Williams-Sonoma Classic Apron, French Blue"
var productNameB = "Williams Sonoma Stripe Apron, Black"
var productNameC = "Williams Sonoma Stripe Apron, Sage"
var productNameD = "Williams Sonoma Bay Stripe Apron, Claret"


function changeImage(id){
  this.id = id;
  //Remove border from all small image elements
  document.getElementById("product-small-a").classList.remove('selected');
  document.getElementById("product-small-b").classList.remove('selected');
  document.getElementById("product-small-c").classList.remove('selected');
  document.getElementById("product-small-d").classList.remove('selected');

  //Add border to the newly selected element
  document.getElementById(this.id).classList.add('selected');

  //Change the hero image to match the selected image
  if(this.id  === "product-small-a"){
   document.getElementById("hero-img-src").src = srcImgA;
   document.getElementById("hero-title").innerHTML = productNameA;
   document.getElementById("hero-breadcrumb").innerHTML = productNameA;
  }
  if(this.id  === "product-small-b"){
   document.getElementById("hero-img-src").src = srcImgB;
   document.getElementById("hero-title").innerHTML = productNameB;
   document.getElementById("hero-breadcrumb").innerHTML = productNameB;
  }
  if(this.id  === "product-small-c"){
   document.getElementById("hero-img-src").src = srcImgC;
   document.getElementById("hero-title").innerHTML = productNameC;
   document.getElementById("hero-breadcrumb").innerHTML = productNameC;
  }
  if(this.id  === "product-small-d"){
   document.getElementById("hero-img-src").src = srcImgD;
   document.getElementById("hero-title").innerHTML = productNameD;
   document.getElementById("hero-breadcrumb").innerHTML = productNameD;
  }
}
