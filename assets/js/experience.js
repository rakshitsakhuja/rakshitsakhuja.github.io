//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Data Scientist",
    cardImage: "assets/images/experience-page/mediacorp-seeklogo.png",
    place: "Mediacorp Pte Ltd, Singapore",
    time: "Nov 2022 – Present",
    desp: "<li>Leading the development of video recommendation models (mewatch), managing a cross-functional team to enhance content discovery across multiple platforms (web, mobile, TV).</li><li>Developed LTR models (LightGBM, SBERT, CatBoost) with significant CTR improvements.</li><li>Designed and deployed in-house vector indexing API (gRPC, PyTorch) for real-time recommendations.</li><li>Built multiple recommendation models (GRU4Rec, content-based, collaborative filtering).</li><li>Implemented ML pipeline deployments using cloud services, CI/CD, Databricks, Kubernetes.</li><li>Executed large-scale A/B testing for model performance.</li><li>Leveraged LLMs for metadata enhancement and GenAI-based SQL generation pipelines.</li><li>Conducted technical workshops on RAGs using LlamaIndex.</li>"
  },
  {
    title: "Senior Data Scientist",
    cardImage: "assets/images/experience-page/agreeya-logo.png",
    place: "AgreeYa Solutions (Evalueserve), Noida, India",
    time: "Nov 2020 – Oct 2022",
    desp: "<li>Built a neural search engine using Elasticsearch for B2B clients, indexing documents and news, with autosuggested filters for organization and location using Named Entity Recognition.</li><li>Developed a recommendation engine using collaborative filtering for personalized news and document suggestions.</li><li>Implemented autocorrection functionality using Levenshtein distance (Peter Norvig's method), Soundex, and a custom MLE-based algorithm to select the best correction.</li><li>Built low-latency semantic search features such as related entities and related search queries using SBERT, transformers, FAISS.</li><li>Fine-tuned NER model using spaCy and PyTorch with BERT to extract locations and organizations, enabling entity-specific page generation.</li><li>Developed REST APIs using Python, Flask, Gunicorn, Nginx, and Supervisord to serve the features within the search engine.</li>"
  },
  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/escalent-logo.png",
    place: "Grail Insights, Noida, India",
    time: "Aug 2018 – Nov 2020",
    desp: "<li>Demographic Modelling: Built multi-class classification models to predict demographics for POS data and feature engineered consumer KPIs related to buyer behavior for a retail client [Python, SQL, sci-kit-learn, NumPy, pandas].</li><li>Sentiment Analysis: For Quality Service Reviews, leveraged Naive Bayes as the baseline model, along with LogisticRegression/KNN/Linear SVM and LSTM(RNN) with mini-batches using Word Embeddings [Pytorch, sci-kit-learn, LSTM].</li><li>Built an in-house social media listening tool to preprocess open ends via NLP techniques such as Named Entity Recognition, TopicModeling(LDA), Word Embeddings (word2vec, glove), and Word Clouds using tf-idf to derive customized insights [Python, spaCy, nltk, NLP].</li>"
  },
  {
    title: "ETL Developer",
    cardImage: "assets/images/experience-page/tcs-tata-consultancy-services-seeklogo.png",
    place: "Tata Consultancy Services, Mumbai, India",
    time: "Jun 2016 – Aug 2018",
    desp: "<li>Built ETL pipelines and automated workflows using Informatica, Teradata, Python, Unix, and shell script; performed EDA to clean and merge data from multiple sources.</li>"
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Co-Author, Manning Publications",
    image: "assets/images/experience-page/manning.png",
    time: "2023 – Present",
    desp: "Co-authored a LiveProject with Manning Publications on building domain-specific language models."
  },
  {
    title: "Mentor, Great Learning",
    image: "assets/images/experience-page/great_learning.png",
    time: "2021 – Present",
    desp: "Mentored students in data science and machine learning, guiding them through projects and career development."
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
