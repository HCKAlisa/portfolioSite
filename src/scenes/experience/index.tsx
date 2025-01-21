import { motion } from 'framer-motion';
import { Work, Education, Skills } from '../../shared/data';
import { SelectedPage, WorkExperienceType, EducationType, SkillType } from "../../shared/types";
import professionalTitle from "@/assets/Text/ProfessionalTitle.png";
import educationTitle from "@/assets/Text/EducationTitle.png";
import skillsTitle from "@/assets/Text/SkillsTitle.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Experience = ({setSelectedPage}: Props) => {
  return (
    <section id="experience" className="w-full bg-indigo-950 pt-14 pb-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experience)} className='w-full flex'>
            <motion.div
                    className="mx-auto w-5/12"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} 
                    transition={{ duration: 0.5 }} 
                    variants={{ 
                        hidden: { opacity: 0, x: -50}, 
                        visible: {opacity: 1, x: 0}
                        }}
            >
                    <img src={professionalTitle} alt="Work Experience" className="h-[10vh]"/>
                    <div className='bg-blue-900 px-4 py-2 rounded-lg shadow-lg shadow-blue-900/50'>
                        {Work.map((item: WorkExperienceType, index: number) => (
                        <div key={`work-${index}`} className='pb-1'>
                            <div className='flex justify-between'>
                                <h4 className='text-2xl font-semibold'>{item.title}</h4>
                                <h5 className='text-xl'>{item.duration}</h5>
                            </div>
                            <div className='flex justify-between'>
                                <h5 className='text-xl font-medium flex items-center'><img alt={item.company} src={item.icon} className="w-[2vw] pr-2"/>{item.company}</h5>
                                <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[2vw] pr-2"/> <h5 className='text-xl'>{item.country}</h5></div>
                            </div>
                            
                            <ul>
                                {item.keyPoints.map((point: string, pointIndex: number) => (
                                    <li key={`${item.company.replace(/\W/g, '')}-${pointIndex}`} className='pb-2'>- {point}</li>
                                ))}
                            </ul>
                            
                        </div>
                        ))
                        
                    }
                    </div>
                    
            </motion.div>

            <motion.div
                    className="mx-auto w-5/12"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true, amount: 0.5}} 
                    transition={{ duration: 0.5 }} 
                    variants={{ 
                        hidden: { opacity: 0, x: 50}, 
                        visible: {opacity: 1, x: 0}
                        }}
            >
                <img src={educationTitle} alt="Education" className="h-[10vh]"/>
                <div className='bg-blue-900 px-4 py-2 rounded-lg shadow-lg shadow-blue-900/50'>
                    {Education.map((item: EducationType, index: number) => (
                        <div key={`work-${index}`} className='pb-2'>
                            <div className='flex justify-between'>
                                <h4 className='text-2xl font-semibold'>{item.title}</h4>
                                <h5 className='text-xl'>{item.duration}</h5>
                            </div>
                            <div className='flex justify-between'>
                            <h5 className='text-xl font-medium flex items-center'><img alt={item.school} src={item.icon} className="w-[2vw] pr-2"/>{item.school}</h5>
                                <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[2vw] pr-2"/> <h5 className='text-xl'>{item.country}</h5></div>
                            </div>
                                {item.major && (
                                    <div>
                                        <h5>Major: {item.major}</h5>
                                    </div>
                                )}
                                {item.minor && (
                                    <div>
                                        <h5>Minor: {item.minor}</h5>
                                    </div>
                                )}
                        </div>
                        ))
                    }
                </div>
                
                    <img src={skillsTitle} alt="Skills" className="h-[10vh]"/>
                    <div className='bg-blue-900 px-2 py-2 rounded-lg shadow-lg shadow-blue-900/50'>
                        <div className='grid grid-cols-6 py-2'>
                        {Skills.filter((item: SkillType) => item.category === "game").map((item: SkillType, index: number) => (
                            <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                <div><img alt={item.name} src={item.image} className="w-[2vw]"/></div>
                                <div>{item.name}</div>
                            </div>
                        ))}
                        </div>
                        <div className='grid grid-cols-6 py-2'>
                            {Skills.filter((item: SkillType) => item.category === "web").map((item: SkillType, index: number) => (
                                <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                    <div><img alt={item.name} src={item.image} className="w-[2vw]"/></div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className='grid grid-cols-6 py-2'>
                            {Skills.filter((item: SkillType) => item.category === "tool").map((item: SkillType, index: number) => (
                                <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                    <div><img alt={item.name} src={item.image} className="w-[2vw]"/></div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experience