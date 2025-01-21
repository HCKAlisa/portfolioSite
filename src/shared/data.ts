import harvestOnslaught from "@/assets/Projects/HarvestOnslaught.jpg";
import gus from "@/assets/Projects/Gus.jpeg";
import digiqal from "@/assets/Projects/Digiqal.png";
import fyp from "@/assets/Projects/FYP.jpg";
import portfolio from "@/assets/Projects/Portfolio.png";
import portfoliov2 from "@/assets/Projects/PortfolioV2.png";
import characterSelect from "@/assets/Projects/characterSelect.png";
// import placeholder from "@/assets/Projects/placeholder.png";
import HOdesign from "@/assets/Projects/HO/design.png";
//import settings from "@/assets/Projects/HO/settings.gif"
//import loading from "@/assets/Projects/HO/loading.gif"
//import compass from "@/assets/Projects/HO/campass.gif"
//import tank from "@/assets/Projects/HO/tank.gif"
//import hud from "@/assets/Projects/HO/hud.gif"
//import shader from "@/assets/Projects/HO/shader.gif"
import gacha from "@/assets/Projects/gachaFigma.png"
//import gachaFull from "@/assets/Projects/gachaFull.gif"
import cpp from "@/assets/Icons/cpp.png"
import csharp from "@/assets/Icons/CSharp.png"
import figma from "@/assets/Icons/figma.png"
import unreal from "@/assets/Icons/unreal.png"
import aftereffect from "@/assets/Icons/adobe-after-effects.png"
import photoshop from "@/assets/Icons/adobe-photoshop.png"
import premiere from "@/assets/Icons/adobe-premiere-pro.png"
import australia from "@/assets/Icons/australiaflag.png"
import cakephp from "@/assets/Icons/cakephp.png"
import canada from "@/assets/Icons/canada.png"
import css from "@/assets/Icons/css.png"
import cypress from "@/assets/Icons/cypress.jpeg"
import davinci from "@/assets/Icons/davinci.png"
import git from "@/assets/Icons/git.png"
import hongkong from "@/assets/Icons/hongkongflag.png"
import html from "@/assets/Icons/html.png"
import javascript from "@/assets/Icons/javascript.png"
import maya from "@/assets/Icons/maya.png"
import mysql from "@/assets/Icons/mysql.png"
import mongodb from "@/assets/Icons/mongodb.png"
import nextjs from "@/assets/Icons/nextjs.png"
import nodejs from "@/assets/Icons/nodejs.png"
import reactjs from "@/assets/Icons/reactjs.png"
import tailwind from "@/assets/Icons/tailwind.png"
import threejs from "@/assets/Icons/threejs.svg"
import typescript from "@/assets/Icons/typescript.png"
import unity from "@/assets/Icons/unity.png"
import vue from "@/assets/Icons/vue.png"
import wordpress from "@/assets/Icons/wordpress.png"
import hactl from "@/assets/Logo/hactl.png"
import idostuff from "@/assets/Logo/iDoStuff.png"
import monash from "@/assets/Logo/monash.png"
import vfs from "@/assets/Logo/vfs.png"
import pwc from "@/assets/Logo/pwc.png"
import { EducationType, ProjectDetailsType, ProjectType, SkillType, WorkExperienceType } from "./types";

const ProjectsOverview: Array<ProjectType> = [
    {
        name: "Harvest Onslaught",
        category: "game",
        engine: "Unreal Engine 5",
        image: harvestOnslaught,
        withDetails: true,
    },
    {
        name: "Gus",
        category:"game",
        engine: "Unity",
        image: gus,
        withDetails: true,
    },
    {
        name: "Gacha Game Demo",
        category:"game",
        engine: "Unreal Engine 5",
        image: characterSelect,
        withDetails: true,
    },
    {
        name: "React + TypeScript Portfolio Website",
        category:"web",
        engine: "React.js + TypeScript",
        link: "https://gitlab.com/alisaho9831/portfoliov2",
        image: portfoliov2,
    },
    {
        name: "Digiqal Company Website",
        category:"web",
        engine: "Vue.js",
        image: digiqal,
    },
    {
        name: "Ecommerce Website",
        category:"web",
        engine: "CakePHP",
        link: "https://gitlab.com/alisaho9831/2019-fit-final-year-project",
        image: fyp,
    },
    {
        name: "3D Portfolio Website",
        category:"web",
        engine: "React.js + Three.js",
        link: "https://alisaho9831.gitlab.io/portfolio/",
        image: portfolio,
    },
];

const ProjectDetails: Array<ProjectDetailsType> = [
    {
        name: "Harvest Onslaught",
        category: "game",
        position: "UI & Gameplay programmer - UI Designer - Technical Artist",
        engine: "Unreal Engine 5",
        // banner: hud,
        youtubeBanner: "https://www.youtube.com/embed/34lmX0Q907g?si=q7euaHPWiNF0FgLG",
        youtubeId: "34lmX0Q907g",
        description: "Harvest Onslaught is a third-person, behind the character, Horde Shooter, Mech game where the player takes on the role of a ex-engineer, now farmer, who is isolated on Planet B-610. You are surrounded by other Alien insect inhabitants, Xylothraks,  but still protected by the self engineered energy barrier that keeps them out and his farmlands protected. However, somehow, the aliens got in and destroyed crucial equipment, and your generator is now threatened to fail. By using your mech ISO, you will be forced to defend yourself from the oncoming onslaught of enemies.",
        shippedLink: "https://vfs-gdpg.itch.io/harvest-onslaught",
        skills: [
            {id: "cpp"},
            {id: "unreal"},
            {id: "figma"}
        ],
        features: [
            {
                title: "Design and create assets for UI using Figma",
                description: "I used Figma to design the HUD of our game. I have demonstrated my versatile skillset in the creation of an immersive in-game User Interface for this project. By carefully designing and producing assets specifically for the game's UI, I ensured a seamless player experience that enhances the overall gameplay.",
                image: HOdesign,
                link: "https://www.figma.com/design/N4xBcporU3AAqO8I6jRArR/Harvest-Onslaught?node-id=0-1&t=1NLm8mq9yhUgFhjr-1",
            },
            {
                title: "Setting Menu with List View",
                description: "In order to provide players with an organized and user-friendly experience, I created the project's Setting Menu using the powerful List View component by using Common UI in Unreal Engine 5. This robust solution allowed me to efficiently manage a variety of settings within the game, including graphics and audio. The Setting Menu is designed to scale with the growing complexity of the game, allowing for easy expansion as new settings are added or existing ones are refined. The List View allows for easy addition, removal, and reordering of setting options, ensuring that the menu remains adaptable and relevant throughout the development process.",
                // image: settings,
                youtube: "https://www.youtube.com/embed/Fb7wlpyEuH4?si=65BySW6p5LVIRIQU",
                youtubeId: "Fb7wlpyEuH4",
            },
            {
                title: "Created diegetic UI for Ultimate bar",
                description: "I designed and created a custom shader for the diegetic UI as our Ultimate Bar. This essential in-game element provided players with necessary information while maintaining a consistent and realistic atmosphere.",
                // image: tank,
                youtube: "https://www.youtube.com/embed/sDO1apiwLzA?si=3g6UlkjN8KnWFUJl",
                youtubeId: "sDO1apiwLzA",
            },
            {
                title: "Compass Bar",
                description: "To ensure that players remain oriented within the game world, I designed and implemented a functional and intuitive Compass Bar. This essential navigational tool provided players with critical information about their location, helping them to navigate effectively through the game's vast environments.",
                // image: compass,
                youtube: "https://www.youtube.com/embed/7CUnOny6yLY?si=qf0qcMj3Tpksaal2",
                youtubeId: "7CUnOny6yLY",
            },
            {
                title: "Loading Screen",
                description: "To ensure a smooth and engaging experience for players, I created an attractive and informative Loading Screen using the powerful Subsystem component in Unreal Engine 5. This customizable solution allowed me to display key information and artwork during load times, keeping players engaged and informed.",
                // image: loading,
                youtube: "https://www.youtube.com/embed/1iD73yeZmvM?si=Z0hkZhJUNHJTwtUK",
                youtubeId: "1iD73yeZmvM",
            },
            {
                title: "Shaders and VFX",
                description: "To elevate the visual appeal and immersion of the project, I created custom shaders and Visual Effects (VFX) for both characters and User Interface (UI) elements. By utilizing these advanced techniques, I was able to create unique and captivating effects that brought the game to life. All UI elements were implemented using custom shaders, ensuring a cohesive and polished look that complemented the game's overall aesthetic. By creating custom shaders and VFX, I was able to optimize performance and ensure smooth gameplay without sacrificing visual quality.",
                // image: shader,
                youtube: "https://www.youtube.com/embed/_NdckrNSJYM?si=Mp7Vh133LhTPvyVC",
                youtubeId: "_NdckrNSJYM",
            },
        ]
    },
    {
        name: "Gus",
        category: "game",
        position: "AI & UI Programmer",
        engine: "Unity",
        // banner: gachaFull,
        youtubeId: "DFZzzRaVGMY",
        youtubeBanner: "https://www.youtube.com/embed/DFZzzRaVGMY?si=f3I60tY4BE4jbPOC",
        description: "Gus is a 2D side scroller hack & slash platformer based in a medieval fantasy era where you play as Gus, a blacksmith on the path of revenge. In Gus, players build up and use Gus’ Impatience Meter during combat as Gus performs more aggressive actions, causing him to be more reckless as he makes his way to get revenge for the death of his wife and the capture of his daughter from a sinister necromancer.",
        shippedLink: "https://liquidpxl.itch.io/gus",
        skills: [
            {id: "unity"}
        ],
        features: [
            {
                title: "Melee enemy - Skeleton",
                description: "Engage in intense melee combat against your enemies, wielding swift and deadly swords. Utilize quick and strategic movements to close in on the formidable character known as Gus, dealing significant damage in the process.",
                youtube: "https://www.youtube.com/embed/tlmoboIGkTI?si=YkdWNnqp8teJvXz8",
                youtubeId: "tlmoboIGkTI",
            },
            {
                title: "Long range enemy - Archer",
                description: "The primary characteristic of this entity is its relative immobility, a trait that sets it apart from other characters in the narrative. Despite being stationary, it poses a significant threat to Gus through its repeated use of bows to propel projectiles, specifically arrows, towards him. This consistent action forms a recurring theme in their interactions, highlighting the entity’s strategic approach and potential danger.",
                youtube: "https://www.youtube.com/embed/6cyusW_vd-A?si=6Yt2UTNMZJ-3PtDb",
                youtubeId: "6cyusW_vd-A",
            },
            {
                title: "Heavy attack enemy - Golem",
                description: " Encounter a formidable adversary, characterized by its deliberate, sluggish movements, yet possessing an increased health pool and dealing substantial damage upon approaching Gus. This tanky enemy serves as a significant challenge due to its robust nature, requiring strategic maneuvers and tactical awareness from our hero, Gus, in order to overcome it.",
                youtube: "https://www.youtube.com/embed/JvBLjbgILF8?si=pp-yaL7dj1n11Y8X",
                youtubeId: "JvBLjbgILF8",
            },
            {
                title: "Event system",
                description: "I establish an intricate event system that allows players to actively engage and initiate encounters within the game world. This interactive approach adds depth and excitement to the gaming experience, as players are not merely passive observers but active participants in the unfolding narrative.",
                youtube: "https://www.youtube.com/embed/HjsFepIwdr0?si=14_nk_Fb3_mN03Jg",
                youtubeId: "HjsFepIwdr0",
            },
        ]
    },
    {
        name: "Gacha Game Demo",
        category: "game",
        position: "UI Programmer & Designer",
        engine: "Unreal Engine 5",
        // banner: gachaFull,
        youtubeId: "e7wz6fIXiDo",
        youtubeBanner: "https://www.youtube.com/embed/e7wz6fIXiDo?si=kvEPDsZ5uWUjIn94",
        description: "Gacha Game Demo is a prototype mainly focusing on the user interface.",
        gitLink: "https://github.com/PG26Alisa/ChampionSelectScreenPrototype",
        skills: [
            {id: "unreal"},
            {id: "figma"}
        ],
        features: [
            {
                title: "Design and create the wireframe for UI using Figma",
                description: "In order to showcase the potential of our upcoming Gacha-style game, I designed and developed an engaging and intuitive Character Selection Screen. This essential interface provided players with a quick and easy way to choose their preferred character, setting the stage for exciting gameplay experiences.",
                image: gacha,
                link: "https://www.figma.com/proto/E4P6EsFhJmhCRx2FxjQvK3/PG26-Alisa-User-Experience-A4-(Copy)?node-id=2039-36&t=KIViqvtbRDMFlS68-1",
            },
            {
                title: "Character selection with Tile View",
                description: "To provide players with an efficient and engaging way to choose their preferred characters, I designed and developed a dynamic Character Selection Screen using the powerful Tile View component in Unreal Engine 5. This solution allowed me to display multiple characters at once while also providing a filter feature to help players find specific characters easily.",
                image: characterSelect,
            },
        ]
    },
];

const Skills: Array<SkillType> = [
    {
        id: "cpp",
        name: "C++",
        image: cpp,
        category: "game"
    },
    {
        id: "unreal",
        name: "Unreal 5",
        image: unreal,
        category: "game"
    },
    {
        id: "figma",
        name: "Figma",
        image: figma,
        category: "tool"
    },
    {
        id: "html",
        name: "HTML",
        image: html,
        category: "web"
    },
    {
        id: "css",
        name: "CSS",
        image: css,
        category: "web"
    },
    {
        id: "javascript",
        name: "JavaScript",
        image: javascript,
        category: "web"
    },
    {
        id: "typescript",
        name: "TypeScript",
        image: typescript,
        category: "web"
    },
    {
        id: "git",
        name: "Git",
        image: git,
        category: "tool"
    },
    {
        id: "vue",
        name: "Vue.js",
        image: vue,
        category: "web"
    },
    {
        id: "react",
        name: "React.js",
        image: reactjs,
        category: "web"
    },
    {
        id: "three",
        name: "Three.js",
        image: threejs,
        category: "web"
    },
    {
        id: "cakephp",
        name: "CakePHP",
        image: cakephp,
        category: "web"
    },
    {
        id: "unity",
        name: "Unity",
        image: unity,
        category: "game"
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        image: tailwind,
        category: "web"
    },
    {
        id: "mysql",
        name: "MySQL",
        image: mysql,
        category: "web"
    },
    {
        id: "photoshop",
        name: "Photoshop",
        image: photoshop,
        category: "tool"
    },
    {
        id: "premiere",
        name: "Premiere Pro",
        image: premiere,
        category: "tool"
    },
    {
        id: "aftereffect",
        name: "After Effect",
        image: aftereffect,
        category: "tool"
    },
    {
        id: "davinci",
        name: "DaVinci",
        image: davinci,
        category: "tool"
    },
    {
        id: "cypress",
        name: "Cypress",
        image: cypress,
        category: "web"
    },
    {
        id: "csharp",
        name: "C#",
        image: csharp,
        category: "game"
    },
    {
        id: "wordpress",
        name: "WordPress",
        image: wordpress,
        category: "web"
    },
]

const Work: Array<WorkExperienceType> = [
    {
        title: "Front-end Developer",
        company: "PwC HK",
        duration: "JUL 2021 - JAN 2023",
        keyPoints: [
            "Developed a new company website in Vue within a tight time frame in order to allow our marketing team to introduce our new start-up to other business partners",
            "Helped to customize the front-end of our company’s low code platform to meet our clients’ needs",
            "Built internal platforms for teams and departments to share reusable components, design materials and other valuable resources which decreased rework rate and improved internal communication",
            "Created test scripts for automation testing which reduced time for manual testing and improved testing accuracy"
        ],
        skills: [
            {id: "vue"},
            {id: "html"},
            {id: "css"},
            {id: "git"},
            {id: "premiere"},
            {id: "cypress"}
        ],
        country: "Hong Kong",
        flag: hongkong,
        icon: pwc,
    },
    {
        title: "IT Developer",
        company: "iDoStuff",
        duration: "Nov 2020 - Mar 2021",
        keyPoints: [
            "Created websites for clients from design and helped them to improve their brand exposure by 54% on average",
            "Enhanced the company’s WordPress e-commerce websites which increased company sales by 28%",
            "Performed troubleshooting tasks and resolved issues for the company’s websites",
        ],
        skills: [
            {id: "html"},
            {id: "css"},
            {id: "wordpress"},
        ],
        country: "Australia",
        flag: australia,
        icon: idostuff,
    },
    {
        title: "Winter Intern",
        company: "Hong Kong Air Cargo Terminals Limited",
        duration: "Nov 2020 - Mar 2021",
        keyPoints: [
            "Designed UI/UX interfaces and prototypes for new sections in a mobile application",
            "Analyzed the client’s data using Visual Basics and reduced 60% of manual process time",
            "Performed data mining from server report to monitor server status",
        ],
        country: "Hong Kong",
        flag: hongkong,
        icon: hactl,
    }
]

const Education: Array<EducationType> = [
    {
        title: "Programming For Web, Mobile & Games",
        school: "Vancouver Film School",
        duration: "JAN 2024 - DEC 2024",
        flag: canada,
        country: "Vancouver",
        icon: vfs,
    },
    {
        title: "Bachelor of Information Technology",
        school: "Monash University",
        duration: "Feb 2017 - DEC 2019",
        major: "Sofeware Development",
        minor: "Mobile Apps Development, Creative Computing",
        flag: australia,
        country: "Melbourne",
        icon: monash
    }
]

const AboutDetails: string = "Self-motivated and versatile UI Engineer with a year of game development experience and over 2 years of responsive web development experience. Passionate about leveraging technology to solve everyday problems and tackle challenges, seeking to join a dynamic and high-energy environment with an innovative team focused on achieving creative goals."

export {ProjectsOverview, ProjectDetails, Skills, Work, Education, AboutDetails};