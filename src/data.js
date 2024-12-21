export const projects = [
  {
    title: "Bubbas Recipes",
    subtitle: "MERN Stack",
    description:
      "Share your recipes with the world! This app was built using the MERN stack. It uses MongoDB and Cloudinary for database storage, Express for the server, React for the front-end and Node.js for the back-end. It also uses Bootstrap for styling.",
    image: "/project-1.gif",
    link: "https://bubbas-recipes.herokuapp.com/",
    github: "https://github.com/yourusername/bubbas-recipes",
    highlights: [
      "Implemented user authentication with JWT",
      "Built responsive UI with Material-UI",
      "Integrated cloud image storage with Cloudinary",
    ],
    dimensions: {
      width: 600,
      height: 400,
    },
    technologies: ["React", "MongoDB", "Express", "Node.js", "Bootstrap"],
  },
  {
    title: "Federation Field Guide",
    subtitle: "Node.js API with CSS Templates",
    description:
      "This app was built using Node.js, Express, MongoDB and CSS. It demonstrates how to create a simple API using Node.js and Express, and showcases the use of CSS templates for an attractive user interface.",
    image: "/project-2.gif",
    link: "https://trek-field-guide.netlify.app/",
    dimensions: {
      width: 600,
      height: 400,
    },
    technologies: ["Node.js", "Express", "MongoDB", "CSS", "EJS"],
  },
];

export const testimonials = [
  {
    quote: "They said they could center a div. They did. I'm still shook.",
    name: "CSS Veteran",
    company: "Stack Overflow",
    image: "/testimonials/confused-cat.jpg"
  },
  {
    quote: "Asked them to fix a bug. They created three new ones. But hey, the original bug is gone!",
    name: "Senior Developer",
    company: "Bug Factory Inc.",
    image: "/testimonials/debugging.jpg"
  },
  {
    quote: "Their code works 60% of the time, every time.",
    name: "Git Blame",
    company: "Version Control Systems",
    image: "/testimonials/git-blame.jpg"
  },
  {
    quote: "I've seen their 'Hello World' program. It only crashed twice.",
    name: "Console.log",
    company: "Terminal Window",
    image: "/testimonials/terminal.jpg"
  },
  {
    quote: "They turned it off and on again without being asked. Hired on the spot!",
    name: "IT Support Lead",
    company: "Tech Solutions",
    image: "/testimonials/it-crowd.jpg"
  }
];

export const skillsList = [
  "JavaScript",
  "React",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Bootstrap",
  "Tailwind CSS",
  "EJS",
  "Git",
  "GitHub",
  "RESTful APIs",
  "Responsive Web Design",
];

export const content = {
  about: {
    intro: "Hi, I'm Catalin. I turn coffee into code and bugs into features.",
    description: "When I'm not wrestling with CSS or sweet-talking APIs, I'm probably debugging code that worked perfectly fine yesterday. I believe in writing code that humans can read and computers might eventually run.",
    mission: "My mission? To build digital experiences that make people smile (or at least reduce the number of times they facepalm)."
  },
  
  skills: {
    intro: "Tech Stack & Superpowers",
    description: "Every developer is a superhero in training. Here's my utility belt of technologies that I've mastered (or at least convinced to work at some time)."
  },
  
  projectsSection: {
    intro: "Apps I've Brought to Life",
    description: "Here's proof that I can actually make things work. Each project is a story of triumph over Stack Overflow and countless coffee cups."
  },
  
  testimonialsSection: {
    intro: "What Humans Say About Me*",
    description: "*Real people, real quotes, real impressed (results may vary, batteries not included)",
    disclaimer: "Warning: These testimonials are about as real as my understanding of CSS specificity."
  },
  
  contact: {
    intro: "Let's Create Something Amazing",
    description: "Got a project? Want to collaborate? Or just want to chat about why JavaScript has so many frameworks? I'm all ears!",
    success: "Message sent! I'll get back to you faster than a Fibonacci sequence.",
    error: "Oops! Looks like the internet gremlins got to the form. Please try again!"
  },
  
  footer: {
    copyright: `© ${new Date().getFullYear()} Built with ❤️ by Catalin Siegling `,
    coffeeCounter: ` while drinking ${(new Date().getFullYear() - 2020) * 1825} cups of coffee`,
    disclaimer: "No pixels were harmed in the making of this website."
  }
};
