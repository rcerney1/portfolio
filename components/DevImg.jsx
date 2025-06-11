import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} relative w-[300px] h-[300px]`}>
      <Image
        src={imgSrc}
        alt='developer'
        fill
        sizes='(max-width: 768px) 100vw, 300px'
        className='object-contain'
        priority
      />
    </div>
  );
};

export default DevImg;
