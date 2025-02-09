import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import { motion } from 'framer-motion';
import { AboutDetails } from '../../shared/data';
import aboutMeTitle from "@/assets/Text/AboutMeTitle.png";
import officeGirl from "@/assets/OfficeGirl.gif";
import student from "@/assets/Student.gif";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}
const About = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="about">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <motion.div className="bg-primary-800 md:h-[50vh] lg:h-[80vh] flex justify-center items-center">
            {isAboveMediumScreens && <div><img src={student} alt="About Me" className="h-[20vh]"/></div>}
          <div className="mx-8 my-auto py-4 h-1/2 md:w-1/2">
            <div><img src={aboutMeTitle} alt="About Me" className="h-[5vh] md:h-[8vh]"/></div>
            <div className="text-lg md:text-xl">{AboutDetails}</div>
          </div>
          {isAboveMediumScreens && <div><img src={officeGirl} alt="About Me" className="h-[20vh] -scale-x-100"/></div>}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About