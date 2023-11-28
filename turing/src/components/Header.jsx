import logo from '../assets/logo.svg';
import Button from './Button';
import Link from './Link';

const Header = () => {
  return (
    <header className='py-8 border'>
      <div className='container flex items-center justify-between'>
        {/* Left side */}
        <div className='flex items-center gap-8'>
          <img src={logo} alt='logo' />
          <nav>
            <ul className='flex gap-4'>
              <li>
                <Link>Explore Services</Link>
              </li>
              <li>
                <Link>Explore Developers</Link>
              </li>
              <li>
                <Link>Explore Jobs</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-4'>
          <Button>Apply for Jobs</Button>
          <Button>Hire Developers</Button>
          <p>Login</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
