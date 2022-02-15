import Book from './modules/books.js';
import displayBooks from './modules/display.js';
import { DateTime } from './modules/luxon.js';

const books = new Book();
displayBooks(books);

const button = document.getElementById('add');

button.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const message = document.getElementById('error-message');
  message.textContent = '';
  if (title.value === '' || author.value === '') {
    message.textContent = 'Please fill both the title and the author before adding.';
    message.style.color = 'red';
  } else if (!books.search(title.value, author.value)) {
    books.add(title.value, author.value);
    displayBooks(books);
    title.value = '';
    author.value = '';
    message.textContent = 'The book has been added successfully.';
    message.style.color = 'green';
  } else {
    const message = document.getElementById('error-message');
    message.textContent = 'The book has already been added.';
    message.style.color = 'red';
  }
  setTimeout(() => { message.textContent = ' '; }, 5000);
});

const booksSection = document.getElementById('books');
const addSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact');
document.getElementById('menu-list').addEventListener('click', () => {
  booksSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});
document.getElementById('menu-add-book').addEventListener('click', () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
});
document.getElementById('menu-contact').addEventListener('click', () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

const dateContainer = document.getElementById('date-time');
const timer = () => {
  const today = DateTime.now();
  dateContainer.textContent = `${today.toLocaleString(DateTime.DATETIME_FULL)}`;
}
timer();
setInterval(() => { timer(); }, 1000);
