'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/ccss2.png',
    category: 'react js',
    name: 'CCSS Works',
    description:
      'Designed and developed a full-stack website for a low-voltage security company, featuring clean service pages, a project gallery, and a contact form.',
    link: 'https://ccssworks.com/',
    github: 'https://github.com/rcerney1/cal_comp_compliance_ss',
  },
  {
    image: '/work/rwe.png',
    category: 'Eleventy',
    name: 'Redwood Engineering Construction',
    description:
      'Designed and built a responsive website for a Bay Area construction firm, featuring service pages, project highlights, and company credentials.',
    link: 'http://redwoodengineeringcon.com/',
    github: 'https://github.com/rcerney1/redwood_construction',
  },
  {
    image: '/work/modesto.webp',
    category: 'react js',
    name: 'Modesto Paint Pros',
    description:
      'Designed and developed a responsive website for a Modesto-based painting company, featuring service pages, project gallery, SEO optimization, and a contact form.',
    link: 'http://www.modestopaintpros.com',
    github: 'https://github.com/rcerney1/modesto-paint-pros',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
