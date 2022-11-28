const front = frontEndJobs;
const back = backEndJobs;

function createcard(jobs, iconLetter) {
  const divBox = document.querySelector(".jobs__Box");
  const section = document.createElement("section");

  divBox.appendChild(section);

  for (let i = 0; i < jobs.length; i++) {
    // console.log(jobs[i]);

    let main = document.querySelector("main");
    let iconTitle = iconLetter;

    const jobsCard = document.createElement("div");
    const jobsCardTitle = document.createElement("div");
    const jobsCardIcon = document.createElement("div");
    const titleH1 = document.createElement("h1");

    const jobsCardTitle2 = document.createElement("div");
    const title2H1 = document.createElement("h1");
    const title2H3 = document.createElement("h3");

    const parag = document.createElement("p");

    const jobsCardCargaHora = document.createElement("div");

    const jobsCardCargaHora1 = document.createElement("div");
    const jobsCardCargaSpan1 = document.createElement("span");

    const jobsCardCargaHora2 = document.createElement("div");
    const jobsCardCargaSpan2 = document.createElement("span");

    section.classList.add("jobs__container");

    jobsCard.classList.add("jobs__card");
    jobsCardTitle.classList.add("jobs__card__title");
    jobsCardTitle2.classList.add("jobs__card__title2");

    jobsCardIcon.classList.add("jobs__card--icon");
    jobsCardIcon.innerText = iconTitle;

    jobsCardCargaHora.classList.add("jobs__card--cargaHoraria");

    section.appendChild(jobsCard);
    jobsCard.append(jobsCardTitle, parag, jobsCardCargaHora);
    jobsCardTitle.append(jobsCardIcon, jobsCardTitle2, titleH1);

    jobsCardTitle2.append(title2H1, title2H3);
    jobsCardTitle2.classList.add("jobs__card--title2");
    title2H1.innerText = jobs[i].title;
    title2H3.innerText = `${jobs[i].city} - ${jobs[i].state}`;

    parag.innerText = jobs[i].description;

    jobsCardCargaHora1.appendChild(jobsCardCargaSpan1);
    jobsCardCargaHora1.id = "ModoTime";
    jobsCardCargaHora1.innerText = jobs[i].modality[0];

    jobsCardCargaHora2.appendChild(jobsCardCargaSpan2);
    jobsCardCargaHora2.id = "ModoType";
    jobsCardCargaHora2.innerText = jobs[i].modality[1];

    jobsCardCargaHora.append(jobsCardCargaHora1, jobsCardCargaHora2);
    jobsCardCargaHora.classList.add("jobs__card--cargaHoraria");
  }
}

function mostrarCars(jobs, jobsTitle, iconLetter) {
  let divBox = document.querySelector("#jobsBox");
  let cardTitle = document.createElement("h1");

  cardTitle.id = "Jobs";
  cardTitle.classList.add("jobs__card--title");
  cardTitle.innerText = jobsTitle;

  divBox.appendChild(cardTitle);
  createcard(jobs, iconLetter);
}

mostrarCars(front, "Frontend Jobs", "G");
mostrarCars(back, "Backend Jobs", "T");
