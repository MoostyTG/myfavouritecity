const grid = document.getElementById('books-grid');

// Загружаем именно русский JSON
fetch('./data/russian.json')
  .then(response => response.json())
  .then(books => {
    const cards = books.map
    (book => `
      <div class="card">
        <img src="${book.img}" alt="${book.title}">
          <h2>${book.title}</h2>
          <p>${book.author}</p>
          <p class="price">${book.price} ₽</p>
          <button class="btn">Подробнее</button>
      </div>
    `);
    grid.innerHTML = cards.join('');
  })
