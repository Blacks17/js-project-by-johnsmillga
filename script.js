import { projects } from "./data.js";

const projectContainer = document.querySelector(".projects-container");

// displaying projects
const displayProjects = (list) => {
  const projectList = list
    .map((project) => {
      const { id, name, description, href, img } = project;

      return `
    <a
    href=${href}
    class="single-project"
    target="_blank"
  >
    <img
      src=${img}
      class="single-project-img img"
      alt="our-product"
    />
    <footer>
      <h3 class="name">${name}</h3>
      <span class="description"
        >${description}</span
      >
    </footer>
  </a>
    `;
    })
    .join("");
  projectContainer.innerHTML = projectList;
};

displayProjects(projects);

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
