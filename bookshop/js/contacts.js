// 1. Находим контейнер
const grid = document.getElementById('teachers-grid');

// 2. Загружаем JSON с преподавателями
fetch('./data/teachers.json')
  .then(response => response.json())
  .then(teachers => {
    // 3. Генерируем HTML для каждой карточки
    const cards = teachers.map(teacher => `
      <div class="teacher-card">
        <img id="${teacher.id}" src="${teacher.img}" alt="${teacher.name}">
        <h2>${teacher.name}</h2>
        <p>${teacher.subject}</p>
        <a class="teacher-email" href=${teacher.email} style="text-decoration: none">Ссылка<a>
      </div>
    `);
    
    // 4. Вставляем на страницу
    grid.innerHTML = cards.join('');
  })
