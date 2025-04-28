import { ProjectType, SelectedPage } from "../../shared/types";
import projectsTitle from "@/assets/Text/ProjectsTitle.png";
import { ProjectsOverview } from "../../shared/data";
import { motion } from 'framer-motion';
import ProjectOverviewComponent from "./projectOverview";
//import useMediaQuery from "../../hooks/useMediaQuery";
import {Chip, Tab, Tabs} from "@heroui/react";
import { IoGameController } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({setSelectedPage}: Props) => {
    //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const games: ProjectType[] = ProjectsOverview.filter((item: ProjectType) => item.category === "game");
    const web: ProjectType[] = ProjectsOverview.filter((item: ProjectType) => item.category === "web");

  return (
    <section id="projects" className="w-full min-h-screen bg-indigo-950 pt-4 pb-4 md:pt-24 md:pb-24">
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
                <div className="">
                    <img src={projectsTitle} alt="Projects" className="h-[8vh] md:h-[10vh]"/>
                    <p className="py-4 md:text-xl">Following projects showcases my skills and experience through real-world examples of my work.</p>
                    <div className="flex w-full flex-col">
                        <Tabs
                            aria-label="Options"
                            classNames={{
                                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                cursor: "w-full bg-[#22d3ee]",
                                tab: "max-w-fit px-0 h-12",
                                tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                            }}
                            color="primary"
                            variant="underlined"
                        >
                            <Tab
                                key="web"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <MdWeb />
                                        <span>Web</span>
                                        <Chip size="sm" variant="faded">
                                            {web.length}
                                        </Chip>
                                    </div>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                </div>
                            </Tab>
                            <Tab
                                key="games"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <IoGameController />
                                        <span>Game</span>
                                        <Chip size="sm" variant="faded">
                                            {games.length}
                                        </Chip>
                                    </div>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                </div>


                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Projects