import { Button, Logo, Subtitle, Title } from '..';
import img from '../../img/employees.jpg';

const Header = () => (
  <header className='pt-5'>
    <div className='flex justify-between items-center text-lg mb-20'>
      <Logo />
      <ul className='list-none text-secondary hidden md:flex'>
        <li className='px-3 py-5 '>
          <a href='#'>Features</a>
        </li>
        <li className='px-3 py-5 '>
          <a href='#'>Pricing</a>
        </li>
        <li className='px-3 py-5 '>
          <a href='#'>Blog</a>
        </li>
        <li className='px-3 py-5 '>
          <a href='#'>About us</a>
        </li>
      </ul>
      <div className='hidden md:flex'>
        <Button
          text='Sign in'
          classes='mr-2'
          color='text-secondary-dark'
          bg='bg-transparent'
        />
        <Button text='Sign up' />
      </div>
      <div className='md:hidden w-7 h-1 bg-white hamburger'></div>
    </div>
    <div>
      <Title text='Landing template for startups' />
      <Subtitle
        text='Out landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever'
      />
      <div className='grid grid-flow-row md:grid-flow-col md:grid-col-2 gap-5  max-w-xs md:maw-w-full mx-auto mt-10'>
        <Button text='Start free trial' />
        <Button text='Learn more' bg='bg-gray-700' />
      </div>
      <div className='mt-20 mb-28'>
        <img src={img} alt='Video employees' className='w-full h-full' />
      </div>
    </div>
  </header>
);

export default Header;
