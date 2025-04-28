import {Divider, ModalBody, ModalHeader} from "@heroui/react";
import {Skills} from '../../shared/data.ts';
import {SkillType} from "../../shared/types.ts";

const Skill = () => {
    return (
        <>
            <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl">Skills</ModalHeader>
            <ModalBody>
                <h5 className='md:text-xl font-medium text-center'>Game Development</h5>
                <div className='grid grid-cols-4 md:grid-cols-6 py-2 gap-2'>
                    {Skills.filter((item: SkillType) => item.category === "game").map((item: SkillType, index: number) => (
                        <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                            <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
                <Divider className='border-t-1 border-default-600 dark:border-default-100 my-2'/>
                <h5 className='md:text-xl font-medium text-center'>Web Development</h5>
                <div className='grid grid-cols-4 md:grid-cols-6 py-2 gap-2'>
                    {Skills.filter((item: SkillType) => item.category === "web").map((item: SkillType, index: number) => (
                        <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                            <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
                <Divider className='border-t-1 border-default-600 dark:border-default-100 my-2'/>
                <h5 className='md:text-xl font-medium text-center'>Tools</h5>
                <div className='grid grid-cols-4 md:grid-cols-6 py-2 gap-2'>
                    {Skills.filter((item: SkillType) => item.category === "tool").map((item: SkillType, index: number) => (
                        <div key={`skill-${index}`} className='px-2 flex flex-col items-center'>
                            <div><img alt={item.name} src={item.image} className="md:w-[2vw]"/></div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
            </ModalBody>
        </>
    )
}
export default Skill
