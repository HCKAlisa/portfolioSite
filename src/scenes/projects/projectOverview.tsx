import { Link } from 'react-router-dom';
import useMediaQuery from "../../hooks/useMediaQuery";


type Props = {
  name: string;
  engine?: string;
  link?: string;
  image: string;
  withDetails?: boolean;
}

const ProjectOverview = ({name, engine, link, image, withDetails}: Props) => {
  const TrimmedName = name.replace(/\W/g, '');
  const overlayStyles = `p-5 absolute z-30 flex md:h-[253.13px] md:w-[450px] flex-col items-center justify-center 
  whitespace-normal bg-primary-100 text-center text-white opacity-0
  transition duration-500 hover:opacity-90`;
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <li className="relative md:mr-10 inline-block md:h-[253.13px] md:w-[450px] aspect-video">
      
      <div className={overlayStyles}>
        <h1 className="font-bold text-3xl">{name}</h1>
        {engine && (<h3 className="font-semibold text-xl">{engine}</h3>)}
        {link && (<a href={link}>Learn More</a>)}
        {withDetails && (<Link to={`/project/${TrimmedName}`}>Learn More</Link>)}
      </div>
        <img alt={`${image}`} src={image} className="md:h-[253.13px] md:w-[450px]"/>
        { !isAboveMediumScreens && (
          <h4 className="font-bold text-xl">{name}</h4>
        )}
        { !isAboveMediumScreens && engine && (<h3 className="font-semibold text-lg">{engine}</h3>)}
        { !isAboveMediumScreens && link && (<a href={link}>Learn More</a>)}
        { !isAboveMediumScreens && withDetails && (<Link to={`/project/${TrimmedName}`}>Learn More</Link>)}
    </li>
  )
}

export default ProjectOverview