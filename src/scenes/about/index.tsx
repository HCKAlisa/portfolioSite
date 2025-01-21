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
  return (
    <section id="about">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <motion.div className="bg-primary-800 h-[50vh] flex justify-center items-end">
            <div><img src={student} alt="About Me" className="h-[20vh]"/></div>
          <div className="mx-8 my-auto h-1/2 w-1/2">
            <div><img src={aboutMeTitle} alt="About Me" className="h-[8vh]"/></div>
            <div className="text-3xl">{AboutDetails}</div>
          </div>
          <div><img src={officeGirl} alt="About Me" className="h-[20vh] -scale-x-100"/></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About