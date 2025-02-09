import {MutableRefObject, useEffect, useRef, useState} from "react";
import Button from "../../components/Button.tsx";
import {TiLocationArrow} from "react-icons/ti";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 4;
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

    const getVideoSrc:(index:number)=>string = (index:number):string => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-hidden bg-indigo-950">
            { isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75">
                <div>
                    <div
                        className="mask-clip-path absolute-center absolute z-50 transition-all duration-500 size-64 cursor-pointer overflow-hidden rotate-45 hover:rotate-0">
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
                <h1 className="spcial-font special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">Bloomtale</h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-10 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">Floralia Studio</h1>
                        <p className="mb-5 max-64 lg:w-[50dvw] font-robert text-blue-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id posuere dolor. Interdum
                            et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis, orci in fringilla
                            lacinia, tellus ante porttitor orci, sed consequat augue eros a ante. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dictum nisl
                            erat.
                        </p>
                        <Button id="watch trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>}
                                containerClass="bg-yellow-300 flex-center"/>
                    </div>
                </div>
            </div>
            <h1 className="spcial-font special-font hero-heading absolute bottom-5 right-5 text-black">Bloomtale</h1>

            <svg t="1595992956178" className="icon" viewBox="0 0 500 500" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4986" xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="200" height="200">
                <clipPath id="flowerClip">
                    <path
                        d="M512 1024c-209.066667 0-384-170.666667-384-379.733333V640c145.066667 0 277.333333 81.066667 341.333333 204.8v-115.2c-51.2-12.8-89.6-51.2-106.666666-102.4-12.8 4.266667-21.333333 4.266667-34.133334 4.266667-55.466667 0-106.666667-29.866667-136.533333-76.8-34.133333-59.733333-25.6-136.533333 21.333333-183.466667-46.933333-51.2-55.466667-128-21.333333-187.733333 29.866667-46.933333 81.066667-76.8 136.533333-76.8 12.8 0 21.333333 0 34.133334 4.266666C384 42.666667 443.733333 0 512 0s128 42.666667 149.333333 110.933333c12.8-4.266667 21.333333-4.266667 34.133334-4.266666 55.466667 0 106.666667 29.866667 136.533333 76.8 34.133333 59.733333 25.6 136.533333-21.333333 183.466666 46.933333 51.2 55.466667 123.733333 21.333333 183.466667-29.866667 46.933333-81.066667 76.8-136.533333 76.8-12.8 0-21.333333 0-34.133334-4.266667-17.066667 51.2-55.466667 89.6-106.666666 102.4v115.2c64-128 196.266667-209.066667 341.333333-204.8 0 217.6-170.666667 388.266667-384 388.266667zM362.666667 362.666667c0 81.066667 68.266667 149.333333 149.333333 149.333333s149.333333-68.266667 149.333333-149.333333S593.066667 213.333333 512 213.333333 362.666667 281.6 362.666667 362.666667z"
                        p-id="4987"
                    ></path>
                </clipPath>
            </svg>

            <svg height="200px" width="200px" className="icon" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                 <clipPath id="SingleflowerClip">
                    <path className="st0" d="M512,255.992c0-37.331-22.112-69.445-53.84-83.734c12.329-32.557,5.243-70.893-21.149-97.286
                        c-26.376-26.376-64.704-33.461-97.261-21.124C325.445,22.112,293.331,0,256.009,0c-37.323,0-69.445,22.112-83.76,53.848
                        c-32.54-12.337-70.876-5.252-97.252,21.124c-26.393,26.393-33.478,64.729-21.149,97.286C22.121,186.564,0,218.677,0,255.992
                        c0,37.314,22.121,69.444,53.849,83.75c-12.329,32.557-5.244,70.886,21.132,97.27c26.393,26.384,64.729,33.47,97.269,21.14
                        C186.556,489.888,218.661,512,255.992,512c37.339,0,69.469-22.112,83.758-53.848c32.557,12.329,70.885,5.243,97.261-21.14
                        c26.392-26.384,33.478-64.712,21.149-97.27C489.888,325.453,512,293.34,512,255.992z M248.529,125.571
                        c1.717-1.566,3.401-3.174,5.025-4.841c1.709,1.575,3.476,3.108,5.269,4.623c12.69,11.651,9.347,23.252-0.67,48.706
                        c-0.787,2.027-1.893,4.69-3.3,7.882c-1.49-3.132-2.731-5.754-3.601-7.772C240.195,149.191,236.334,137.742,248.529,125.571z
                         M158.094,162.626c2.329-0.068,4.649-0.218,6.969-0.428c17.213-0.728,23.034,9.859,33.94,34.903c0.854,1.977,1.993,4.682,3.25,7.89
                        c-3.283-1.13-6.014-2.127-8.024-2.907c-25.487-9.858-36.301-15.219-36.301-32.448C158.028,167.283,158.094,164.954,158.094,162.626
                        z M125.572,263.48c-1.567-1.725-3.175-3.417-4.833-5.034c1.574-1.717,3.099-3.484,4.623-5.285
                        c11.651-12.672,23.252-9.322,48.689,0.712c2.019,0.788,4.707,1.893,7.856,3.283c-3.099,1.499-5.746,2.706-7.731,3.602
                        C149.2,271.814,137.724,275.642,125.572,263.48z M202.119,317.772c-9.884,25.488-15.253,36.301-32.482,36.293
                        c-2.337-0.084-4.682-0.16-7.003-0.16c-0.067-2.32-0.217-4.649-0.418-6.96c-0.737-17.221,9.85-23.059,34.894-33.939
                        c2.01-0.88,4.707-2.002,7.923-3.292C203.91,312.998,202.906,315.754,202.119,317.772z M263.48,386.429
                        c-1.726,1.558-3.401,3.174-5.026,4.842c-1.708-1.575-3.484-3.107-5.276-4.624c-12.681-11.66-9.331-23.26,0.67-48.706
                        c0.788-2.01,1.91-4.724,3.309-7.907c1.499,3.132,2.721,5.788,3.601,7.79C271.814,362.809,275.675,374.251,263.48,386.429z
                         M256.009,289.328c-18.41,0-33.337-14.917-33.337-33.327c0-18.419,14.926-33.336,33.337-33.336
                        c18.409,0,33.327,14.917,33.327,33.336C289.336,274.411,274.418,289.328,256.009,289.328z M309.891,194.236
                        c9.892-25.504,15.252-36.318,32.473-36.309c2.346,0.092,4.691,0.167,7.02,0.167c0.05,2.329,0.2,4.64,0.418,6.969
                        c0.729,17.204-9.858,23.026-34.902,33.922c-2.01,0.896-4.699,1.986-7.916,3.275C308.107,198.969,309.095,196.256,309.891,194.236z
                         M353.914,349.366c-2.32,0.067-4.649,0.226-6.969,0.436c-17.212,0.72-23.026-9.858-33.931-34.91
                        c-0.888-2.01-2.001-4.716-3.291-7.932c3.283,1.13,6.022,2.136,8.048,2.932c25.505,9.858,36.31,15.244,36.31,32.464
                        C353.981,344.709,353.914,347.037,353.914,349.366z M386.647,258.823c-11.651,12.681-23.26,9.338-48.688-0.696
                        c-2.028-0.788-4.708-1.902-7.882-3.292c3.125-1.499,5.754-2.738,7.765-3.601c24.968-11.057,36.443-14.892,48.588-2.714
                        c1.566,1.726,3.183,3.41,4.842,5.025C389.696,255.263,388.171,257.03,386.647,258.823z"/>
                 </clipPath>
            </svg>
        </div>
    )
}
export default Hero
