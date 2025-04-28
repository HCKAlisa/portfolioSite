import nameTitle from "@/assets/Text/NameTitle.png";
import { SelectedPage } from "../../shared/types";
import { motion } from 'framer-motion';
import GitLab from "@/assets/Icons/GitLab.png";
import { LinkedIn, GitHub, Email, PhoneAndroid} from '@mui/icons-material';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer id="contact" className="bg-primary-800 md:py-16 py-8">
        <motion.div 
            className="justify-content mx-auto w-5/6 gap-16 md:flex items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
            <motion.div 
                className="md:mt-16 basis-1/2 md:mt-0"
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ duration: 0.5 }} 
                variants={{ 
                    hidden: { opacity: 0, x: -50}, 
                    visible: {opacity: 1, x: 0}
                    }}
            >
                <img src={nameTitle} alt="Alisa Chung Ki Ho" className="h-[30vh]"/>
            </motion.div>

            <motion.div 
                className="flex flex-col gap-4"
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ duration: 0.5 }} 
                variants={{ 
                    hidden: { opacity: 0, x: 100}, 
                    visible: {opacity: 1, x: 0}
                    }}
            >
                <h1 className="text-4xl">Contact Me</h1>
                <h1 className="text-2xl"><PhoneAndroid/>  (778) 903 3987</h1>
                <h1 className="text-2xl"><Email/>  hckalisa@gmail.com</h1>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/alisa-ho-chung-ki"><LinkedIn sx={{fontSize: 50}}/></a>
                    <a href="https://github.com/HCKAlisa"><GitHub sx={{fontSize: 50}}/></a>
                    <a href="https://gitlab.com/alisaho9831"><img src={GitLab} alt="" className="w-[50px] h-[50px]"/></a>
                    <a href="mailto:hckalisa@gmail.com"><Email sx={{fontSize: 50}}/></a>
                </div>
            </motion.div>
        </motion.div>
    </footer>
  )
}

export default Footer
