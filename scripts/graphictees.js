// Define shirt class
function Shirt(name, image, cost) {
  this.name = name;
  this.image = image;
  this.cost = cost;
}

// Create an array of all shirts
// Shirts can be added or removed as necessary
shirts = [
  new Shirt("Avacardio Shirt", "avacardio-shirt.jpg", 10),
  new Shirt("Butterfly Shirt", "butterfly-shirt.jpg", 20),
  new Shirt("Fish Shirt", "fish-shirt.jpg", 15),
  new Shirt("Video Game Shirt", "gameshirt.jpg", 15),
  new Shirt("Marvel Shirt", "marvel-shirt.jpg", 20),
  new Shirt("Nasa Shirt", "nasa-shirt.jpg", 25),
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
