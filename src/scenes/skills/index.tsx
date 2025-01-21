
type Props = {
    name: string;
    image: string;
    year?: number;
}

const Skill = ({name, image}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={image} alt={name} className="w-5 h-5"/>
        <p className="text-xs">{name}</p>
    </div>
  )
}

export default Skill