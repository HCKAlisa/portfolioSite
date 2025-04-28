import {SelectedPage} from "../../shared/types.ts";
import { motion } from 'framer-motion';
import {BentoCard} from "../../components/BentoCard.tsx";
import {BentoTilt} from "../../components/BentoTilt.tsx";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Experience = ({setSelectedPage}: Props) => (
    <section id="experience" className="bg-indigo-950 md:py-36">
        <motion.div className="container mx-auto px-3 md:px-10" onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}>

            <div className="grid w-full grid-cols-2 grid-rows-2 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>
                                e<b>xpe</b>rie<b>n</b>ce
                            </>
                        }
                        description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        link="experience"
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:ms-0">
                    <BentoCard
                        src="videos/feature-2.mp4"
                        title={
                            <>
                                <b>e</b>duc<b>at</b>io<b>n</b>
                            </>
                        }
                        description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        link="education"
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:ms-0">
                    <BentoCard
                        src="videos/feature-3.mp4"
                        title={
                            <>
                                s<b>k</b>ills
                            </>
                        }
                        description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                        link="skills"
                    />
                </BentoTilt>

            </div>
        </motion.div>
    </section>
);

export default Experience;