import hero from '../assets/hero.svg';
import Button from './Button';
import Link from './Link';

const Hero = () => {
  return (
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
          <div className='flex items-baseline'>
            <p className='text-sm mr-2'>Looking for remote job opportunities?</p>
            <Link type='body' className='text-sm font-medium'>
              Apply for Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
