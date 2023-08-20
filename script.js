document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();

  const addBookBtn = document.getElementById("add-book-btn");
  addBookBtn.addEventListener("click", addBook);

  const openPopup = (popup) => {
    popup.style.display = "flex";
  };

  const closePopup = (popup) => {
    popup.style.display = "none";
  };

  const setupPopup = (openBtn, closeBtn, popup) => {
    openBtn.addEventListener("click", () => {
      openPopup(popup);
    });

    closeBtn.addEventListener("click", () => {
      closePopup(popup);
    });
  };

  setupPopup(
    document.getElementById("login-btn"),
    document.getElementById("close-login-popup"),
    document.getElementById("login-popup")
  );

  setupPopup(
    document.getElementById("signup-btn"),
    document.getElementById("close-signup-popup"),
    document.getElementById("signup-popup")
  );
});

function fetchBooks() {
  // Simulating fetching books from the server with a delay
  setTimeout(() => {
    const books = [
      {
        title: "Ramayan",
        author: "Valmiki",
        description: "An ancient Indian epic that narrates the life of Prince Rama.",
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
  }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
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

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = "Author: " + book.author;

    const description = document.createElement("p");
    description.textContent = book.description;

    bookDetails.appendChild(title);
    bookDetails.appendChild(author);
    bookDetails.appendChild(description);

    bookItem.appendChild(bookImage);
    bookItem.appendChild(bookDetails);

    bookList.appendChild(bookItem);
  });
}

function addBook() {
  const addBookForm = document.getElementById("add-book-form");

  addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("new-title").value;
    const author = document.getElementById("new-author").value;
    const description = document.getElementById("new-description").value;

    const newBook = {
      title: title,
      author: author,
      description: description,
    };

    // Simulate sending data to the server (replace with actual server interaction)
    // For demonstration, we will just log the new book details
    console.log("New Book Details:", newBook);

    // Clear the form fields
    addBookForm.reset();
  });
}
