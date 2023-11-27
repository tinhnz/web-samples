import quality from '../assets/quality.svg';
import efficiency from '../assets/efficiency.svg';
import expertise from '../assets/expertise.svg';

const Stats = () => {
  return (
    <section className='py-16'>
      <div className='container flex flex-col'>
        <h3 className='text-center text-3xl font-medium'>Why businesses trust Turing</h3>
        <div className='flex flex-row justify-evenly mt-14'>
          <div>
            <div className='flex gap-2 items-center mb-4'>
              <img src={quality} alt='quality' />
              <p className='font-medium'>Quality</p>
            </div>
            <p className='text-4xl font-medium text-[#1FB70B] mb-2'>
              95% trial
              <br />
              success rate
            </p>
            <p className='text-lg'>
              for smarter, more
              <br />
              productive teams
            </p>
          </div>

          <div>
            <div className='flex gap-2 items-center mb-4'>
              <img src={efficiency} alt='efficiency' />
              <p className='font-medium'>Efficiency</p>
            </div>
            <p className='text-4xl font-medium text-[#1FB70B] mb-2'>
              97% engagement
              <br />
              success
            </p>
            <p className='text-lg'>
              for accelerated results with
              <br />
              greater efficiency
            </p>
          </div>

          <div>
            <div className='flex gap-2 items-center mb-4'>
              <img src={expertise} alt='expertise' />
              <p className='font-medium'>Expertise</p>
            </div>
            <p className='text-4xl font-medium text-[#1FB70B] mb-2'>
              125+ combined
              <br />
              years of experience
            </p>
            <p className='text-lg'>
              for truly transformational
              <br />
              outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
