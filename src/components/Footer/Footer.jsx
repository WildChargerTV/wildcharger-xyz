// * src/components/Footer/Footer.jsx

// Node Module Imports
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineTwitch, AiOutlineX } from 'react-icons/ai';
import { DiFirefox, DiJavascript1, DiReact } from 'react-icons/di';
import { PiCassetteTapeFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
// Local Module Imports
import './Footer.css';
import './Footer-m.css';

/**
 * Renders the site footer.
 * @returns {ReactElement}
 */
export default function Footer() {
    return (<footer id='site-footer'>
        {/* Credits: Site Technology */}
        <div id='site-footer-tech'>
            <p>
                This website has been built by hand, for personal non-profit use. Any presence of 
                copyrighted material beyond the WildCharger character is protected under the
                Copyright Disclaimer under Section 107 of the Copyright Act 1976, whereby allowance
                is made for &quot;fair use&quot; for purposes such as criticism, comment, news 
                reporting, teaching, scholarship, and research. Fair use is a use permitted by
                copyright statute that might otherwise be infringing.
            </p>
            <p>
                <span className='site-footer__text-icon'>
                    <DiReact /><DiJavascript1 />
                </span> Powered by ReactJS
            </p>
            <p>
                <span className='site-footer__text-icon'>
                    <PiCassetteTapeFill />
                </span><div>
                    Asset Delivery powered by{" "}
                    <a href='https://github.com/9001/copyparty' target='_blank' rel='noreferrer'>
                        copyparty
                    </a>
                </div>
            </p>
            <p>
                <span className='site-footer__text-icon'>
                    <DiFirefox />
                </span> Tested on Mozilla Firefox
            </p>
        </div>

        {/* Credits: Me. */}
        <div id='site-footer-wctv'>
            <p>Created & Maintained by WildCharger</p>
            <div id='site-footer-socials'>
                <Link to='https://github.com/WildChargerTV'>
                    <AiFillGithub />
                </Link>
                <Link to='https://www.linkedin.com/in/ethan-guan-ba453a2a0/'>
                    <AiFillLinkedin />
                </Link>
                <Link to='https://x.com/wildchargergame'>
                    <AiOutlineX />
                </Link>
                <Link to='https://www.youtube.com/@WildCharger'>
                    <AiFillYoutube />
                </Link>
                <Link to='https://twitch.tv/wildchargertv'>
                    <AiOutlineTwitch />
                </Link>
            </div>
        </div>
    </footer>);
}