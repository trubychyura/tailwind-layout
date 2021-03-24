import { Button, Logo, Subtitle, Title } from '..';
import img from '../../img/employees.jpg';

const Header = () => (
  <header className='pt-5'>
    <div className='flex justify-between items-center text-lg mb-20'>
      <Logo />
      <ul className='flex list-none text-gray-300'>
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
      <div className='flex'>
        <Button
          text='Sign in'
          classes='mr-2'
          color='text-indigo-500'
          bg='bg-transparent'
        />
        <Button text='Sign up' />
      </div>
    </div>
    <div>
      <Title text='Landing template for startups' />
      <Subtitle
        text='Out landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever'
      />
      <div className='flex justify-center my-8'>
        <Button text='Start free trial' classes='mr-4' />
        <Button text='Learn more' bg='bg-gray-700' />
      </div>
      <div className='mt-20 mb-28'>
        <img src={img} alt='Video employees' className='w-full h-full' />
      </div>
    </div>
  </header>
);

export default Header;
