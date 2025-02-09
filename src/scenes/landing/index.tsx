import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Home from "../home";
import Projects from "../projects";
import Footer from "../footer";
import Experience from "../experience";
import About from "../about";
import Hero from "../hero";
import { SelectedPage } from "../../shared/types";
import AnimatedAbout from "../animatedAbout";
import Features from "../features";

const Landing = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // run this when component unmount
    }, []);

    return (
        <div className="app bg-primary-800">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            {/*<Home setSelectedPage={setSelectedPage} />*/}
            <Hero setSelectedPage={setSelectedPage}/>
            <Projects setSelectedPage={setSelectedPage} />
            {/*<About setSelectedPage={setSelectedPage} ></About>*/}
            <AnimatedAbout setSelectedPage={setSelectedPage} />
            <Features setSelectedPage={setSelectedPage} />
            {/*<Experience setSelectedPage={setSelectedPage} />*/}
            <Footer setSelectedPage={setSelectedPage} />
        </div>
    )
}

export default Landing