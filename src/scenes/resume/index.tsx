import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import gameCV from "../../assets/documents/AlisaHo_GameDev_CV.pdf"
import webCV from "../../assets/documents/AlisaHo_Resume_WebDeveloper.pdf"
import useMediaQuery from "../../hooks/useMediaQuery.ts";

const Resume = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <div className='w-[100dvw] md:w-full md:h-full bg-primary-800'>
            <div className='flex underline justify-end pt-[4vh] mr-[10vw]'>
                <ArrowLeftIcon className='w-4'/>
                <Link to={`/#experience`} className='px-2'>Back</Link>
            </div>
            <div className="flex justify-center">
                { isAboveMediumScreens ? (
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
                        <div className="flex md:flex-row gap-2 h-full">
                            <div className="w-full">
                                <h5 className='md:text-xl font-medium text-center'>Game Developer</h5>
                                <object data={gameCV} type="application/pdf" width="100%" height="100%">
                                    <embed src="https://drive.google.com/file/d/1weY_yj4aLds9H6T0KWwqmKxpuOC0UApV/preview?usp=sharing" width="100%" height="100%"/>
                                </object>
                                {/*<iframe src={gameCV} width="100%" height="100%"></iframe>*/}
                            </div>
                            <div className="w-full">
                                <h5 className='md:text-xl font-medium text-center'>Web Developer</h5>
                                <object data={webCV} type="application/pdf" width="100%" height="100%">
                                    <embed src="https://drive.google.com/file/d/1oYZ3oSH-Wqo8fOU3WrB9rhOS0UU-TvED/preview?usp=sharing" width="100%" height="100%"/>
                                </object>
                                {/*<iframe src={webCV} width="100%" height="100%"></iframe>*/}
                            </div>
                        </div>

                    </div>
                </motion.div>
                ): (
                    <div className='w-11/12 h-[100dvh] mx-auto overflow-y-scroll'>
                        <div className="">
                            <div className="w-full">
                                <h5 className=' font-medium text-center'>Game Developer</h5>
                                <object data={gameCV} type="application/pdf" width="100%" height="600px">
                                    <embed src="https://drive.google.com/file/d/1weY_yj4aLds9H6T0KWwqmKxpuOC0UApV/preview?usp=sharing" width="100%" height="600px"/>
                                </object>
                            </div>
                            <div className="w-full">
                                <h5 className='md:text-xl font-medium text-center'>Web Developer</h5>
                                <object data={webCV} type="application/pdf" width="100%" height="600px">
                                    <embed src="https://drive.google.com/file/d/1y5J13ieVp9XfNohurbkbAsQXKcNsRrqy/preview?usp=sharing" width="100%" height="600px"/>
                                </object>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}
export default Resume
