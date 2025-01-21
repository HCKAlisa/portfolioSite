import { motion } from 'framer-motion';
import { ProjectDetails, Skills } from '../../shared/data';
import { FeatureType, SkillId, SkillType } from "../../shared/types";
import { useParams, Link } from 'react-router-dom';
import Skill from '../skills';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

type Params = {
	name: string;
}

const ProjectDetailsComponent = () => {
    const { name } = useParams<Params>();
    const detail = ProjectDetails.filter((item) => (item.name.replace(/\W/g, '')) === name)[0];

    const getIntersection = (array1: SkillType[], array2: SkillId[]): Array<SkillType> => {
        return array1.filter(e => array2.map(e2 => e2.id).includes(e.id));
    };

    return (   
        <div className='w-full h-full bg-primary-800 bg-pc-background bg-contain bg-center bg-no-repeat'>
                <div className='flex underline justify-end pt-[4vh] mr-[10vw]'>
                    <ArrowLeftIcon className='w-4'/>
                    <Link to={`/`} className='px-2'>Back</Link>
                </div>
            <motion.div 
                className='absolute '
                initial="hidden" 
                whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ duration: 0.5 }} 
                variants={{ 
                    hidden: { opacity: 0, x: -50}, 
                    visible: {opacity: 1, x: 0}
                    }}
            >
                <div className='md:mt-[1.4vh] mx-auto md:w-9/12 md:h-[79.5vh] overflow-y-scroll'>

                
                    <section className='flex flex-col justify-around'>
                        <div className='flex justify-around items-center py-6'>
                            <div className='w-3/5'>
                                <h1 className='text-5xl font-bold'>{detail.name}</h1>
                                {detail.position && (<h3 className='text-xl'>{detail.position}</h3>)}
                                {detail.engine && (<h6 className='text-gl'>{detail.engine}</h6>)}
                                <div className='flex gap-2 py-4'>
                                    {getIntersection(Skills, detail.skills).map((item: SkillType, index: number) => (
                                    <Skill 
                                    key={`${item.name}-${index}`}
                                    name={item.name}
                                    image={item.image}
                                    ></Skill>
                                    ))} 
                                </div>
                            
                                <p className='w-4/5'>{detail.description}</p>
                                <div className='py-2'>
                                    {detail.shippedLink && (
                                        <div className='flex gap-2'>
                                            <p className='font-semibold'>Shipped Build:</p>
                                            <a href={detail.shippedLink} className='underline'>{detail.shippedLink}</a>
                                        </div>
                                    )}
                                    {detail.gitLink && (
                                        <div className='flex gap-2'>
                                            <p className='font-semibold'>Git:</p>
                                            <a href={detail.gitLink} className='underline'>{detail.gitLink}</a>
                                        </div>
                                    )}
                                </div>
                                
                            </div>
                            <div className='w-1/2'>
                                {detail.banner && (<img src={detail.banner} alt={detail.name} className='' />)}
                                {detail.youtubeBanner && (
                                    <div className='w-1/3'>
                                        <iframe width="672" height="378" src={`${detail.youtubeBanner}=hd1080&controls=0&autoplay=1&mute=1&loop=1&playlist=${detail.youtubeId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    
                    <section id='features'>
                                <h2 className='text-3xl font-bold text-center pb-4'>Key Features</h2>
                                {detail.features.map((item: FeatureType, index: number)=> (
                                    <div key={`${item.title}-${index}`} className='flex justify-center items-center py-2 gap-20'>
                                        {index%2===0 && item.image && (<img src={item.image} alt="" className='w-1/3'/>)}
                                        {index%2===0 && item.youtube && (
                                            <div className='w-1/3'>
                                                <iframe width="480" height="271" src={`${item.youtube}=hd1080&controls=0&autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        )}
                                        <div className='flex flex-col w-5/12'>
                                            <h5 className='text-lg font-semibold'>{item.title}</h5>
                                            <p>{item.description}</p>
                                            {item.link && (
                                                <a href={item.link} className='underline'>More Information</a>
                                            )}
                                        </div>
                                        {index%2!==0 && item.image && (<img src={item.image} alt="" className='w-1/3'/>)}
                                        {index%2!==0 && item.youtube && (
                                            <div className='w-1/3'>
                                                <iframe width="480" height="271" src={`${item.youtube}=hd1080&controls=0&autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        )}
                                    </div>
                                ))}
                    </section>
                </div>
                
            </motion.div>
        </div>
    )
}

export default ProjectDetailsComponent