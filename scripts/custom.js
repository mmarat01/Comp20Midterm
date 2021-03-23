$(document).ready(() => {
  // text display, canvas element, canvas context, and image helpers
  var text_title = "";
  var canvas = document.getElementById("imageCanvas");
  var ctx = document.getElementById("imageCanvas").getContext("2d");
  var img = new Image();
  img.crossOrigin = "anonymous"; // set up cross origin image sourcing

  // on load, draw
  window.addEventListener("load", DrawPlaceholder);

  // canvas build + display
  function DrawPlaceholder() {
    // on load wasn't supported by safari, so setTimeout is used
    img.src =
      "https://images-na.ssl-images-amazon.com/images/I/412R%2B-HOhFL._AC_UX385_.jpg";
    setTimeout(() => {
      DrawOverlay(img);
      DrawText();
      DynamicText(img);
    }, 500);
  }

  // canvas set up + bg image
  function DrawOverlay(img) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = "rgba(0, 0, 0, 0.0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // draw obtained text
  function DrawText() {
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";
    ctx.font = "30px 'Montserrat'";
    ctx.fillText(text_title, 100, 150);
  }

  // handling typing event -> draw text input
  function DynamicText(img) {
    document.getElementById("name").addEventListener("keyup", function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      DrawOverlay(img);
      text_title = this.value;
      DrawText();
      // ctx.fillText(text_title, 100, 150);
    });
  }

  // handle purchase
  $("#buy-btn").on("click", () => {
    // Get the modal
    let modal = document.getElementById("myModal");
    // build modal
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h3> Your Order </h3>
        <img style="border: 1px" width=200 src="../Images/shirts/custom-shirt.jpg"/>
        <p> Item: Custom Shirt (note: message not displayed in image) </p> 
        <p> Message: ${$("input[name=msg]").val()} </p>
        <p> Size: ${$("select").val()} </p>
        <p> Cost: $30 </p>
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
      `;
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // 'selected' style
    $("input[type=text]").on("change", (e) => {
      e.target.style = "border: 2px solid #ccc;";
    });

    // validation
    document.forms[0].submit_btn.onclick = () => {
      let valid = true;
      for (let element of document.forms[0].elements) {
        if (element.type == "text" && element.name != "address2") {
          if (element.value == "") {
            element.style = "border: 2px red solid";
            valid = false;
          }
        }
      }

      if (valid) {
        modal.innerHTML = `
          <div class="modal-content">
            <p class="purchase_msg"> Completing Purchase... </p>
          </div>
          `;
        setTimeout(() => {
          modal.style.display = "block";
          modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <p class="purchase_msg"> Congratulations! Your Purchase is Complete! </p>
            <p> Your order will arrive in two days. </p>
          </div>
          `;
          // Get the <span> element that closes the modal
          let span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        }, 2000);
      } else {
        document.getElementById("error-message").style = "display:block;";
      }
    };

    modal.style.display = "block";
  });
});
