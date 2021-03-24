import { Logo } from '../..';

import Nav from './Nav';


import facebook from '../../../img/facebook.svg';
import twitter from '../../../img/twitter.svg';
import github from '../../../img/github.svg';
import linkedin from '../../../img/linkedin.svg';
import instagram from '../../../img/instagram.svg';

const social = [facebook, twitter, github, linkedin, instagram];

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
    <div className='w-full grid grid-flow-row gap-4 text-center bg-indigo-500 px-2 py-16'>
      <div>
        <h2 className='text-3xl font-bold '>Stay in the loop</h2>
        <h3 className='text-xl mt-2 mb-3'>
          Join our newsletter to get top news before anyone else.
        </h3>
      </div>
      <form>
        <input
          type='email'
          name='email'
          placeholder='Enter your email...'
          className='w-72 p-3 bg-indigo-600  placeholder-gray-400 text-gray-200 border border-gray-400 rounded-sm  focus:outline-none mr-2'
        />
        <button
          type='submit'
          className='text-indigo-500 bg-white font-medium py-3 px-7 rounded-sm'
        >
          Subscribe
        </button>
      </form>
    </div>
    <div className='py-20 text-gray-400 grid grid-flow-row grid-cols-5 gap-6'>
      <div className='col-span-2'>
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
    <div className='text-sm text-gray-400 flex justify-between items-center'>
      <p>© 2020 Open PRO. All rights reserved.</p>
      <div className='grid grid-flow-col gap-3'>
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
            className=' absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 '
            src={linkedin}
            alt='facebook icon'
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
