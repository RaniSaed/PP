import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "full-stack web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "team leader",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "about React",
        icon: "",
        iconBg: "#383E56",
        date: "jan 2023 - April 2024",
        points: [
            "As an experienced React.js developer, I specialize in crafting dynamic user interfaces with React.js,",
            "proficiently merging JavaScript, HTML, and CSS for efficient component development and state management,With a keen eye for design, I transform intricate mockups into functional components while prioritizing performance optimization and cross-browser compatibility. ",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "native in React",
        icon: "",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Feb 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Dedicated to maintaining clean and scalable code, I stay abreast of industry trends, ensuring my solutions are robust and forward-looking.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "forntend Web Developer",
        company_name: "Frontend",
        icon: "",
        iconBg: "#383E56",
        date: "april 2022 - april 2024",
        points: [
            "As a freelance web developer, I offer expertise in crafting tailored web solutions for clients. With proficiency in frontend technologies like HTML, CSS, and JavaScript",
            "alongside frameworks such as React.js and Bootstrap, I create captivating user interfaces. Additionally, my skills extend to backend development using Node.js, Express, and databases like MongoDB, leveraging Mongoose for seamless data management",
            "With experience in tools like Vite for rapid development, I ensure efficient project delivery.",
            "Committed to delivering high-quality work on time and within budget, I thrive in collaborating closely with clients to bring their visions to life.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Full stack freelancer",
        icon: "",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "I specialize in full-stack web development, proficient in both frontend and backend",
            "proficient React.js and backend with Node.js. With a solid foundation in HTML, CSS, and JavaScript, ",
            "I seamlessly integrate frontend and backend components for cohesive web applications. My expertise spans from creating engaging user interfaces to implementing robust server logic.",
            "Continuously learning and adapting to new technologies, I deliver scalable and innovative solutions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "random client'1'",
        designation: "",
        company: "freelancer",
        image: "",
    },
    {
        testimonial:
            "Connecting creators with captivating web design, I specialize in crafting visually stunning and user-friendly digital experiences.",
        name: "Random client'2'",
        designation: "freelancer",
        company: "",
        image: "",
    },
    {
        testimonial:
            "As a team leader, I excel in problem-solving, guiding my team through challenges to deliver innovative solutions and achieve project success.",
        name: "random client'3'",
        designation: "freelancer",
        company: "",
        image: "",
    },
];

const projects = [
    {
        name: "yelmpcamp Rent",
        description:
            "Web-based platform that allows users to search, login/logout, and manage yelpcamp rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
