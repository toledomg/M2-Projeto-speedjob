// {
/* <section class="jobs__container">

<div class="jobs__card">
  <div class="jobs__card__title">
    <div class="jobs__card--icon">
      <h1>G</h1>
    </div>

    <div class="jobs__card--title2">
      <h1>Desenvolvedor Frontend</h1>
      <h3>Curitiba - Paraná</h3>
    </div>
  </div>

  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
    Latin
    literature from 45 BC, making it over 2000
  </p>

  <div class="jobs__card--cargaHoraria">
    <div id = "ModoTime">
      <span>Full Time</span>
    </div>

    <div id = "ModoType">
      <span>Remote</span>
    </div>
  </div>

</div>

</section> */
// }
const back = backEndJobs;
const front = frontEndJobs;

function createcard(jobs, iconLetter) {
  const section = document.createElement("section");

  for (let i = 0; i < jobs.length; i++) {
    console.log(jobs[i]);

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

    main.append(section);
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

// function frontCards(jobs, jobsTitle, iconLetter) {
//   let cardTitlle = document.querySelector("#JobsFront");

//   cardTitlle.id = "#JobsFront";
//   cardTitlle.classList.add("jobs__card--title");
//   cardTitlle.innerText = jobsTitle;

//   createcard(jobs, iconLetter);
// }

// frontCards(front, "Frontend Jobs", "G");

function backCards(jobs, jobsTitle, iconLetter) {
  let cardTitlle2 = document.querySelector("#JobsBack");

  cardTitlle2.id = "#JobsBack";
  cardTitlle2.classList.add("jobs__card--title");
  cardTitlle2.innerText = jobsTitle;

  createcard(jobs, iconLetter);
}

backCards(back, "Backend Jobs", "G");
