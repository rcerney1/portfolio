import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} relative`}>
      <Image
        src={imgSrc}
        alt='Developer'
        width={510}
        height={462}
        className='object-contain'
        priority
      />
    </div>
  );
};

export default DevImg;
