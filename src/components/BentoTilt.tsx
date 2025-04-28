import {RefObject, useRef, useState} from "react";


type TiltProps = {
    children?: React.ReactNode;
    className?: string;
}

export const BentoTilt = ({ children, className = "" }: TiltProps) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef:RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

