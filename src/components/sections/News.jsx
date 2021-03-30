import { Title } from '..';

import news1 from '../../img/news1.jpg';
import news2 from '../../img/news2.jpg';
import news3 from '../../img/news3.jpg';
import avatar1 from '../../img/avatar.jpg';
import avatar2 from '../../img/avatar2.jpg';
import avatar3 from '../../img/avatar3.jpg';

const News = () => (
  <section>
    <Title text='Refreshing news for developers and designers' />
    <div className='grid md:grid-cols-3 gap-16 md:gap-4 max-w-sm md:max-w-full mx-auto my-20'>
      <div>
        <img src={news1} alt='News image1' />
        <ul className='list-none flex flex-wrap text-sm text-secondary my-5'>
          <li className='bg-primary py-1 px-2 rounded-3xl mr-2'>Product</li>
          <li className='bg-blue-500 py-1 px-2 rounded-3xl mr-2'>
            Engineering
          </li>
        </ul>
        <h3 className='text-secondary text-2xl font-bold'>
          The quick brown fox jumped over the lazy dog.
        </h3>
        <p className='my-4 text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex'>
          <img
            src={avatar1}
            className='w-10 h-10 rounded-full block mr-2'
            alt="New's icon"
          />
          <p>
            <span className='font-medium text-secondary mr-3'>
              Anastasia Dan
            </span>
            Jan 17, 2020
          </p>
        </div>
      </div>
      <div>
        <img src={news2} alt='News image2' />
        <ul className='list-none flex flex-wrap text-sm text-secondary my-5'>
          <li className='bg-primary py-1 px-2 rounded-3xl mr-2'>Product</li>
          <li className='bg-blue-500 py-1 px-2 rounded-3xl mr-2'>
            Engineering
          </li>
        </ul>
        <h3 className='text-secondary text-2xl font-bold'>
          The quick brown fox jumped over the lazy dog.
        </h3>
        <p className='my-4 text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex'>
          <img
            src={avatar2}
            className='w-10 h-10 rounded-full block mr-2'
            alt="New's icon"
          />
          <p>
            <span className='font-medium text-secondary mr-3'>
              Markus Barker
            </span>
            Jan 12, 2020
          </p>
        </div>
      </div>
      <div>
        <img src={news3} alt='News image3' />
        <ul className='list-none flex flex-wrap text-sm text-white my-5'>
          <li className='bg-primary py-1 px-2 rounded-3xl mr-2'>Product</li>
          <li className='bg-blue-500 py-1 px-2 rounded-3xl mr-2'>
            Engineering
          </li>
        </ul>
        <h3 className='text-secondary text-2xl font-bold'>
          The quick brown fox jumped over the lazy dog.
        </h3>
        <p className='my-4 text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex'>
          <img
            src={avatar3}
            className='w-10 h-10 rounded-full block mr-2'
            alt="New's icon"
          />
          <p>
            <span className='font-medium text-secondary mr-3'>
              Lisa Crickett
            </span>
            Jan 9, 2020
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default News;
