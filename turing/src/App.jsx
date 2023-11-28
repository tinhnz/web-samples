import promo1 from './assets/promo1.svg';
import promo2 from './assets/promo2.svg';
import promo3 from './assets/promo3.svg';
import promo4 from './assets/promo4.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Headline from './components/Headline';
import Stats from './components/Stats';
import WorldStats from './components/WorldStats';
import People from './components/People';
import Partners from './components/Partners';
import Hire from './components/Hire';
import Footer from './components/Footer';
import LinkButton from './components/LinkButton';

const App = () => {
  return (
    <>
      <Header />

      <Hero />

      <Banner />

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
              <LinkButton to='#' size='large'>
                Hire Developers
              </LinkButton>
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
              <LinkButton to='#' size='large'>
                More about Custom Engineering
              </LinkButton>
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
              <LinkButton to='#' size='large'>
                Apply for Jobs
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <Headline />

      <Stats />

      <WorldStats />

      {/* Promo 4 */}
      <section className='py-16'>
        <div className='container grid grid-cols-2 gap-32 items-center justify-center'>
          <div className='flex justify-center'>
            <img src={promo4} alt='promo4' />
          </div>
          <div>
            <h3 className='text-4xl/[54px] font-medium mb-4'>
              Why are the best developers joining Turing? They want careers, not gigs.
            </h3>
            <ul className='list-disc list-inside mb-8'>
              <li className='text-xl my-3'>Vetted once, eligible for life</li>
              <li className='text-xl my-3'>Exclusive Turing developer success support</li>
              <li className='text-xl my-3'>Income stability thanks to 99% rematch rate</li>
            </ul>
            <div className='flex gap-4'>
              <LinkButton to='#' size='large'>
                Apply for Jobs
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <People />
      <Partners />
      <Hire />
      <Footer />
    </>
  );
};

export default App;
