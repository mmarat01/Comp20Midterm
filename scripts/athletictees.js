// Define shirt class
class Shirt {
  constructor(name, image, cost) {
    this.name = name;
    this.image = image;
    this.cost = cost;
  }
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
  for (const [index, shirt] of shirts.entries()) {
    document.getElementsByClassName("shop-panel-div")[0].innerHTML += `
          <div class="item-div"> 
              <image class="item-image" src="../Images/shirts/${shirt.image}"/>
              <div class="label-div">
                  <label class="name-label"> ${shirt.name} </label>
                  <label class="cost-label"> $${shirt.cost} </label>
                  <div class="buy-button-div"> 
                      <label class="buy-button" id="${index}"> Buy Now </label>
                  </div>
              </div>
          </div>
          `;
  }

  $("label[class=buy-button]").on('click', (e) => {
    let shirt = shirts[parseInt(e.target.id)];
    // Get the modal
    let modal = document.getElementById("myModal");
    modal.innerHTML = 
    `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3> Order Details </h3>
      <p> Item: ${shirt.name} </p> 
      <p> Cost: $${shirt.cost} </p>
      <form>
        <h3> Delivery Details </h3>
        <input class="half" name="country" type="text" placeholder="Country"/> <br/>
        <input class="half" type="text" placeholder="First Name"/> 
        <input class="half" type="text" placeholder="Last Name"/> <br/>
        <input class="third" name="city" type="text" placeholder="City"/> 
        <input class="third" name="state" type="text" placeholder="State"/> 
        <input class="third" name="zip" type="text" placeholder="Zip Code"/> <br/>
        <input class="half" name="email" type="text" placeholder="Email"/> 
        <input class="half" name="email_confirm" type="text" placeholder="Confirm Email"/> <br/>
        <h3> Payment </h3>
        <input class="half" name="card_num" type="text" placeholder="Card Number"/> <br/>
        <input class="half" name="card_exp" type="text" placeholder="Expiration Date"/>
        <input class="half" name="card_sec" type="text" placeholder="Security Code"/> <br/>
        <input type="submit" value="Complete Purchase"/>
      </form>
    </div>
    `
    modal.style.display = "block";
  })
});

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}