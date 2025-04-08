import {ReactElement} from "react";
import {Link} from "react-router-dom";

type Props = {
    title: string;
    id: string;
    rightIcon?: ReactElement;
    leftIcon?: ReactElement;
    containerClass?: string;
    link: string;
}
const Button = ({title, id, rightIcon, leftIcon, containerClass, link}:Props) => {
    return (
        <Link to={link}>
            <button title={title} id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
                {leftIcon && (leftIcon)}
                <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
                    <div>{title}</div>
                </span>
                {rightIcon && (rightIcon)}
            </button>
        </Link>
    )
}
export default Button
