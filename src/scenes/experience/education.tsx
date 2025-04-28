import {Education} from '../../shared/data.ts';
import {EducationType} from "../../shared/types.ts";
import {ModalBody, ModalHeader} from "@heroui/react";


const EducationExperience = () => {
return (
        <>
            <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl">Education</ModalHeader>
            <ModalBody>
                {Education.map((item: EducationType, index: number) => (
                    <div key={`work-${index}`} className='py-2'>
                        <div className='md:flex justify-between'>
                            <h4 className='md:text-2xl font-semibold'>{item.title}</h4>
                            <h5 className='md:text-xl'>{item.duration}</h5>
                        </div>
                        <div className='md:flex justify-between'>
                            <h5 className='md:text-xl font-medium flex items-center'><img alt={item.school} src={item.icon} className="w-[15vw] md:w-[3vw] pr-2"/>{item.school}</h5>
                            <div className="flex items-center"><img alt={item.country} src={item.flag} className="w-[15vw] md:w-[3vw] pr-2"/> <h5 className='md:text-xl'>{item.country}</h5></div>
                        </div>
                        {item.major && (
                            <div>
                                <h5>Major: {item.major}</h5>
                            </div>
                        )}
                        {item.minor && (
                            <div>
                                <h5>Minor: {item.minor}</h5>
                            </div>
                        )}

                    </div>
                ))}
            </ModalBody>
        </>
    )
}
export default EducationExperience
