import Button from './Button';

const Hire = () => {
  return (
    <section className='py-16 bg-black text-white'>
      <div className='container flex flex-col items-center'>
        <h4 className='text-4xl/[51px] font-medium mb-6'>Hire remote developers</h4>
        <p className='mb-8 text-center'>
          Tell us the skills you need and we&rsquo;ll find the best developer for you in days,
          <br />
          not weeks.
        </p>
        <Button>Hire Developers</Button>
      </div>
    </section>
  );
};

export default Hire;
