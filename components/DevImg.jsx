import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      {/* <Image src={imgSrc} fill priority alt='' /> */}
      <img src={imgSrc} alt='dev' className='w-[300px] h-auto border border-red-500' />

    </div>
  );
};

export default DevImg;
