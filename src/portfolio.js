/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anton Nocum",
  title: "Hi all, I'm Anton",
  // subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  subTitle: emoji(
    "A passionate Full-Stack Developer 🚀 with 4+ years of experience in building Web Apps using JavaScript / ReactJS / NodeJS and other cool libraries and frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/admn16",
  linkedin: "https://www.linkedin.com/in/antonduanenocum/",
  gmail: "anton.nocum@gmail.com",
  gitlab: "https://gitlab.com/adnocum",
  facebook: "https://www.facebook.com/antonnocum",
  twitter: "https://twitter.com/adnocum",
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL-STACK DEVELOPER WHO LOVES TO MAKE OTHER PEOPLE'S LIVES EASIER WITH CODE",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Render"
    ),
    emoji(
      "⚡ Develop highly sophisticated Full-Stack app using Serverless technologies"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql databases",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Far Eastern University - Diliman",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Feufernlogo.png/290px-Feufernlogo.png",
      subHeader: "B.S. Computer Science",
      duration: "January 2012 - September 2015",
      desc: "Developed a web-based Payroll System for the University.",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-End", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-End",
      progressPercentage: "55%",
    },
    {
      Stack: "Serverless",
      progressPercentage: "50%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Fullstack Web Developer",
      company: "ITAS Global Solutions Inc.",
      companylogo: require("./assets/images/itasLogo.jpg"),
      date: "October 2019 – June 2020",
      desc:
        "Worked on a large full-stack web app",
      descBullets: [
        "Converted designs from Zeplin to React JS code.",
        "Developed and maintained a multi-national web app built with React JS, Node JS + Express, Docker, and Nginx.",
        "Participated in a proof-of-concept project that exposed me to technologies like GraphQL, Koa JS, and Passport JS.",
      ],
    },
    {
      role: "Front-End Engineer",
      company: "GM Yi Xin Holdings Inc.",
      companylogo: require("./assets/images/gmyixinLogo.webp"),
      date: "November 2018 – October 2019",
      desc:
        "Handled the front-end of mostly dashboard and marketing sites, and participated in multiple proof-of-concept projects that exposed me to Google Cloud technologies.",
      descBullets: [
        "Developed and maintained dashboard and client sites built with Vue JS.",
        "Lead the adoption of Vue CLI and Nuxt JS on new projects to enhance development workflow and code maintainability.",
        "Created a tech stack and coding standards for FE Development.",
        "Created a NoSQL database models for our chat service using Lucid Charts.",
        "Created a JavaScript SDK for our chat service using TypeScript, Rollup.js, and NPM for publishing.",
        "Developed an API server with real-time functionality built with Node.js, Express.js, Socket.io, and Firebase Firestore.",
      ],
    },
    {
      role: "Sr. Front-End Web Developer",
      company: "Asia Fusion Technology",
      companylogo: require("./assets/images/aftLogo.jpg"),
      date: "May 2016 – March 2018",
      desc:
        "Handled the front-end of mostly dashboard and marketing sites, and participated in multiple proof-of-concept projects that exposed me to Google Cloud technologies.",
      descBullets: [
        "Lead the development and adoption of React JS as the Front-End UI library to one of the sites that we’ve developed.",
        "Enhanced the team’s workflow by initiating the use of Front-End build tools like Webpack & Gulp.",
        "Maintained and developed dynamic websites using React JS, jQuery, Knockout JS, Require.js, SASS and Bootstrap.",
        "Assisted our SEO analyst on identifying user behaviors that were needed to be tracked.",
        "Assisted our .Net developers on tracing minor bugs on our back-end code.",
        "Worked with Project Managers, Back-end Developers, QA Engineers and Business Analysts to see projects through, from conception to completion.",
        "Used Jira for tracking tasks/issues and Confluence/Google Docs for writing documentations and presentations.",
        "Gave presentations on React JS, NPM, Webpack & ES6+.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  // githubUserName: "admn16", // Change to your github username to view your profile in Contact Section.
  // showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     link: "http://saayahealth.com/",
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     link: "http://nextu.se/",
  //   },
  // ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63 995 389 6271",
  email_address: "anton.nocum@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "adnocum", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
