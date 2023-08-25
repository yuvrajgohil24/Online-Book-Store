
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();

  const loginPopup = document.getElementById("login-popup");
  const signupPopup = document.getElementById("signup-popup");

  document.getElementById("login-btn").addEventListener("click", () => showPopup(loginPopup));
  document.getElementById("signup-btn").addEventListener("click", () => showPopup(signupPopup));

  const closeLoginPopup = document.getElementById("close-login-popup");
  const closeSignupPopup = document.getElementById("close-signup-popup");
  
  closeLoginPopup.addEventListener("click", () => closePopup(loginPopup));
  closeSignupPopup.addEventListener("click", () => closePopup(signupPopup));

  const bookList = document.getElementById("book-list");
  bookList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("btn-add-to-cart")) {
      const bookTitle = target.closest(".book-item").querySelector("h2").textContent;
      addToCart(bookTitle);
    } else if (target.classList.contains("btn-buy-now")) {
      const bookTitle = target.closest(".book-item").querySelector("h2").textContent;
      buyNow(bookTitle);
    }
  });

  const cartButton = document.querySelector(".btn-cart");
  cartButton.addEventListener("click", () => {
    viewCart();
  });

  const buyNowFooterButton = document.querySelector(".btn-buy-now-footer");
  buyNowFooterButton.addEventListener("click", () => {
    proceedToCheckout();
    clearCart();
  });
});

function addToCart(bookTitle) {
  cart.push(bookTitle);
  console.log(`Added "${bookTitle}" to the cart.`);
}

function buyNow(bookTitle) {
  console.log(`Buying "${bookTitle}" now.`);
}

function viewCart() {
  console.log("Viewing Cart:", cart);
}

function proceedToCheckout() {
  console.log("Proceeding to Checkout.");
}

function clearCart() {
  cart = [];
  console.log("Cart cleared.");
}

function showPopup(popup) {
  popup.style.display = "flex";
}

function closePopup(popup) {
  popup.style.display = "none";
}

function fetchBooks() {
  // Simulate fetching books from the server with a delay
  setTimeout(() => {
    const books = [
      {
        title: "Ramayan",
        author: "Valmiki",
        description: "An ancient Indian epic that narrates the life of Prince Rama.",
        button: "click me"
      },
      {
        title: "Bhagwat Geeta",
        author: "Vyasa",
        description: "A sacred Hindu scripture that is part of the Mahabharata, presenting a synthesis of various paths to spiritual growth and realization.",
      },
      {
        title: "Upanishads",
        author: "Various",
        description: "A collection of ancient Indian spiritual teachings that explore the nature of reality and self.",
      },
      {
        title: "Mahabharat",
        author: "Vyasa",
        description: "An ancient Indian epic that tells the story of the Kurukshetra War and the fates of the Kaurava and Pandava princes.",
      },
      {
        title: "The Rig Veda",
        author: "Various",
        description: "The oldest sacred text of Hinduism, containing hymns and rituals.",
      },
      {
        title: "The Yajur Veda",
        author: "Various",
        description: "One of the four Vedas, consisting of prose and verses for rituals.",
      },
      {
        title: "The Sam Veda",
        author: "Various",
        description: "The Veda of melodies and chants, used in rituals.",
      },
      {
        title: "The Atharva Veda",
        author: "Various",
        description: "A collection of hymns, spells, and incantations.",
      },
    ];

    displayBooks(books);
  }, 1000);
}

function displayBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    const bookImage = document.createElement("img");
    bookImage.classList.add("book-image");
    bookImage.src = `Images/${book.title.toLowerCase().replace(/\s/g, '-')}.jpg`;
    bookImage.alt = `${book.title} Cover`;

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");

    // const btns = document.createElement("div")
    const Add_btn = document.createElement("button");
    Add_btn.innerHTML = "Add to Cart";
    Add_btn.id = "add_btn"
    
    
    const Buy_btn = document.createElement("button");
    Buy_btn.innerHTML = "Buy Now";
    Buy_btn.id = "buy_btn"
    

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = "Author: " + book.author;

    const description = document.createElement("p");
    description.textContent = book.description;

    bookDetails.appendChild(title);
    bookDetails.appendChild(author);
    bookDetails.appendChild(description);
    bookDetails.appendChild(Add_btn);
    bookDetails.appendChild(Buy_btn);

    bookItem.appendChild(bookImage);
    bookItem.appendChild(bookDetails);

    bookList.appendChild(bookItem);
  });
}
