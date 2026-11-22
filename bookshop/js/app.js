// 1. Находим контейнер на странице
const container = document.getElementById('products');

// 2. Запрашиваем файл с данными
fetch('./data/products.json')
  .then(response => {
    // Проверяем, что файл успешно загрузился
    if (!response.ok) {
      throw new Error('Ошибка загрузки файла');
    }
    return response.json(); // Превращаем текст в объекты JS
  })
  .then(products => {
    // 3. Проходимся по каждому товару и создаем HTML
    const htmlCards = products.map(product => {
      return `
        <div class="card">
          <img src="${product.img}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>Цена: ${product.price} руб.</p>
        </div>
      `;
    });

    // 4. Склеиваем все карточки в одну строку и вставляем на страницу
    container.innerHTML = htmlCards.join('');
  })
  .catch(error => {
    console.error('Ошибка:', error);
    container.innerHTML = '<p>Не удалось загрузить товары.</p>';
  });
