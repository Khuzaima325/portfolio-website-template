// Edit this list to show your own projects — the cards render automatically.
const PROJECTS = [
  {
    title: "Todo CLI",
    description: "A command-line todo app in Python with JSON storage.",
    tags: "Python · CLI",
    url: "https://github.com/",
  },
  {
    title: "Weather App",
    description: "Vanilla JavaScript weather app using the free Open-Meteo API.",
    tags: "JavaScript · API",
    url: "https://github.com/",
  },
  {
    title: "Pomodoro Timer",
    description: "A focus timer with 25/5 cycles and an audible beep.",
    tags: "HTML · CSS · JavaScript",
    url: "https://github.com/",
  },
];

const grid = document.getElementById("project-grid");
grid.innerHTML = PROJECTS.map(
  (p) => `
  <article class="project-card">
    <h3><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></h3>
    <p>${p.description}</p>
    <p class="tags">${p.tags}</p>
  </article>`
).join("");
