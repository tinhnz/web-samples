import headline1 from '../assets/headline1.svg';
import headline2 from '../assets/headline2.svg';
import globalSourcing from '../assets/global-sourcing.svg';
import intelligentVetting from '../assets/intelligent-vetting.svg';
import extensiveMatching from '../assets/extensive-matching.svg';
import paymentCompliance from '../assets/payment-compliance.svg';
import automated from '../assets/automated.svg';
import Button from './Button';

const Headline = () => {
  return (
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
  );
};

export default Headline;
