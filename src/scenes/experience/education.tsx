import { motion } from 'framer-motion';
import {Education, Skills} from '../../shared/data.ts';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import {EducationType, SkillType} from "../../shared/types.ts";
import {Link} from "react-router-dom";
import educationTitle from "@/assets/Text/EducationTitle.png";
import skillsTitle from "@/assets/Text/SkillsTitle.png";
import useMediaQuery from "../../hooks/useMediaQuery.ts";


const EducationExperience = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <div className='w-[100vw] md:w-full md:h-full bg-primary-800 md:bg-pc-background md:bg-contain md:bg-center md:bg-no-repeat'>
            <div className='flex underline justify-end pt-[4vh] mr-[10vw]'>
                <ArrowLeftIcon className='w-4'/>
                <Link to={`/#experience`} className='px-2'>Back</Link>
            </div>
            <div className="flex justify-center">
                {isAboveMediumScreens ? (
            <motion.div
                className='mx-auto md:w-11/12 md:absolute'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
            >
                <div className='w-11/12 md:mt-[1vh] mx-auto md:w-3/5 md:h-[79vh] overflow-y-scroll'>
                    <img src={educationTitle} alt="Education" className="h-[7vh]"/>
                    {Education.map((item: EducationType, index: number) => (
                        <div key={`work-${index}`} className='py-2'>
                            <div className='md:flex justify-between'>
                                <h4 className='md:text-2xl font-semibold'>{item.title}</h4>
                                <h5 className='md:text-xl'>{item.duration}</h5>
                            </div>
                            <div className='md:flex justify-between'>
                                <h5 className='md:text-xl font-medium flex items-center'><img alt={item.school} src={item.icon} className="w-[15vw] md:w-[2vw] pr-2"/>{item.school}</h5>
                                <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[15vw] md:w-[2vw] pr-2"/> <h5 className='md:text-xl'>{item.country}</h5></div>
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

                    <img src={skillsTitle} alt="Skills" className="h-[8vh]"/>
                        <h5 className='md:text-xl font-medium text-center'>Game Development</h5>
                    <div className='grid grid-cols-6 py-2'>
                        {Skills.filter((item: SkillType) => item.category === "game").map((item: SkillType, index: number) => (
                            <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <h5 className='md:text-xl font-medium text-center'>Web Development</h5>
                    <div className='grid grid-cols-6 py-2'>
                        {Skills.filter((item: SkillType) => item.category === "web").map((item: SkillType, index: number) => (
                            <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <h5 className='md:text-xl font-medium text-center'>Tools</h5>
                    <div className='grid grid-cols-6 py-2'>
                        {Skills.filter((item: SkillType) => item.category === "tool").map((item: SkillType, index: number) => (
                            <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
                ): (
                    <div className='w-11/12 md:mt-[1vh] mx-auto md:w-3/5 md:h-[79vh] overflow-y-scroll'>
                        <img src={educationTitle} alt="Education" className="h-[7vh]"/>
                        {Education.map((item: EducationType, index: number) => (
                            <div key={`work-${index}`} className='py-2'>
                                <div className='md:flex justify-between'>
                                    <h4 className='md:text-2xl font-semibold'>{item.title}</h4>
                                    <h5 className='md:text-xl'>{item.duration}</h5>
                                </div>
                                <div className='md:flex justify-between'>
                                    <h5 className='md:text-xl font-medium flex items-center'><img alt={item.school} src={item.icon} className="w-[10vw] md:w-[2vw] pr-2"/>{item.school}</h5>
                                    <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[10vw] md:w-[2vw] pr-2"/> <h5 className='md:text-xl'>{item.country}</h5></div>
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

                        <img src={skillsTitle} alt="Skills" className="h-[8vh]"/>
                        <h5 className='md:text-xl font-medium text-center'>Game Development</h5>
                        <div className='grid grid-cols-5 py-2'>
                            {Skills.filter((item: SkillType) => item.category === "game").map((item: SkillType, index: number) => (
                                <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                    <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                                    <div className="text-sm">{item.name}</div>
                                </div>
                            ))}
                        </div>
                        <h5 className='md:text-xl font-medium text-center'>Web Development</h5>
                        <div className='grid grid-cols-4 py-2'>
                            {Skills.filter((item: SkillType) => item.category === "web").map((item: SkillType, index: number) => (
                                <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                    <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                                    <div className="text-sm">{item.name}</div>
                                </div>
                            ))}
                        </div>
                        <h5 className='md:text-xl font-medium text-center'>Tools</h5>
                        <div className='grid grid-cols-4 py-2'>
                            {Skills.filter((item: SkillType) => item.category === "tool").map((item: SkillType, index: number) => (
                                <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                                    <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default EducationExperience
