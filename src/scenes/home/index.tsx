import { SelectedPage } from "../../shared/types";
import avatar from "@/assets/FullAvatar.png";
import homeTitle from "@/assets/Text/NameTitle.png";
import GitLab from "@/assets/Icons/GitLab.png";
import { LinkedIn, GitHub, Email} from '@mui/icons-material';
import { motion } from 'framer-motion';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  return (
    <section id="home" className="gap-16 py-16 px-4 md:py-10 md:px-24 md:h-full md:pb-0">
        <motion.div 
            className="md:flex justify-between items-center md:mt-24"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <motion.div 
                className="flex flex-col" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ duration: 0.5 }} 
                variants={{ 
                    hidden: { opacity: 0, x: -50}, 
                    visible: {opacity: 1, x: 0}
                    }}
            >
                <img src={homeTitle} alt="Alisa Chung Ki Ho" className="md:w-[40vw]"/>
                <p className="md:text-4xl font-mono">UI Engineer | Game Programmer</p>
                <p className="md:text-4xl font-mono">Front-end Developer | Web Developer</p>
                <div className="flex gap-4 md:pt-10">
                    <a href="https://www.linkedin.com/in/alisa-ho-chung-ki"><LinkedIn sx={{fontSize: 70}}/></a>
                    <a href="https://github.com/HCKAlisa"><GitHub sx={{fontSize: 70}}/></a>
                    <a href="https://gitlab.com/alisaho9831"><img src={GitLab} alt="" className="w-[70px] h-[70px]"/></a>
                    <a href="mailto:hckalisa@gmail.com"><Email sx={{fontSize: 70}}/></a>
                </div>
            </motion.div>

            <motion.div
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true, amount: 0.5}} 
            transition={{ duration: 0.5 }} 
            variants={{ 
                hidden: { opacity: 0, x: 100}, 
                visible: {opacity: 1, x: 0}
                }}
            >
                <img src={avatar} alt="Alisa's Avatar" className="md:w-[40vw]"/>
            </motion.div>
        </motion.div>
        
    </section>
  )
}

export default Home