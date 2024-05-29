/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raghav Ravisankar",
  title: "Raghav Ravisankar",
  subTitle: "Full Stack Engineer, AI Researcher, Community Organizer",
  resumeLink:
    "https://docs.google.com/document/d/1R5U53gj4CCsRpiM4OQVyAx53fh4sbeEAEyt_HV3Ai34/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/raghav96",
  linkedin: "https://www.linkedin.com/in/raghavism/",
  gmail: "ravisankarraghav@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/raghav96",
  //medium: "https://medium.com/@raghavism",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  calendly: "https://calendly.com/raghavism",
  //instagram: "https://instagram.com/raghavism",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Java Full Stack | Javascript Full Stack | Machine Learning ",
  skills: [
    emoji(
      "⚡ Proficient in Java, Javascript and Python. Experienced in SQL"  
    ),
    emoji(
      "⚡ Proficient in full-stack web development in Java - Java 8/11, Spring Boot, Hibernate, JSP, Struts, OJB, Maven"  
    ),
    emoji("⚡ Proficient in full-stack web development in Javascript - Typescript, NodeJS, React, Angular, NPM"),
    emoji("⚡ Experienced in AWS technologies such as Lambda, Athena, EC2, S3, RDS, API Gateway"),
    emoji("⚡ Experienced with machine learning - PyTorch, Tensorflow, Keras, Colab, Pandas, Numpy, Langchain"),
    emoji(
      "⚡ Experience in SDLC tools such as Git, Unix, Docker"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Sydney",
      logo: require("./assets/images/university-of-sydney-logo.png"),
      subHeader: "Master of Professional Engineering - Software (Accelerated)",
      duration: "February 2022 - December 2023",
      desc: "Completed a Master's Degree in Software Engineering",
      descBullets: [
        "Capstone Thesis - Research in Federated Semi-Supervised Graph Learning",
        "Coursework in Machine Learning, Web Development, Parallel Computing, and Cyber Security"
      ]
    },
    {
      schoolName: "University of California San Diego",
      logo: require("./assets/images/ucsd.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - December 2017",
      desc: "Completed a bachelor's degree in Computer Science with a minor in Cognitive Science",
      descBullets: ["Participated in Sitaare - South Asian A Capella"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "60%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "QSSTUDIO",
      companylogo: require("./assets/images/qsstudio.jpeg"),
      date: "Apr 2022 – Aug 2022",
      desc: "Internship at boutique software consultancy specializing in web and mobile applications.",
      descBullets: [
        "Delivered a successful blog feature for a skincare website using KeystoneJS, running on AWS EC2.",
        "Made upgrades to a mine monitoring software API in NodeJS and MongoDB, hosted on AWS Lambda."
      ]
    },
    {
      role: "Software Engineer",
      company: "Crayon Data",
      companylogo: require("./assets/images/crayonDataLogo.jpg"),
      date: "Jun 2021 – Feb 2022",
      desc: "NodeJS developer position at banking analytics scaleup.",
      descBullets: [
        "Serverless cloud-based software system development and maintenance for KBZ Bank in Myanmar using React, Node.js, GraphQL, and AWS Lambda.",
        "Supported legacy applications running on Java, Spring Boot, and MySQL",
        "Developed an internal tool for fully secure financial report email delivery to clients using React, Node.js, AWS Lambda, AWS S3, and AWS Athena."
      ]
    },
    {
      role: "Java Developer",
      company: "Streamlyne",
      companylogo: require("./assets/images/streamlyne.jpeg"),
      date: "Sept 2018 – Feb 2021",
      desc: "Java developer at an cloud-based research administration ERP software company.",
      descBullets: [
        "Developing software in Java, Servlets, Struts, JSP, Javascript, JDBC, XML, SQL",
        "Independently managed a cloud-based faculty application manager application, with client interaction, requirement gathering, generating software design strategies, and overall software implementation; using Java, Hibernate, MySQL, JSP, and Java Servlet Pages, Amazon S3."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ProtoX: Ideation to Creation Pre-Accelerator Program",
      subtitle:
        "INCUBATE’s Pre-Accelerator Program is a free part-time mentoring program created to support individuals and teams from within the University of Sydney community and beyond who are committed to building a startup or delivering impactful research.",
      image: require("./assets/images/images.png"),
      imageAlt: "Incubate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://au.badgr.com/public/assertions/2Z1Qnx3lTzm6L-lvvelLCA"
        }
      ]
    },
    {
      title: "Proto: 8-Week Startup Fundamentals Course",
      subtitle:
        "INCUBATE’s Startup Fundamentals Course is an introduction to all things startup: fundamental frameworks, how to cultivate an entrepreneurial mindset, build out your network and refine your business idea/s.",
      image: require("./assets/images/images.png"),
      imageAlt: "Incubate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://au.badgr.com/public/assertions/upWyXn6eTaWT-ITAsZkCLQ"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Community",
  subtitle: emoji(
    "I enjoy being a part of the Sydney Startup ecosystem and organizing the community"
  ),

  talks: [
    {
      title: "Open Coffee Sydney",
      subtitle: "Organizing an informal networking event for the Sydney startup community.⁣",
      url: "https://www.linkedin.com/company/96582088/admin/feed/posts/"
      //event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Build Club",
      subtitle: "Building AI projects on nights and weekends.⁣",
      url: "https://www.linkedin.com/company/96582088/admin/feed/posts/"
      //event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+92-0000000000",
  email_address: "ravisankarraghav@gmail.com"
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
