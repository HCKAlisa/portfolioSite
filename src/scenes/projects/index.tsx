//import useMediaQuery from "../../hooks/useMediaQuery";
import { ProjectType, SelectedPage } from "../../shared/types";
import projectsTitle from "@/assets/Text/ProjectsTitle.png";
import gameTitle from "@/assets/Text/GameTitle.png";
import webTitle from "@/assets/Text/WebTitle.png";
import { ProjectsOverview } from "../../shared/data";
import { motion } from 'framer-motion';
import ProjectOverviewComponent from "./projectOverview";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="projects" className="w-full bg-indigo-950 pt-4 pb-4 md:pt-14 md:pb-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ duration: 0.5 }} 
                variants={{ 
                    hidden: { opacity: 0, x: -50}, 
                    visible: {opacity: 1, x: 0}
                    }}
            >
                <div className="md:w-4/5">
                    <img src={projectsTitle} alt="Projects" className="h-[8vh] md:h-[10vh]"/>
                    <p className="py-5 md:text-2xl">Following projects showcases my skills and experience through real-world examples of my work.</p>
                    <img src={gameTitle} alt="Projects" className="h-[5vh]"/>
                </div>
            </motion.div>

            { isAboveMediumScreens && (
                <div className="mx-auto mt-5 w-5/6 overflow-x-auto overflow-y-hidden">
                    <ul className="whitespace-nowrap">
                        {ProjectsOverview.filter((item: ProjectType) => item.category === "game").map((item: ProjectType, index: number) => (
                            <ProjectOverviewComponent
                                key={`${item.name}-${index}`}
                                name={item.name}
                                engine={item.engine}
                                link={item.link}
                                image={item.image}
                                withDetails={item.withDetails}
                            />
                        ))}
                    </ul>
            </div>
            )}

            { !isAboveMediumScreens && (
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} 
                    transition={{ duration: 0.5 }} 
                    variants={{ 
                        hidden: { opacity: 0, x: -50}, 
                        visible: {opacity: 1, x: 0}
                        }}
                >
                    <ul>
                        {ProjectsOverview.filter((item: ProjectType) => item.category === "game").map((item: ProjectType, index: number) => (
                            <ProjectOverviewComponent
                                key={`${item.name}-${index}`}
                                name={item.name}
                                engine={item.engine}
                                link={item.link}
                                image={item.image}
                                withDetails={item.withDetails}
                            />
                        ))}
                    </ul>
                </motion.div>
            )}
            

            <motion.div
                className="mx-auto w-5/6"
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ duration: 0.5 }} 
                variants={{ 
                    hidden: { opacity: 0, x: -50}, 
                    visible: {opacity: 1, x: 0}
                    }}
            >
                <div className="mt-5 md:w-4/5">
                    <img src={webTitle} alt="Projects" className="h-[5vh]"/>
                </div>
            </motion.div>

            { isAboveMediumScreens && (
                <div className="mx-auto mt-5 w-5/6 overflow-x-auto overflow-y-hidden">
                    <ul className="whitespace-nowrap">
                        {ProjectsOverview.filter((item: ProjectType) => item.category === "web").map((item: ProjectType, index: number) => (
                            <ProjectOverviewComponent
                                key={`${item.name}-${index}`}
                                name={item.name}
                                engine={item.engine}
                                link={item.link}
                                image={item.image}
                                withDetails={item.withDetails}
                            />
                        ))}
                    </ul>
                </div>
            )}
            { !isAboveMediumScreens && (
                <ul className="mx-auto w-5/6">
                    {ProjectsOverview.filter((item: ProjectType) => item.category === "web").map((item: ProjectType, index: number) => (
                        <ProjectOverviewComponent
                            key={`${item.name}-${index}`}
                            name={item.name}
                            engine={item.engine}
                            link={item.link}
                            image={item.image}
                            withDetails={item.withDetails}
                        />
                    ))}
                </ul>
            )}
            
        </motion.div>
    </section>
  )
}

export default Projects