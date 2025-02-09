import {MutableRefObject, useEffect, useRef, useState} from "react";
import Button from "../../components/Button.tsx";
import {TiLocationArrow} from "react-icons/ti";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import GitLab from "@/assets/Icons/GitLab.png";
import {SelectedPage} from "../../shared/types.ts";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

gsap.registerPlugin(ScrollTrigger)

const Hero = ({setSelectedPage}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 3;
    const nextVdRef:MutableRefObject<null> = useRef(null);
    const handleVideoLoad = ():void => {
        setLoadedVideos((prevIndex:number):number => prevIndex + 1);
    }

    const upcomingVideoIndex:number = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick:()=> void = ():void => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if (loadedVideos === totalVideos -1){
            setIsLoading(false)
        }
    }, [loadedVideos])

    useGSAP(()=>{
        if(hasClicked){
            gsap.set('#next-video', {visibility: 'visible'});

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: ()=> nextVdRef?.current.play(),
            })

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, {dependencies: [currentIndex], revertOnUpdate: true});

    useGSAP(()=>{
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 95% 95%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    const getVideoSrc:(index:number)=>string = (index:number):string => `videos/game-${index}.mp4`;

    return (
        <motion.div className="relative h-dvh w-screen overflow-hidden bg-indigo-950" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot"/>
                        <div className="three-body__dot"/>
                        <div className="three-body__dot"/>
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75">
                <div>
                    <div
                        className="pc-clip-path absolute-center absolute z-50 transition-all duration-500 size-64 cursor-pointer overflow-hidden rotate-45 hover:rotate-0">
                        <div onClick={handleMiniVdClick}
                             className="origin-center scale-50 opacity-0 rotate-45 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 hover:rotate-0">
                            <video
                                ref={nextVdRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-100 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-100 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        muted
                        loop
                        className="absolute left-0 top-0 size-full object-cover object-center"
                    />
                </div>
                <h1 className="spcial-font special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"><b>Software Engineer</b></h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-20 px-5 sm:px-10">
                        <h1 className="special-font hero-heading ">Alisa Ho</h1>
                        <p className="mb-5 max-64 md:w-[50dvw] special-font text-5xl">
                            <b>Game</b> | <b>Web</b> | <b>Mobile</b>
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/alisa-ho-chung-ki"><LinkedIn sx={{fontSize: 70}}/></a>
                            <a href="https://github.com/HCKAlisa"><GitHub sx={{fontSize: 70}}/></a>
                            <a href="https://gitlab.com/alisaho9831"><img src={GitLab} alt="" className="w-[70px] h-[70px]"/></a>
                            <a href="mailto:hckalisa@gmail.com"><Email sx={{fontSize: 70}}/></a>
                            <Button id="watch trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>}
                                containerClass="bg-yellow-300 flex-center"/>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="spcial-font special-font hero-heading absolute bottom-5 right-5 text-primary-100">Software Engineer</h1>

            <svg fill="#000000" width="800px" height="800px" className="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="pcClip">
                    <path d="M496,400H467.66A47.92,47.92,0,0,0,480,367.86V128.14A48.2,48.2,0,0,0,431.86,80H80.14A48.2,48.2,0,0,0,32,128.14V367.86A47.92,47.92,0,0,0,44.34,400H16a16,16,0,0,0,0,32H496a16,16,0,0,0,0-32Z"/>
                </clipPath>
            </svg>



        </motion.div>
    )
}
export default Hero
