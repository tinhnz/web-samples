import logo_white from '../assets/logo_white.svg';
import facebook from '../assets/facebook.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import footer_logo from '../assets/footer.webp';
import Link from './Link';

const links = [
  {
    title: 'Companies',
    items: [
      'Hire Developers',
      'Book a Call',
      'Explore Services',
      'Our Service Offerings',
      'Hire for Specific Skills',
      'Customer Reviews',
      'How to Hire',
      'Interview Q/A',
      'Hiring Resources',
    ],
  },
  {
    title: 'Developers',
    items: [
      'Apply for Jobs',
      'Developer Login',
      'Remote Developer Jobs',
      'Developer Reviews',
      'Knowledge Base',
      'Resume Guide',
      'Jobs for LatAm',
    ],
  },
  {
    title: 'Company',
    items: ['Blog', 'Press', 'About Us', 'Careers'],
  },
  {
    title: 'Contact',
    items: ['Contact Us', 'Help Center', 'Developer Support', 'Customer Support'],
  },
];
const Footer = () => {
  return (
    <section className='py-16 bg-black'>
      <div className='container'>
        {/* Top section */}
        <div className='flex items-start'>
          {/* Left side */}
          <img src={logo_white} alt='logo-white' />

          {/* Right side */}
          <nav className='ml-[16%] grid grid-cols-4 flex-1'>
            {links.map(({ title, items }) => {
              return (
                <div key={title}>
                  <h5 className='text-white text-sm font-medium mb-4'>{title}</h5>
                  <ul className='flex flex-col items-start gap-4'>
                    {items.map((item) => (
                      <li key={item}>
                        <Link type='footer' className='text-sm text-gray-300'>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom section */}
        <div className='mt-8 flex items-center justify-between'>
          {/* Left side */}
          <div className='flex items-center gap-4'>
            <img className='w-12 h-12' src={footer_logo} alt='footer-logo' />
            <div>
              <span className='text-white'>© 2023 Turing</span>
              <address className='text-xs text-[--color-footer-link]'>
                900 Embarcadero Road Palo Alto, CA, 94303
              </address>
            </div>
          </div>

          {/* Middle */}
          <div className='flex justify-center items-center gap-2'>
            <a href='#' className='cursor-pointer'>
              <img src={facebook} alt='facebook' />
            </a>
            <a href='#' className='cursor-pointer'>
              <img src={x} alt='x' />
            </a>
            <a href='#' className='cursor-pointer'>
              <img src={linkedin} alt='linkedin' />
            </a>
            <a href='#' className='cursor-pointer'>
              <img src={instagram} alt='instagram' />
            </a>
            <a href='#' className='cursor-pointer'>
              <img src={youtube} alt='youtube' />
            </a>
          </div>

          {/* Right side */}
          <ul className='flex justify-between gap-4'>
            {['Sitemap', 'Terms of Service', 'Privacy Policy', 'Privacy Settings'].map((item) => (
              <li key={item}>
                <Link type='footer' className='text-xs text-gray-300'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
