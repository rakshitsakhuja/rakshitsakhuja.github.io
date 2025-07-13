AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "ChatGPT Prompt Engineering for Developers",
    cardImage: "assets/images/education-page/deeplearning_ai.png",
    moocLink: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
  },
  {
    title: "Building Generative AI Applications with Gradio",
    cardImage: "assets/images/education-page/deeplearning_ai.png",
    moocLink: "https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/",
  },
  {
    title: "Building Intelligent Recommender Systems",
    cardImage: "assets/images/education-page/nvidia.png",
    moocLink: "https://courses.nvidia.com/certificates/",
  },
  {
    title: "Fundamentals of Accelerated Computing with Python (Numba)",
    cardImage: "assets/images/education-page/nvidia.png",
    moocLink: "https://courses.nvidia.com/certificates/",
  },
  {
    title: "NLP with Classification and Vector Spaces",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/classification-vector-spaces-in-nlp",
  }
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear">  
            <div class="card mb-3 mx-auto">
               <div class="content d-flex align-items-center justify-content-center" style="height:120px;">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image" style="max-height:60px; width:auto; display:block; margin:auto;">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Indian Institute of Technology Hyderabad",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Master of Technology in Data Science, 2020-2023",
    description: "<li>Thesis: Survey on Natural Language Understanding for Tabular Data using TAPAS and TableFormer</li><li>Project: Query Auto Completion using Deep Learning</li>",
  },
  {
    heading: "Dr. A.P.J. Abdul Kalam Technical University",
    image: "./assets/images/education-page/timeline-2.svg",
    subheading: "Bachelor of Technology in Computer Science, 2012-2016",
    description: "",
  }
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);