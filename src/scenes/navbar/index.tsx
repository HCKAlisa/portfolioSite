import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo/logoNoBackground.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const navBarBackground = isTopOfPage ? "" : "bg-primary-600 drop-shadow";

    return (
        <nav>
            <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-50 w-[100vw] md:w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="logo" className="w-10 h-10" />
                        { isAboveMediumScreens ? (
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="About"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Experience"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            </div>
                        ) : (
                            <button title="Open Menu" className="rounded-full bg-orange-100 p-2" onClick={()=> setMenuToggled(!isMenuToggled)}><Bars3Icon className="h-6 w-6 text-white"/></button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL*/}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-50 h-full w-[300px] bg-primary-600 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button title="Close Menu" onClick={()=> setMenuToggled(!isMenuToggled)}><XMarkIcon className="h-6 w-6 text-white"/></button>
                    </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Project"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Experience"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )

            }

        </nav>
    )
}

export default Navbar