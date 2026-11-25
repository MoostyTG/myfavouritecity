fetch('./data/teachers.json')
  .then(response => response.json())
  .then(data => {
    
    document.getElementById('program-title').innerText = data.program.title;
    document.getElementById('program-desc').innerText = data.program.description;
    document.getElementById('program-link').href = data.program.url;

    const studentCard = document.getElementById('student-card');
    studentCard.innerHTML = `
      <img src="${data.student.img}" alt="Сам я">
      <div class="person-info">
        <h3>${data.student.name}</h3>
        <p>Email: ${data.student.email}</p>
        <p>Контрольная 1: <a href="${data.student.control1}" target="_blank">Контрольная 1</a></p>
        <p>Контрольная 2: <a href="${data.student.control2}" target="_blank">Контрольная 2</a></p>
      </div>
    `;

    const supervisorCard = document.getElementById('supervisor-card');
    supervisorCard.innerHTML = `
      <img src="${data.supervisor.img}" alt="Академрук">
      <div class="person-info">
        <h3>${data.supervisor.name}</h3>
        <p>Email: ${data.supervisor.email}</p>
        <p>Страница: <a href="${data.supervisor.url}" target="_blank">Страничка на сайте</a></p>
      </div>
    `;

    const managerCard = document.getElementById('manager-card');
    managerCard.innerHTML = `
      <img src="${data.manager.img}" alt="Менеджер">
      <div class="person-info">
        <h3>${data.manager.name}</h3>
        <p>Email: ${data.manager.email}</p>
        <p>Страница: <a href="${data.manager.url}" target="_blank">Страничка на сайте</a></p>
      </div>
    `;

  })
