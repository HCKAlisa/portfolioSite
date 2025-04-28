import {ReactElement, useRef, useState} from "react";
import {Button, Modal, ModalContent, useDisclosure} from "@heroui/react";
import {TiLocationArrow} from "react-icons/ti";
import WorkExperience from "../scenes/experience/work.tsx";
import EducationExperience from "../scenes/experience/education.tsx";
import Skill from "../scenes/experience/skills.tsx";


type CardProps = {
    src: string,
    title: ReactElement,
    description?: string,
    isComingSoon?: boolean,
    link: string,
}

export const BentoCard = ({ src, title, description, isComingSoon, link }: CardProps) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef= useRef<HTMLAnchorElement>(null);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);


    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-orange-100">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base opacity-0">{description}</p>
                    )}
                </div>

                {!isComingSoon && (
                    <>
                        <Button
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onPress={onOpen}
                            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-orange-100 px-5 py-2 text-xs uppercase text-white"
                        >
                            {/* Radial gradient hover effect */}
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                                style={{
                                    opacity: hoverOpacity,
                                    background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                                }}
                            />
                            <TiLocationArrow className="relative z-20" />
                            <p className="relative z-20">Learn More</p>
                        </Button>
                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            size="4xl"
                            scrollBehavior="inside"
                            backdrop="opaque"
                            classNames={{
                                backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                            }}
                            className="bg-primary-600"
                        >
                            <ModalContent>
                                {() => (
                                    <>
                                        {link == "experience" && (
                                            <WorkExperience />
                                        )}
                                        {link == "education" && (
                                            <EducationExperience />
                                        )}
                                        {link == "skills" && (
                                            <Skill />
                                        )}
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </>
                )}
            </div>
        </div>
    );
};
