import pepsi from '../assets/pepsi.svg';
import dell from '../assets/dell.svg';
import reddit from '../assets/reddit.svg';
import volvo from '../assets/volvo.svg';
import disney from '../assets/disney.svg';

const Banner = () => {
  return (
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
  );
};

export default Banner;
