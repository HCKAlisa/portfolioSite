import {
  Button,
  Card,
  CardFooter,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader, useDisclosure
} from "@heroui/react";
import {ProjectDetails, Skills} from "../../shared/data.ts";
import {FeatureType, ProjectDetailsType, SkillId, SkillType} from "../../shared/types.ts";
import Skill from "../skills";
import ReactPlayer from 'react-player/youtube'


type Props = {
  name: string;
  engine?: string;
  link?: string;
  image: string;
  withDetails?: boolean;
}

const ProjectOverview = ({name, engine, link, image, withDetails}: Props) => {
  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const detail: ProjectDetailsType | undefined | null = withDetails ? ProjectDetails.find((game) => game.name === name) : null;
  const getIntersection = (array1: SkillType[], array2: SkillId[]): Array<SkillType> => {
    return array1.filter(e => array2.map(e2 => e2.id).includes(e.id));
  };

  return (
  <>
    <Card isFooterBlurred className="">
      <Image
          removeWrapper
          className="z-0 w-full h-full object-cover"
          alt={`${image}`} src={image}
      />
      <CardFooter className="absolute text-primary-600 bg-white/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-sm font-bold ">{name}</p>
            {engine && (<p className="text-tiny ">{engine}</p>)}
          </div>
        </div>
        {link && (
            <a href={link}>
              <Button radius="full" size="sm" color="primary">
                Learn More
              </Button>
            </a>)}
        {withDetails && detail && (
              <Button radius="full" size="sm" color="primary" onPress={onOpen}>
                Learn More
              </Button>
          )}
      </CardFooter>
    </Card>

    {withDetails && detail && (
    <Modal
        backdrop="opaque"
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        className="bg-primary-600"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
    >
      <ModalContent className="text-center" key={name}>
        {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-lg md:text-3xl">{name}</ModalHeader>
              <ModalBody className="text-center">
                <h3 className='text-lg'>{detail.position}</h3>
                <h4 className='text-sm'>{detail.engine}</h4>
                <div className='flex items-center justify-center gap-6 py-2'>
                  {getIntersection(Skills, detail.skills).map((item: SkillType, index: number) => (
                      <Skill
                          key={`${item.name}-${index}`}
                          name={item.name}
                          image={item.image}
                      ></Skill>
                  ))}
                </div>
                <div className=''>
                  {detail.banner && (<img src={detail.banner} alt={detail.name} className='' />)}
                  {detail.youtubeBanner && (
                      <div className="aspect-video w-3/5 mx-auto">
                        <ReactPlayer
                            url={detail.youtubeBanner}
                            width='100%'
                            height='100%'
                            playing={true}
                            loop={true}
                            muted={true}
                        />
                      </div>
                  )}
                </div>
                <p className='text-sm'>{detail.description}</p>
                <div className='py-2'>
                  {detail.shippedLink && (
                      <div className='flex gap-2 items-center justify-center'>
                        <p className='font-semibold'>Shipped Build:</p>
                        <a href={detail.shippedLink} className='underline'>{detail.shippedLink}</a>
                      </div>
                  )}
                  {detail.gitLink && (
                      <div className='flex gap-2 items-center justify-center'>
                        <p className='font-semibold'>Git:</p>
                        <a href={detail.gitLink} className='underline'>{detail.gitLink}</a>
                      </div>
                  )}
                </div>
                <Divider className='border-t-1 border-default-600 dark:border-default-100' />
                <section id='features'>
                  <h2 className='text-xl md:text-2xl font-bold text-center pb-4'>Key Features</h2>
                  {detail?.features.map((item: FeatureType, index: number) => (
                      <div key={`${item.title}-${index}`} >
                        <div  className='grid md:grid-cols-2 gap-4 py-2 text-start items-center'>
                          {index%2===0 && (
                              <div>
                                <h3 className='font-semibold text-lg'>{item.title}</h3>
                                {item.description && (<p className="text-tiny">{item.description}</p>)}
                                {item.link && (<a href={item.link} className='underline text-tiny'>More Information</a>)}
                              </div>
                          )}
                            {item.image && (<img src={item.image} alt={item.title} className='' />)}
                          {item.youtube && (
                              <div className="aspect-video">
                                <ReactPlayer
                                    url={item.youtube}
                                    width='100%'
                                    height='100%'
                                    playing={true}
                                    loop={true}
                                    muted={true}
                                />
                              </div>
                          )}
                          {index%2!==0 && (
                              <div>
                                <h3 className='font-semibold text-lg'>{item.title}</h3>
                                {item.description && (<p className="text-tiny">{item.description}</p>)}
                                {item.link && (<a href={item.link} className='underline'>More Information</a>)}
                              </div>
                          )}

                        </div>
                        <Divider className='border-t-1 border-default-600 dark:border-default-100' />
                      </div>
                  ))}
                </section>
              </ModalBody>
            </>
        )}
      </ModalContent>
    </Modal>
        )}
  </>


  )
}

export default ProjectOverview