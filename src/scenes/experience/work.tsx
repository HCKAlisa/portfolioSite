import { motion } from 'framer-motion';
import { Work } from '../../shared/data.ts';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import {WorkExperienceType} from "../../shared/types.ts";
import {Link} from "react-router-dom";
import professionalTitle from "@/assets/Text/ProfessionalTitle.png";
import useMediaQuery from "../../hooks/useMediaQuery.ts";


const WorkExperience = () => {
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
                <div className='w-11/12 md:mt-[2vh] mx-auto md:w-3/4 md:h-[79vh] overflow-y-scroll'>
                    <img src={professionalTitle} alt="Work Experience" className="h-[8vh]"/>
                    {Work.map((item: WorkExperienceType, index: number) => (
                        <div key={`work-${index}`} className='p-4 rounded-lg bg-blue-400/30 my-2 shadow'>
                            <div className='md:flex justify-between'>
                                <h4 className='md:text-2xl text-lg font-semibold'>{item.title}</h4>
                                <h5 className='md:text-xl'>{item.duration}</h5>
                            </div>
                            <div className='md:flex justify-between'>
                                <h5 className='md:text-xl font-medium flex items-center'><img alt={item.company} src={item.icon} className="w-[15vw] md:w-[2vw] pr-2"/>{item.company}</h5>
                                <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[15vw] md:w-[2vw] pr-2"/> <h5 className='md:text-xl'>{item.country}</h5></div>
                            </div>

                            <ul className="md:w-5/6">
                                {item.keyPoints.map((point: string, pointIndex: number) => (
                                    <li key={`${item.company.replace(/\W/g, '')}-${pointIndex}`} className='pb-2'>- {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
                ): (
                    <div className='w-11/12 md:mt-[2vh] mx-auto md:w-3/4 md:h-[79vh] overflow-y-scroll'>
                        <img src={professionalTitle} alt="Work Experience" className="h-[8vh]"/>
                        {Work.map((item: WorkExperienceType, index: number) => (
                            <div key={`work-${index}`} className='py-2'>
                                <div className='md:flex justify-between'>
                                    <h4 className='text-base font-semibold'>{item.title}</h4>
                                    <h5 className='text-sm'>{item.duration}</h5>
                                </div>
                                <div className='text-sm'>
                                    <h5 className='font-medium flex items-center'><img alt={item.company} src={item.icon} className="w-[10vw] pr-2"/>{item.company}</h5>
                                    <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[10vw] md:w-[2vw] pr-2"/> <h5 className='md:text-xl'>{item.country}</h5></div>
                                </div>

                                <ul className="">
                                    {item.keyPoints.map((point: string, pointIndex: number) => (
                                        <li key={`${item.company.replace(/\W/g, '')}-${pointIndex}`} className='pb-2 text-sm'>- {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default WorkExperience
