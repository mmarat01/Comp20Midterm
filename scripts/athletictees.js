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
      <h3> Your Order </h3>
      <img style="border: 1px" width=200 src="../Images/shirts/${shirt.image}"/>
      <p> Item: ${shirt.name} </p> 
      <p> Cost: $${shirt.cost} </p>
      <form method="post">
        <h3> Delivery Details </h3>
        <div class="input-div-half">
          <label class="input-label" for="country">Country</label>
          <input name="country" type="text"/>
        </div>
        <br style="clear:both;" />

        <div class="input-div-half">
          <label class="input-label" for="fname">First Name</label>
          <input id="fname" type="text" value="" name="name">
        </div>
        <div class="input-div-half">
          <label class="input-label" for="lname">Last Name</label>
          <input id="lname" type="text" value="" name="name">
        </div>
        <br style="clear:both;" />

        <div class="input-div-half">
          <label class="input-label" for="fname">Address Line 1</label>
          <input id="address1" type="text" value="" name="address1">
        </div>
        <div class="input-div-half">
          <label class="input-label" for="lname">Address Line 2 (optional)</label>
          <input id="address2" type="text" value="" name="address2">
        </div>
        <br style="clear:both;" />

        <div class="input-div-third">
          <label class="input-label" for="city">City</label>
          <input name="city" type="text"/> 
        </div>
        <div class="input-div-third">
          <label class="input-label" for="state">State</label>
          <input name="state" type="text"/>  
        </div>
        <div class="input-div-third">
          <label class="input-label" for="zip">Zip Code</label>
          <input name="zip" type="text"/>
        </div>
        <br style="clear:both;" />
        <div class="input-div-half">
          <label class="input-label" for="email"> Email </label>
          <input name="email" type="text"/> 
        </div>
        <br style="clear:both;" />

        <h3> Payment </h3>
        <div class="input-div-half">
          <label class="input-label"> Card Number </label>
          <input name="card_num" type="text" placeholder="XXXX-XXXX-XXXX-XXXX"/>
        </div>
        <br style="clear:both;" />
        <div class="input-div-half">
          <label class="input-label"> Expiration Date </label>
          <input name="card_exp" type="text" placeholder="MM/YY"/>
        </div>
        <div class="input-div-half">
          <label class="input-label"> Security Number </label>
          <input name="card_sec" type="text" placeholder="XXX" required/> <br/>
        </div>
        <br style="clear:both;" />
        <div id="error-message">
          <p> Please fill out all required fields. </p>
        </div>
        <input class="submit_btn" name="submit_btn" type="button" value="Complete Purchase"/>
      </form>
    </div>
    `
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    $("input[type=text]").on('change', (e) => {
      e.target.style = "border: 2px solid #ccc;"
    })

    document.forms[0].submit_btn.onclick = () => {
      // check to see if form is complete
      console.log(document.forms[0])

      let valid = true
      for (let element of document.forms[0].elements) {
        if (element.type == "text" && element.name != "address2") {
          console.log("element is text")
          if (element.value == "") {
            element.style = "border: 2px red solid"
            valid = false
          }
        }
      }

      if (valid) {
        modal.innerHTML = 
          `
          <div class="modal-content">
            <p class="purchase_msg"> Completing Purchase... </p>
          </div>
          `
        setTimeout(() => {
          modal.style.display = "block";
          modal.innerHTML = 
          `
          <div class="modal-content">
            <span class="close">&times;</span>
            <p class="purchase_msg"> Congratulations! Your Purchase is Complete! </p>
            <p> Your order will arrive in two days. </p>
          </div>
          `
          // Get the <span> element that closes the modal
          let span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          }
        }, 2000)
      } else {
        document.getElementById("error-message").style = "display:block;"
      }
    }

    modal.style.display = "block";
  })
});

// Get the modal
let modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}