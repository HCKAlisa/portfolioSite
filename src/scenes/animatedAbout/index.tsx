import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "../../components/AnimatedTitle.tsx";
import {SelectedPage} from "../../shared/types.ts";
import { motion } from 'framer-motion';
import avatar from "@/assets/FullAvatar.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

gsap.registerPlugin(ScrollTrigger)

const About = ({setSelectedPage}: Props) => {

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: 'center center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })


    return (
        <motion.div id="about" className="min-h-screen w-screen bg-primary-800" onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
            <div className="relative mb-8 pt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-lg">Alisa Chung Ki Ho</h2>
                <AnimatedTitle title="UI Engineer &#183 Game Programmer <br />Front-end Developer &#183 Web Developer" containerClass="mt-5 text-center"/>
                <div className="about-subtext">
                    <p>Self-motivated and versatile UI Engineer with a year of game development experience and over 2 years of responsive web development experience.Passionate about leveraging technology to solve everyday problems and tackle challenges, seeking to join a dynamic and high-energy environment with an innovative team focused on achieving creative goals.</p>
                </div>
            </div>
            <div className="h-screen w-screen" id="clip">
                <div className="about-image">
                    <img src={avatar} alt="Background" className="absolute left-0 top-0 size-full object-contain"/>
                </div>
            </div>
        </motion.div>
    )
}
export default About
