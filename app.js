// global variables
var productImages = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productsArray = [];
var totalClicks = 0;
var totalNumDisplayed = 0;
var imagesHolder = document.getElementById('images-holder');

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.totalNumDisplayed = 0;
  productsArray.push(this);
}

// var bag = new Product('bag', 'assets/bag.jpg');
// console.log(bag);

function createAllProducts() {
  for (var i = 0; i < productImages.length; i++) {
    var product = new Product(productImages[i], 'assets/' + productImages[i] + '.jpg');
  }
  console.log(productsArray);
}

function randomNum() {
  return Math.floor(Math.random() * productsArray.length);
}

function drawImageIntoHolder(randomIndex) {
  var product = productsArray[randomIndex];
  console.log('product: ', product);

  var holderEL = document.createElement('img');
  console.log('holderEL: ', holderEL);

  console.log('product.path: ', product.path);
  holderEL.src = product.path;
  imagesHolder.appendChild(holderEL);
}
//Creates three random images
function createThreeImages() {
  for (var i = 0; i < 3; i++) {
    var randomIndex = randomNum();
    drawImageIntoHolder(randomIndex);
  }
}
// console.log(drawImageIntoHolder);

// var tracker {
// }
createAllProducts();
createThreeImages();
