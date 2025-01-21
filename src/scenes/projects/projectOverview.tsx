import { Link } from 'react-router-dom';


type Props = {
  name: string;
  engine?: string;
  link?: string;
  image: string;
  withDetails?: boolean;
}

const ProjectOverview = ({name, engine, link, image, withDetails}: Props) => {
  const TrimmedName = name.replace(/\W/g, '');
  const overlayStyles = `p-5 absolute z-50 flex h-[253.13px] w-[450px] flex-col items-center justify-center 
  whitespace-normal bg-primary-100 text-center text-white opacity-0
  transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mr-10 inline-block h-[253.13px] w-[450px]">
      <div className={overlayStyles}>
        <h1 className="font-bold text-3xl">{name}</h1>
        {engine && (<h3 className="font-semibold text-xl">{engine}</h3>)}
        {link && (<a href={link}>Learn More</a>)}
        {withDetails && (<Link to={`/project/${TrimmedName}`}>Learn More</Link>)}
      </div>
        <img alt={`${image}`} src={image} className="h-[253.13px] w-[450px]"/>
    </li>
  )
}

export default ProjectOverview