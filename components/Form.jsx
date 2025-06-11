'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success" // optional, can be '/' or a success page
      className="flex flex-col gap-y-4"
    >
      {/* hidden input Netlify requires */}
      <input type="hidden" name="form-name" value="contact" />

      {/* honeypot anti-spam field */}
      <p hidden>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {/* Name input */}
      <div className="relative flex items-center">
        <Input type="text" id="name" name="name" placeholder="Name" required />
        <User className="absolute right-6" size={20} />
      </div>

      {/* Email input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Email" required />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      {/* Message textarea */}
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Type Your Message Here." required />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      {/* Submit button */}
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
