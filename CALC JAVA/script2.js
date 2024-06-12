document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalElement = document.getElementById("total");
  const saveButton = document.getElementById("save");

  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let total = JSON.parse(sessionStorage.getItem("total")) || 0;

  function updateCart() {
    cartItemsContainer.innerHTML = "";
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.textContent = `${item.name} - ${item.price}jd`;
      cartItemsContainer.appendChild(itemElement);
    });
    totalElement.textContent = total;
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productElement = button.parentElement;
      const name = productElement.getAttribute("data-name");
      const price = parseFloat(productElement.getAttribute("data-price"));

      const item = { name, price };
      cart.push(item);
      total += price;

      sessionStorage.setItem("cart", JSON.stringify(cart));
      sessionStorage.setItem("total", JSON.stringify(total));

      updateCart();
    });
  });

  saveButton.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
    alert("Cart saved!");
  });

  // Load cart from session storage on page load
  updateCart();
});

const cartItem = document.createElement("div");
cartItem.className = "cart-item";
cartItem.innerHTML = `
                <img src="${product.name.toLowerCase()}.jpg" alt="${
  product.name
}" class="img-fluid" style="width:  150px;height: 150px;">
                <span>${product.name}</span>
                <div style="background-color: white;border-radius: 10px;" class="quantity-controls">
                <button style=" background-color: white;color: black;border: none;font-weight: bold;" class="btn btn-sm btn-secondary decrease-quantity" data-id="${
                  item.id
                }">-</button>
                
                <button style=" background-color: black; color: white;" class="btn btn-sm btn-secondary " data-id="${
                  item.id
                }">${item.quantity}</button>

                <button style=" background-color: white;color: black;border: none;font-weight: bold;" class="btn btn-sm btn-secondary increase-quantity" data-id="${
                  item.id
                }">+</button>
                </div>
                <span>${product.price * item.quantity}jd</span>
                <button style="background-color: black; font-size: 20px;border-radius: 50%;color: white;font-weight: bold;" class="btn  btn-sm remove-from-cart" data-id="${
                  item.id
                }">X</button>
            `;
cartItems.appendChild(cartItem);
