import { Work } from '../../shared/data.ts';
import {WorkExperienceType} from "../../shared/types.ts";
import {Divider, ModalBody, ModalHeader} from "@heroui/react";


const WorkExperience = () => {
    return (
        <>
            <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl">Experience</ModalHeader>
            <ModalBody>
                {Work.map((item: WorkExperienceType, index: number) => (
                    <div key={`work-${index}`} className='w-11/12 mx-auto'>
                        <div className='md:flex justify-between'>
                            <h4 className='md:text-xl text-lg font-semibold'>{item.title}</h4>
                            <h5 className='md:text-xl'>{item.duration}</h5>
                        </div>
                        <div className='md:flex justify-between py-2'>
                            <h5 className='md:text-md font-medium flex items-center'><img alt={item.company} src={item.icon} className="w-[15vw] md:w-[3vw] pr-2"/>{item.company}</h5>
                            <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[15vw] md:w-[3vw] pr-2"/> <h5 className='md:text-md'>{item.country}</h5></div>
                        </div>

                        <ul className="">
                            {item.keyPoints.map((point: string, pointIndex: number) => (
                                <li key={`${item.company.replace(/\W/g, '')}-${pointIndex}`} className='pb-2'>- {point}</li>
                            ))}
                        </ul>
                        <Divider className='border-t-1 border-default-600 dark:border-default-100 my-2'/>
                    </div>
                ))}
            </ModalBody>
        </>
    )
}
export default WorkExperience
