AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full Stack Web Developer",
    cardImage: "assets/images/experience-page/firmcheckerlogo.png",
    place: "FirmChecker",
    time: "(Present)",
    desp: "<li>Working as a  Full Stack Web Developer at Firmchecker to work on the business's product and liase with team to think, design, develop and deliever the best possible modern web product.</li><li>Work closely with senior developers and CEO to plan and design the new features of the product and work on them.</li><li>Recently launched homepage of firmchecker is my current work on https://www.firmchecker.com.au/ website.</li><li>Technologies used: ReactJS, Javascript, AWS(DyanmoDB, AWS services,), Mysql, API, Adobe XD(for prototyping new feature design), php, Unit testing</li>",
  },
  {
    title: "Junior Develper",
    cardImage: "assets/images/experience-page/childhr.svg",
    place: "ChildHr / DiffuzeHR",
    time: "(Contract - 3 months)",
    desp: "<li>Worked with ChildHR and DiffuzeHr , two businesses owned by one to work on their product specialised in HR management with document management and several other features.</li><li>Worked on https://www.childhr.com.au/ and https://diffuzehr.com.au/ websites as per business requirements.</li><li>Liased with CTO to work on different priority based tasks as per business rules</li><li>Technologies used were: php, HTML/CSS/Bootstrap, Javascript, MySQL</li>",
  },
  {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/omm-logo.png",
    place: "OurMoneyMarket / Handypay",
    time: "(multiple roles - part-time, full-time)",
    desp:"<li>Started as a part-time employee at OurMoneyMarket and Handypay later worked as a full-time employee, to work on both of the products as per business requirements</li><li>Worked on the CRM tool of the organisation to build a end-to-end sales and marketing tool helping in better leads transformation.</li><li>Worked closely with Senior Developers and CTO to develop smart-optimised products, one of the application closely worked on was Vendor Portal used by different vendors of handypay</li><li>Worked on different pages of https://ourmoneymarket.com/ and https://app.handypay.com.au/ websites to meet stakeholders requirements.</li><li>Technologies used were: AngularJS, Salesforce APEX , MySQL, API development, HTML/CSS/Boostrap, Landing Pages using Javascript core and web designing languages.</li>",
  },
  {
    title: "Application Developer",
    cardImage: "assets/images/experience-page/unitedcologo.png",
    place: "United Co.",
    time: "(Contract - 8 months)",
    desp: "<li>Worked on United Co's website as a Application Developer to meet business requireemnts adding on coding logic with the best reliable technology</li><li>Worked on integrations of several third-party application to be able to wkr smoothly with United Co's application for better user-experience.</li><li>Technoloiges used were: Python -Flask for API integrations, php for custom website logic, ReactJS for managing the application side of the website, Javsscript, HTML/CSS for cosmetic functionalities on the website as per busienss rules.</li>",
  },
  {
    title: "Developer",
    cardImage: "assets/images/experience-page/relaypaylogo.png",
    place: "RelayPay",
    time: "(Part-time - Internship - 3 months)",
    desp: "<li>Worked as a developer with relaypay to help in the development of their product relayay.io and to help in the growth of the startup</li><li>Worked closely with the CEO to maintain the marketing events and research about the cryptocurrency trending keywords, hence embedding them in the product to have better SEO.</li><li>Technologies used were: ReactJS, Python, API development, Javascript, TDD(Unit testing, Integration Testing, Automated Testing.)</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/dell.png",
    place: "Dell Technologies",
    time: "2 years -(2018 - 2020)",
    desp: "<li>Worked as a Software Engineer being a part of dell's automation team to build, develop, design numeorus applications to help in process optimisation and reduce manual efforts , bringing smarter solutions.</li><li>Also developed tools working as ROBOTS using RPA technology to deleiver scheduling based applications used within dell to upload banners on occasions like <i>BLACK FRIDAY SALE`</i>` on different coutries domain.</li><li>During my two years of work at dell, the tools I have worked on are currently being used by different teams within dell fulfilling the application vision.</li><li>The technologies worked on were Python, Flask and Django frameworks, MYSQL, MongoDB, AngularJS, ReactJS, Javascript core, HTML/CSS, RPA(Robotic Process Automation tools and frameworks), TDD ( Unit testing, Integration Testing, Automated Testing.)</li>",
  },
  {
    title: "Winter Internship - Software Intern",
    cardImage: "assets/images/experience-page/emc.png",
    place: "Dell EMC Corporation",
    time: "6 months - 2018",
    desp: "<li>Worked as a Software Intern and helped TMX team of DELL EMC to deliever smooth dell.com pages.</li><li>Worked on numerous dell.com pages for different countries using Salesforce Web VisualPage Designer , adding custom code as per business rule and requirements.</li><li>The pages designed and built are currently used on different occassions of maketing and advertising on dell.com website</li><li>In addition, worked on several softwares to help TMX team(Team Member Experience) to enhace workability and get optimistic results.</li><li>Technologies used were - Javascript, Python, Salesforce APEX scripting, Mysql, TDD (Unit testing only), RDBMS, HTML/CSS/BOOTSTRAP</li>",
  },
  {
    title: "Summer Internship - Software Developer Intern",
    cardImage: "assets/images/experience-page/dell.png",
    place: "Dell Technologies",
    time: "6 months -2017",
    desp: "<li>Worked on my first IT industry based real-project for dell, currently globally used within dell by various teams.</li> <li>Developed an application called <strong>EZYBROWSE</strong> which reduced total manual hours of 1250 per annum of dell employees.</li><li>The tool was buld with a aim to automate several internal processes to be able to fetch URL'S FOR 28 LOCALES & 180 COUNTRIES for dell.com</li><li>The teams are able to use this tool now and able to fetch links just with a single click with less human labour required.</li><li>Technologies used were - ASP.NET, Javascript, API development, php, HTML/CSS/BOOTSTRAP, MySQL</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <div style="background-color:white;">
        <img src="${cardImage}" class="featured-image"/" style="margin-top:85%;">
        </div>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol style="color: grey; font-weight: bold; justify-content:left;">
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Dell Hackathon Runner-Up",
    cardImage: "assets/images/experience-page/dellhackathon.jpeg",
    description:
      "Runner-up at one of the DELL organised Hackathon, worked with a team to develop a innovative tool using different technologies with a aim to achieve Artificial Intelligence",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/rusu.png",
    description:
      "Worked as a volunteer at RMIT RUSU(RMIT Student Union) to socialise and help in different events.",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
