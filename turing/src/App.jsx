import logo from './assets/logo.svg';
import hero from './assets/hero.svg';
import pepsi from './assets/pepsi.svg';
import dell from './assets/dell.svg';
import reddit from './assets/reddit.svg';
import volvo from './assets/volvo.svg';
import disney from './assets/disney.svg';
import promo1 from './assets/promo1.svg';
import promo2 from './assets/promo2.svg';
import promo3 from './assets/promo3.svg';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <header className='py-8 border'>
        <div className='container flex items-center justify-between'>
          {/* Left side */}
          <div className='flex items-center gap-8'>
            <img src={logo} alt='logo' />
            <nav>
              <ul className='flex gap-4'>
                <li>Explore Services</li>
                <li>Explore Developers</li>
                <li>Explore Jobs</li>
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

      {/* Hero section */}
      <section className='py-12'>
        <div className='container grid grid-cols-hero gap-16 items-center justify-center'>
          <div className='flex justify-center order-2'>
            <img src={hero} alt='hero1' />
          </div>

          <div className=''>
            <h1 className='text-5xl/[60px] font-medium mb-8'>
              The world&rsquo;s first AI-powered tech services company
            </h1>
            <p className='text-lg mb-8'>
              With over 3 million engineers, Turing uses AI to help businesses <br />
              build groundbreaking products with our custom application <br />
              development and on-demand software engineering.
            </p>
            <div className='flex gap-4 mb-8'>
              <Button size='large'>Hire Developers</Button>
              <Button size='large'>Explore Custom Engineering</Button>
            </div>
            <div>
              <span className='text-sm mr-2'>Looking for remote job opportunities?</span>
              <a href='#' className='text-sm font-medium'>
                Apply for Jobs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI transformation */}
      <section className='py-12 bg-[#f8f8f8]'>
        <div className='container flex flex-col items-center justify-center gap-8'>
          <h2 className='text-3xl font-medium'>
            AI transformation is the new digital transformation
          </h2>
          <p className='text-sm'>
            900+ companies have trusted Turing for their custom engineering and on-demand talent.
          </p>
          <div className='flex items-center justify-center gap-8'>
            <img src={pepsi} alt='pepsi' />
            <img src={dell} alt='dell' />
            <img src={reddit} alt='reddit' />
            <img src={volvo} alt='volvo' />
            <img src={disney} alt='disney' />
          </div>
        </div>
      </section>

      {/* Promo 1 */}
      <section className='py-16'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div className='order-2'>
            <img src={promo1} alt='promo1' />
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For businesses</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Hire faster with the world&rsquo;s most deeply vetted developers and teams, matched by
              AI
            </h3>
            <p className='text-lg mb-8'>
              Quickly and efficiently build your engineering team with our deeply vetted talent.
            </p>
            <div className='flex gap-4'>
              <Button size='large'>Hire Developers</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo 2 */}
      <section className='py-16 bg-[#f8f8f8]'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div>
            <img src={promo2} alt='promo2' />
            <div className='bg-black'></div>
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For businesses</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Implement faster with custom software engineering
            </h3>
            <p className='text-lg mb-8'>
              Use our unique combination of expert consultants, engineering talent, and
              AI-accelerated delivery for faster project completion.
            </p>
            <div className='flex gap-4 mb-8'>
              <Button size='large'>More about Custom Engineering</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo 3 */}
      <section className='py-16'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div className='order-2'>
            <img src={promo3} alt='promo3' />
          </div>
          <div>
            <p className='text-sm uppercase font-bold text-[#737373]'>For developers</p>
            <h3 className='text-3xl font-medium mt-2 mb-4'>
              Get AI-matched to high-paying U.S. tech jobs
            </h3>
            <p className='text-lg mb-8'>
              Once you pass our vetting process, you’ll enjoy opportunities with top clients who
              need your expert skills.
            </p>
            <div className='flex gap-4'>
              <Button size='large'>Apply for Jobs</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
