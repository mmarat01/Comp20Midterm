// Define shirt class
function Shirt(name, image, cost) {
  this.name = name;
  this.image = image;
  this.cost = cost;
}

// Create an array of all shirts
// Shirts can be added or removed as necessary
shirts = [
  new Shirt("Red Shirt", "red-shirt.jpg", 15),
  new Shirt("Orange Shirt", "orange-shirt.jpg", 15),
  new Shirt("Grey Shirt", "grey-shirt.jpg", 15),
  new Shirt("Badminton Shirt", "badminton-shirt.jpg", 20),
  new Shirt("Black Shirt", "black-shirt.jpg", 15),
  new Shirt("Green Shirt", "green-shirt.png", 15),
];

// Run on page load
$(document).ready(() => {
  for (shirt of shirts) {
    document.getElementsByClassName("shop-panel-div")[0].innerHTML += `
          <div class="item-div"> 
              <image class="item-image" src="../Images/shirts/${shirt.image}"/>
              <div class="label-div">
                  <label class="name-label"> ${shirt.name} </label>
                  <label class="cost-label"> $${shirt.cost} </label>
                  <div class="buy-button-div"> 
                      <label class="buy-button"> Buy Now </label>
                  </div>
              </div>
          </div>
          `;
  }
});
