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
import headline1 from './assets/headline1.svg';
import headline2 from './assets/headline2.svg';
import globalSourcing from './assets/global-sourcing.svg';
import intelligentVetting from './assets/intelligent-vetting.svg';
import extensiveMatching from './assets/extensive-matching.svg';
import paymentCompliance from './assets/payment-compliance.svg';
import automated from './assets/automated.svg';
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

      {/* Headline */}
      <section className='py-16 bg-[#f8f8f8]'>
        <h2 className='text-5xl font-medium text-center mb-16'>
          Our global reach and AI help you build faster
        </h2>
        <div className='container flex flex-row justify-between'>
          <div className='basis-3/12 p-10 border rounded-2xl bg-white'>
            <img src={headline1} alt='headline1' />
            <h5 className='text-lg font-medium mt-6 mb-4'>We take your specific requirements</h5>
            <ul className='list-disc list-inside'>
              <li>Project scope</li>
              <li>Roles</li>
              <li>Tech stacks</li>
              <li>Seniority levels</li>
              <li>Time zone overlap</li>
            </ul>
          </div>
          <div className='basis-5/12 py-10 px-14 border rounded-2xl bg-white'>
            <h5 className='text-lg text-center font-medium mt-6 mb-4'>
              And use our global developer
              <br />
              platform to handle
            </h5>
            <ul className='flex flex-col gap-2'>
              <li className='grid grid-cols-[32px_auto] text-[var(--color-blue)] font-medium min-h-[48px] rounded-xl bg-[rgba(86,168,247,.1)] px-8 py-3'>
                <img src={globalSourcing} alt='globalSourcing' />
                <p>Global Sourcing</p>
              </li>
              <li className='grid grid-cols-[32px_auto] text-[var(--color-blue)] font-medium min-h-[48px] rounded-xl bg-[rgba(86,168,247,.1)] px-8 py-3'>
                <img src={intelligentVetting} alt='intelligentVetting' />
                <p>Intelligent Vetting</p>
              </li>
              <li className='grid grid-cols-[32px_auto] text-[var(--color-blue)] font-medium min-h-[48px] rounded-xl bg-[rgba(86,168,247,.1)] px-8 py-3'>
                <img src={extensiveMatching} alt='extensiveMatching' />
                <p>Extensive Matching</p>
              </li>
              <li className='grid grid-cols-[32px_auto] text-[var(--color-blue)] font-medium min-h-[48px] rounded-xl bg-[rgba(86,168,247,.1)] px-8 py-3'>
                <img src={paymentCompliance} alt='paymentCompliance' />
                <p>Payments Compliance</p>
              </li>
              <li className='grid grid-cols-[32px_auto] text-[var(--color-blue)] font-medium min-h-[48px] rounded-xl bg-[rgba(86,168,247,.1)] px-8 py-3'>
                <img src={automated} alt='automated' />
                <p>Automated On-The-Job Quality Control</p>
              </li>
            </ul>
            <Button className='text-base w-full mt-4'>See How It Works</Button>
          </div>
          <div className='basis-3/12 p-10 border rounded-2xl bg-white'>
            <img src={headline2} alt='headline2' />
            <h5 className='text-lg font-medium mt-6 mb-4'>
              For an ideal project team that builds faster
            </h5>
            <ul className='list-disc list-inside'>
              <li>Full time</li>
              <li>AI-accelerated delivery</li>
              <li>AI-powered development workflow</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
