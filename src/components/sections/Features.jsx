import { Subtitle, Title } from '..';
import acquisition from '../../img/mortgage.svg';
import activation from '../../img/touch.svg';
import retention from '../../img/user.svg';

const Features = () => (
  <section>
    <Title text='Built exclusively for you' />
    <Subtitle
      text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit laborum — semper quis lectus nulla.'
    />
    <div className='text-xl text-center grid grid-flow-row max-w-sm md:max-w-full md:grid-cols-3 gap-10 md:gap-4 mt-20 mb-20 md:mb-48 mx-auto'>
      <div>
        <div className='inline-block bg-primary w-20 h-20 rounded-full relative'>
          <img
            src={acquisition}
            alt='feature icon'
            className='absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
          />
        </div>
        <h2 className='text-2xl font-bold  my-2'>
          1<span className='text-secondary'>. Acquisition</span>
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div>
        <div className='inline-block bg-primary w-20 h-20 rounded-full relative'>
          <img
            src={activation}
            alt='feature icon'
            className='absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
          />
        </div>
        <h2 className='text-2xl font-bold  my-2'>
          2<span className='text-secondary'>. Acquisition</span>
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div>
        <div className='inline-block bg-primary w-20 h-20 rounded-full relative'>
          <img
            src={retention}
            alt='feature icon'
            className='absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
          />
        </div>
        <h2 className='text-2xl font-bold my-2'>
          3. <span className='text-secondary'>Acquisition</span>
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  </section>
);

export default Features;
