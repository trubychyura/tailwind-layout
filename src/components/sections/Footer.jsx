import { Logo } from '..';

import Nav from '../general/Nav';

import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';
import instagram from '../../img/instagram.svg';

const data = [
  {
    title: 'Products',
    options: ['Web Studio', 'DynamicBox Flex', 'Programming Forms'],
  },
  {
    title: 'Resources',
    options: [
      'Nostrud exercitation',
      'Visual mockups',
      'Nostrud exercitation',
      'Visual mockups',
      'Nostrud exercitation',
    ],
  },
  {
    title: 'Company',
    options: [
      'Consectetur adipiscing',
      'Labore et dolore',
      'Consectetur adipiscing',
      'Labore et dolore',
      'Consectetur adipiscing',
    ],
  },
];

const Footer = () => (
  <footer className='pb-16'>
    <div className='grid lg:grid-cols-2 items-center text-center gap-4 lg:text-left bg-primary text-secondary px-10 py-14'>
      <div>
        <h2 className='text-3xl font-bold'>Stay in the loop</h2>
        <h3 className='text-xl mt-2 mb-3'>
          Join our newsletter to get top news before anyone else.
        </h3>
      </div>
      <form className='w-2/3 sm:w-full mx-auto'>
        <input
          type='email'
          name='email'
          placeholder='Enter your email...'
          className='w-full sm:w-72 p-3 bg-indigo-600  placeholder-gray-400 text-secondary border border-gray-400 rounded-sm  focus:outline-none mb-2 sm:mb-0 sm:mr-2'
        />
        <button
          type='submit'
          className='w-full sm:w-auto text-secondary-dark bg-white font-medium py-3 px-7 rounded-sm inline-block'
        >
          Subscribe
        </button>
      </form>
    </div>
    <div className='py-20 grid sm:grid-rows-2 sm:grid-cols-3  md:grid-cols-5 md:grid-rows-1 gap-6'>
      <div className='sm:col-span-3 md:col-span-2'>
        <Logo />
        <p className='text-lg tracking-tight  mt-3'>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      {data.map((item, i) => (
        <Nav title={item.title} options={item.options} key={i} />
      ))}
    </div>
    <div className='text-sm flex flex-col-reverse md:flex-row justify-between items-start md:items-center'>
      <p>© 2020 Open PRO. All rights reserved.</p>
      <div className='grid grid-flow-col gap-3 mb-2 md:mb-0'>
        <div className='bg-gray-800 rounded-full w-12 h-12 relative'>
          <img
            className=' absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
            src={twitter}
            alt='facebook icon'
          />
        </div>
        <div className='bg-gray-800 rounded-full w-12 h-12 relative'>
          <img
            className=' absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
            src={github}
            alt='facebook icon'
          />
        </div>
        <div className='bg-gray-800 rounded-full w-12 h-12 relative'>
          <img
            className=' absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
            src={facebook}
            alt='facebook icon'
          />
        </div>
        <div className='bg-gray-800 rounded-full w-12 h-12 relative'>
          <img
            className=' absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
            src={instagram}
            alt='facebook icon'
          />
        </div>
        <div className='bg-gray-800 rounded-full w-12 h-12 relative'>
          <img
            className='absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
            src={linkedin}
            alt='facebook icon'
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
