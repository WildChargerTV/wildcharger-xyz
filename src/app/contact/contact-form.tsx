// * src/app/contact/contact-form.tsx || Contact Form Component

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { lowLatencyPreset, type ProfanityBusterConfig, integrations } from 'profanitybuster';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

/** Extract the ProfanityBuster hook. */
const { useProfanityBuster } = integrations;

/**
 * Client component which renders the form used in the Contact page. Takes a name, and email
 * address, and a message up to 750 characters long, and sends it to the inquiry inbox via EmailJS.
 * @component `ContactForm`
 */
export default function ContactForm() : import('react').JSX.Element {
  // React Hooks
  const formRef = useRef(null);
  const router = useRouter();
  // Local State Values
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  /** Set up the Profanity Buster. */
  const pbConfig: Partial<ProfanityBusterConfig> = {
    ...lowLatencyPreset,
    languages: { enabled: ['en'], autoDetect: false, fallback: 'en' },
    detection: { caseSensitive: false, wholeWordsOnly: true, levenshteinDistance: 0, customWords: [] }
  };
  const { buster } = useProfanityBuster({ config: pbConfig, preloadLanguages: ['en'] });
  

  /** On form submission, send an email to the general inquiries box. */
  const onSubmit = (event) => {
    // Prevent a redirect or refresh.
    event.preventDefault();
    
    // Ensure no profanity is in the name or message.
    // TODO allowlist. common profanity should be ok
    if(buster.detect(name).hasProfanity || buster.detect(message).hasProfanity) 
      alert('An error has occurred. Please double-check the contents of your submission and try again.');
    // Ensure the message is not too long.
    else if(message.length > 750)
      alert('Your message exceeds the 750-character limit. Please shorten your message and try again.');
    // Send the email, provided no other errors occur.
    else emailjs.sendForm('privateemail_info', 'contact_form', formRef.current, {
      publicKey: 'q6ePw5OFglADt8KoD'
    }).then(() => {
      alert('Email sent. You should receive a confirmation shortly.');
      router.push('/');
    }).catch((err) => {
      alert('An error has occurred. Your email may not have been sent.');
      console.error(err);
    });
  };

  /** Return the form body. */
  return (<form 
    ref={formRef} onSubmit={onSubmit}
    className='flex flex-col gap-y-[2.5vw] md:gap-y-[0.5vw] w-full md:w-[75%] mx-auto my-[5vw] md:my-[3vw]'
  >
    {/* Name/Username & Email Address */}
    <div className='inline-flex max-md:flex-col gap-x-[0.5vw] max-md:gap-y-[1.5vw] w-full'>
      <input 
        type='text' 
        name='user_name' 
        placeholder='Name or Username' 
        required
        onChange={(e) => setName(e.target.value)}
        className='bg-[#ffffff26] border-2 border-solid border-b-gray-400 rounded-sm font-lato p-[5px] text-white text-[4vw] md:text-[1.5vw] box-border w-full md:w-[49.9%]'
      />
      <input 
        type='email' 
        name='user_email' 
        placeholder='Email Address' 
        required
        className='bg-[#ffffff26] border-2 border-solid border-b-gray-400 rounded-sm font-lato p-[5px] text-white text-[4vw] md:text-[1.5vw] box-border w-full md:w-[49.9%]'
      />
    </div>

    {/* Message Box */}
    <div className='w-full'>
      <textarea 
        name='message' 
        placeholder='Your message here... (max. 750 chars)' 
        required
        onChange={(e) => setMessage(e.target.value)}
        className='bg-[#ffffff26] border-2 border-solid box-border border-b-gray-400 rounded-sm font-lato w-full h-[33vh] text-[3vw] md:text-[1.25vw]'
      />
    </div>

    {/* Submit Button */}
    <div className='w-full flex justify-end'>
      <button type='submit' className='px-[0.75vw] py-[0.35vw] cursor-pointer border-2 border-solid border-white rounded-sm text-[5vw] md:text-[1.75vw] font-semibold'>
        Submit
      </button>
    </div>
  </form>);
}
