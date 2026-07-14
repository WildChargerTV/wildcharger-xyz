// * src/app/contact/page.tsx || Contact Page Component

// Local Module Imports
import ContactForm from './contact-form';

/**
 * Render's the site's contact page. Server component which utilizes the ContactForm client
 * component.
 * @component `Page`
 * @kind Contact Page
 * @requires {@link ContactForm}
 */
export default function Page() : import('react').JSX.Element {
  /** Return the page content. */
  return (<main className='min-h-[33vw] mt-[3vw] mx-auto font-montserrat text-[#e8e6e3] w-[85%]'>
    {/* Page Title */}
    <h1 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] font-extrabold text-outline-h'>
      Contact
    </h1>

    {/* Page Description */}
    <p className='text-[4vw] md:text-[1.5vw]'>
      At present, the best way to get in touch with me is to send an email to 
      to <b>info@wildcharger.xyz</b>. You are welcome to either send an email directly, or use the
      below contact form to send a ticketed request.
      <br /><br />
      If you would like to get in touch with me via social media, my social links can be found in
      the website&apos;s footer at the bottom of the page.
    </p>

    {/* Site Contact Form */}
    <ContactForm />
  </main>);
}
