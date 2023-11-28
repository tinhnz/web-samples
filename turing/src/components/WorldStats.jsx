import LinkButton from './LinkButton';
import world from '../assets/world.svg';

const WorldStats = () => {
  return (
    <section className='py-16 bg-gradient-to-r from-[#4e61c2] to-[#3e85e2] relative'>
      <div className='container'>
        <div className='w-[55%] text-white relative z-10'>
          <h5 className='text-5xl/[60px] font-extralight'>
            3 million+ developers <br />
            from 150 countries <br />
            have already joined Turing
          </h5>
          <div className='flex gap-12 mt-8'>
            <div>
              <h6 className='text-5xl font-medium mb-3'>15+</h6>
              <p className='text-xl'>Job types</p>
            </div>
            <div>
              <h6 className='text-5xl font-medium mb-3'>100+</h6>
              <p className='text-xl'>Technologies</p>
            </div>
            <div>
              <h6 className='text-5xl font-medium mb-3'>7+</h6>
              <p className='text-xl'>Seniority levels</p>
            </div>
          </div>
          <div className='mt-16'>
            <LinkButton color='secondary' size='large'>
              Hire Developers
            </LinkButton>
            <LinkButton color='secondary' variant='outline' size='large' className='ml-4'>
              Apply for Jobs
            </LinkButton>
          </div>
        </div>
        <div className='absolute top-16 right-32 z-0'>
          <img src={world} alt='world' />
        </div>
      </div>
    </section>
  );
};

export default WorldStats;
