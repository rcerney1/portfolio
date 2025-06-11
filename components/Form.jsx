'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <>
      <form name="contact" className='flex flex-col gap-y-4' netlify method="POST" action='/'>
        {/* input */}
        <div className='relative flex items-center'>
          <Input type='name' id='name' placeholder='Name' />
          <User className='absolute right-6' size={20} />
        </div>
        {/* input */}
        <div className='relative flex items-center'>
          <Input type='email' id='email' placeholder='Email' />
          <MailIcon className='absolute right-6' size={20} />
        </div>
        {/* textarea */}
        <div className='relative flex items-center'>
          <Textarea placeholder='Type Your Message Here.' />
          <MessageSquare className='absolute top-4 right-6' size={20} />
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </form>
      <form name="contact2" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>

  );
};

export default Form;
