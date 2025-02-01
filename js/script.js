// handle page sections
document.addEventListener("DOMContentLoaded", () => {
  let productNav = document.getElementById("product-nav");
  let cartNav = document.getElementById("cart-nav");
  let productsSection = document.getElementById("products-container");
  let cartSection = document.getElementById("cart-section");

  // Main section navigation
  productNav.addEventListener("click", (e) => {
    e.preventDefault();
    productsSection.classList.remove("d-none");
    productNav.classList.add("active");
    cartSection.classList.add("d-none");
    cartNav.classList.remove("active");
  });

  cartNav.addEventListener("click", (e) => {
    e.preventDefault();
    cartSection.classList.remove("d-none");
    cartNav.classList.add("active");
    productsSection.classList.add("d-none");
    productNav.classList.remove("active");
  });
});

window.onload = () => {
  displayProducts();
  handleLogInUpdates();
};

let signActions = document.getElementById("sign-actions");
let userActions = document.getElementById("user-actions");
let username = document.getElementById("username");
let loggedInUser = localStorage.getItem("userLoggedIn");
let addedProducts = [];

function handleLogInUpdates() {
  if (localStorage.getItem("isLogIn") == "true") {
    //1- Update navbar content
    signActions.classList.add("d-none");
    userActions.classList.remove("d-none");
    username.innerHTML = loggedInUser;

    //2- Update if the user added products before or not.
    let userProductsKey = `${loggedInUser}Products`;
    addedProducts = JSON.parse(localStorage.getItem(userProductsKey)) || [];
    changeCounter(addedProducts);
    displayCartItems(addedProducts);
    displayInCart(addedProducts);
    updateButtonsState();
  } else {
    signActions.classList.remove("d-none");
    userActions.classList.add("d-none");
  }
}

// Display products on the page and its counter
let productsData = JSON.parse(localStorage.getItem("productsAPI"));
let productsItems = document.getElementById("products-items");

document.getElementById("products-counter").innerHTML = productsData.length;
function displayProducts() {
  let productCards = "";
  productsData.map((product) => {
    productCards += `
      <div class="col-md-4" id="card">
        <div class="card rounded h-100 shadow-sm">
          <div class="img-container">
            <img src="${product.image}" class="card-img-top" alt="${product.title}" />
          </div>
          <div class="card-body pb-4">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <div class="d-flex align-items-center justify-content-between">
              <p class="card-text">$${product.price}</p>
              <a class="btn btn-primary addBtn" data-id="${product.id}">
                Add to cart
                <i class="fa-solid fa-cart-shopping" style="color: #fff"></i>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  });
  productsItems.innerHTML = productCards;
  updateButtonsState();
}

let itemsMenu = document.getElementById("items-menu");
let itemsCounter = document.getElementById("items-counter");
let cartCounter = document.getElementById("cart-counter");
let cartItems = document.getElementById("cart-items");
// Change counter
function changeCounter(products) {
  itemsCounter.innerHTML = products.length;
  cartCounter.innerHTML = products.length;
}
// Display products title
function displayCartItems(products) {
  let cartItemsTitle = "";
  products.forEach((product) => {
    cartItemsTitle += `<li><a class="dropdown-item" href="#">${product.title}</a></li>`;
  });
  itemsMenu.innerHTML = cartItemsTitle;
}
// Display added products in cart
function displayInCart(products) {
  let productsInCart = "";
  products.forEach((product) => {
    productsInCart += `
      <div class="col-md-4" id="card">
        <div class="card rounded h-100 shadow-sm">
          <div class="img-container">
            <img src="${product.image}" class="card-img-top" alt="${product.title}" />
          </div>
          <div class="card-body pb-4">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <div class="d-flex align-items-center justify-content-between">
              <p class="card-text">$${product.price}</p>
              <a class="btn btn-danger removeBtn" onclick="removeFrom(${product.id})">
                Remove from cart
                <i class="fa-solid fa-cart-shopping" style="color: #fff"></i>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  });
  cartItems.innerHTML = products.length
    ? productsInCart
    : "There are no items in the cart";
}
// handle clicks updates
//1- handle add to cart button
function addedTo(id) {
  if (localStorage.getItem("isLogIn") == "true") {
    let chosenProduct = productsData.find((product) => product.id == id);
    let userProductsKey = `${loggedInUser}Products`;
    let userAddedProducts =
      JSON.parse(localStorage.getItem(userProductsKey)) || [];

    if (!userAddedProducts.some((product) => product.id == id)) {
      chosenProduct.added = true;
      userAddedProducts.push(chosenProduct);
      localStorage.setItem(userProductsKey, JSON.stringify(userAddedProducts));
      changeCounter(userAddedProducts);
      displayInCart(userAddedProducts);
      displayCartItems(userAddedProducts);
      updateButtonsState();
      calculateTotal();
    }
  } else {
    if (confirm("You must log in first")) {
      setTimeout(() => {
        window.location = "signIn.html";
      }, 300);
    }
  }
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("addBtn")) {
    let id = e.target.getAttribute("data-id");
    addedTo(id);
  }
});

function updateButtonsState() {
  let storedProducts =
    JSON.parse(localStorage.getItem("addedProducts")) ||
    JSON.parse(localStorage.getItem(`${loggedInUser}Products`)) ||
    [];
  // console.log(storedProducts);
  storedProducts.forEach((product) => {
    let button = document.querySelector(`.addBtn[data-id="${product.id}"]`);
    if (button) {
      button.innerHTML = "Successfully Added";
      button.classList.add("btn-success", "disabled");
      button.classList.remove("btn-primary");
    }
  });
}
//2- handle remove from cart button
function removeFrom(id) {
  let userProductsKey = `${loggedInUser}Products`;
  let userAddedProducts =
    JSON.parse(localStorage.getItem(userProductsKey)) || [];
  userAddedProducts = userAddedProducts.filter((product) => product.id != id);
  localStorage.setItem(userProductsKey, JSON.stringify(userAddedProducts));
  // addedProducts = userAddedProducts;

  displayCartItems(userAddedProducts);
  displayProducts();
  changeCounter(userAddedProducts);
  displayInCart(userAddedProducts);
  updateButtonsState();
  calculateTotal();
}
//3- handle log out
let logout = document.getElementById("logout");
logout.addEventListener("click", handleLogOut);
function handleLogOut(e) {
  e.preventDefault();
  localStorage.setItem(
    `${loggedInUser}Products`,
    JSON.stringify(addedProducts)
  );
  localStorage.setItem("isLogIn", false);
  localStorage.removeItem("addedProducts");
  localStorage.removeItem("userLoggedIn");
  setTimeout(() => {
    window.location = "signIn.html";
  }, 300);
}

// Calculate total price and display all products with its prices.
let productsTable = document.getElementById("products-table");
function calculateTotal() {
  let userProductsKey = `${loggedInUser}Products`;
  let userAddedProducts =
    JSON.parse(localStorage.getItem(userProductsKey)) || [];
  let totalPrice = 0;
  let tableContent = "";
  if (userAddedProducts.length >= 1) {
    tableContent = ` <table class="table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>`;
    userAddedProducts.forEach((product) => {
      tableContent += `<tr>
                <td>${product.title}</td>
                <td>$${product.price}</td>
              </tr>`;
      totalPrice += product.price;
    });
    tableContent += `<tr>
                <td><strong>Total</strong></td>
                <td><strong>$${totalPrice}</strong></td>
              </tr>
            </tbody>
          </table>`;
  }
  productsTable.innerHTML = tableContent;
}

calculateTotal();
