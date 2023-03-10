/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suraj Mishra",
  title: "Greetings, fellow code wranglers!",
  subTitle: emoji(
    "I am Suraj, a developer thrilled to have piqued your curiosity. As an ardent Full Stack Software Developer, I bring a wealth of experience in crafting exceptional Progressive Web Applications (PWA) using cutting-edge libraries and frameworks such as JavaScript, Reactjs, Nodejs, Angular, and other innovative technologies. Let's collaborate and bring your ideas to life!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ri-NwC46Nz-C5BHdMApzmUHEfj0fcqui/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/smsuraj100",
  linkedin: "https://www.linkedin.com/in/mishra-suraj/",
  gmail: "smsuraj100@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate Full Stack Developer eager to explore a diverse range of tech stacks",
  skills: [
    emoji(
      "⚡ Create dynamic and interactive front-end user interfaces for your web, tablet, and mobile applications"
    ),
    emoji(
      "⚡ Design database schemas and documentation utilizing NoSQL databases, including MongoDB and CosmosDB. Develop RESTful APIs to enable CRUD operations on these databases"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/UFLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2021 - May 2023"
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/UniversityOfMumbaiLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "June 2013 - July 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Engineer",
      company: "RBFCU",
      companylogo: require("./assets/images/RBFCU_logo.png"),
      date: "August 2022 – December 2022",
      descBullets: [
        "Led the development of a comprehensive fund transfer module in Angular 9, which included 17 web pages and over 25 reactive forms, resulting in a seamless and user-friendly experience for both internal and external users",
        "Incorporated advanced features such as lazy loading, state management, and routing in the fund transfer module, resulting in a highly efficient and scalable application",
        "Devised and implemented end-to-end testing for the fund transfer module using Cypress, achieving a remarkable code coverage of over 95%, ensuring the reliability and robustness of the application",
        "Collaborated with cross-functional teams to gather requirements, design, develop, and deploy the fund transfer module, ensuring timely delivery and adherence to project timelines",
        "Demonstrated excellent problem-solving skills by identifying and resolving complex technical issues during the development of the fund transfer module, resulting in a highly stable and reliable application",
        "Mentored junior developers on Angular 9, reactive forms, state management, and Cypress testing, enhancing their technical skills and contributing to the overall success of the project"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Tera Insights LLC",
      companylogo: require("./assets/images/tera-insights.png"),
      date: "May 2022 – August 2022",
      descBullets:[
        "Designing and implementing the frontend user interface of the TiCrypt application using the Angular9 framework",
        "Creating reusable UI components, directives, and pipes to standardize the front-end development process",
        "Implementing reactive libraries using observables to facilitate seamless data transfer to the front end and eliminate the need for page refreshes",
        "Resolving 70+ issues identified by the testing team during a 3-month internship",
        "Collaborating with the team on GitHub to manage code versions and contributions",
        "Writing efficient and well-documented code, following best practices and industry standards",
        "Debugging and fixing any bugs or issues in the front-end code",
        "Staying updated with the latest advancements in front-end development technologies and tools"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Cimpress",
      companylogo: require("./assets/images/cimpress.png"),
      date: "April 2021 – July 2021",
      descBullets:[
        "Conceptualizing and developing the customer-facing module consisting of 8 web pages using ReactJS",
        "Creating over 10 APIs in NodeJS to be consumed by the front end",
        "Deploying the complete module on the AWS S3 bucket",
        "Writing test cases to improve code coverage of multiple repositories from 0 to over 85%",
        "Utilizing HTML, CSS, JavaScript, and ESLint to write clean and maintainable code",
        "Debugging and fixing any bugs or issues in the frontend or backend code",
        "Collaborating with the team on JIRA to manage tasks and project progress",
        "Testing the APIs using Postman to ensure their functionality and reliability"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Tata Digital Ltd",
      companylogo: require("./assets/images/tdl.png"),
      date: "Novemner 2019 – April 2021",
      descBullets:[
        "Elevating the user experience by single-handedly revamping the Tata Motors website to incorporate an end-to-end car buying journey",
        "Architecting the backend of Tata Motors with innovative use of Apollo GraphQL server, and crafting over 20 APIs in NodeJS to seamlessly integrate with Cosmos DB",
        "Deploying the backend solution as an efficient Azure serverless function, primed for consumption by the Tata Motors front end",
        "Guiding the development of a cutting-edge responsive PWA using React and Apollo clients to access GraphQL APIs",
        "Infusing the web applications for Tata Motors and Tata Bridgital with 3D car models and AR, enhancing the user experience",
        "Overseeing code reviews and offering mentorship to junior developers, ensuring adherence to best coding practices",
        "Participating in Agile-based calls such as Sprint Planning and Stand-ups, honing interpersonal and leadership skills"
      ]
    },
    {
      role: "Software Engineer",
      company: "Larsen & Toubro Infotech",
      companylogo: require("./assets/images/LTI_Logo.png"),
      date: "June 2017 – November 2019",
      descBullets:[
        "Performing migration of the HBO-MIDAS application from a native Java application to Angular8 to improve the user experience",
        "Implementing the state management of the application using Angular’s NgRx library, with actions, effects, and reducers",
        "Developing the Personal Insurance module using Angular4 and dotnet web APIs",
        "Performing browser testing using Selenium Web Driver Io",
        "Adhering to the Test-Driven Development (TDD) approach by creating and executing unit test cases using Jasmine",
        "Utilizing Angular-4/7, ReactJS, NodeJS, and DotNet to write clean and maintainable code",
        "Collaborating with the team on JIRA, Bitbucket, Bamboo, PCF, and Jenkins to manage tasks and project progress",
        "Debugging and fixing any bugs or issues in the frontend or backend code",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Relevant Projects",
  projects: [
    {
      projectName: "Parks - parking solution",
      projectDesc: "ParKs is a software engineering course project developed at the University of Florida. The project aims to tackle the issue of parking in big cities by implementing a Progressive Web Application (PWA) using React and Redux. The application allows users to find and reserve parking spots in their desired location using an interactive map, and handles payments securely with Stripe",
      footerLink: [
        {
          name: "View Github",
          url: "https://github.com/nishaaaaaant/CEN5035-SE-ParKS"
        }
      ]
    },
    {
      projectName: "Twitter clone",
      projectDesc: "I developed the Twitter clone project as part of a distributed operating system course at the University of Florida. The project involved engineering a terminal application with features similar to Twitter, including login/logout, tweeting, retweeting, and follower management. Using F# and Python programming languages, I designed the application to handle up to 10,000 concurrent users while maintaining a response time of less than 100ms by implementing efficient concurrency and distributed communication using the Actor Model in F#. I also developed a user-friendly terminal interface using Python and WebSocket, resulting in a robust and scalable Twitter engine with a seamless user experience. Through extensive testing, the project achieved an average response time of less than 1 second for all user interactions, demonstrating the ability to build highly responsive and reliable systems using modern programming languages and efficient concurrency models",
      footerLink: [
        {
          name: "View Github",
          url: "https://github.com/smsuraj100/DOSP_Proj4.2"
        }
      ]
    },
    {
      projectName: "Compiler",
      projectDesc: "As part of my coursework in Programming Language Principles at the University of Florida, I successfully designed and formulated a comprehensive compiler from scratch. The project involved utilizing Java and JUnit technologies to handle up to 1,000 lines of code per second and produce compiled code with an average of 99.9% accuracy. Throughout the project, I constructed key components such as Lexar, Parser, Abstract Syntax Tree, and Code Generation, and thoroughly tested and validated the compiler using JUnit. This resulted in 100% test coverage, ensuring the reliability and accuracy of the compiled code",
      footerLink: [
        {
          name: "View Github",
          url: "https://github.com/smsuraj100/Suraj_Mishra_93675136_hw6"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-3527923511",
  email_address: "smsuraj100@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable
};
