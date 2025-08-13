'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/ccss2.png',
    category: 'react JS',
    name: 'CCSS Works',
    description:
      'Designed and developed a full-stack website for a low-voltage security company, featuring clean service pages, a project gallery, and a contact form.',
    link: 'https://ccssworks.com/',
    github: 'https://github.com/rcerney1/cal_comp_compliance_ss',
  },
  {
    image: '/work/rwe.png',
    category: 'Static Site',
    name: 'Redwood Engineering Construction',
    description:
      'Designed and built a responsive website for a Bay Area construction firm, featuring service pages, project highlights, and company credentials.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/modesto.webp',
    category: 'react js',
    name: 'Modesto Paint Pros',
    description:
      'Designed and developed a responsive website for a Modesto-based painting company, featuring service pages, project gallery, SEO optimization, and a contact form.',
    link: 'http://www.modestopaintpros.com',
    github: 'https://github.com/rcerney1/modesto-paint-pros',
  }
  
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Here are some of the projects I have recently built.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
