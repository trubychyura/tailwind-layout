import avatar from '../../img/avatar.jpg';
import benefits from '../../img/benefits.png';

const Benefits = () => (
  <section className='flex flex-col-reverse  md:flex-row mb-28 md:mb-48'>
    <div className='md:flex-1'>
      <h4 className='font-custom text-xl text-secondary-dark'>
        Lighting fast workflow
      </h4>
      <h3 className='text-3xl text-secondary font-bold my-2'>
        Say hello to research data
      </h3>
      <p className='text-xl'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa.
      </p>
      <ul className='list-none text-lg mt-3 mb-8'>
        <li className='benefits-list__item'>Premium statistics</li>
        <li className='benefits-list__item'>Unlimited jobs</li>
        <li className='benefits-list__item'>Free goods</li>
        <li className='benefits-list__item'>No code required</li>
        <li className='benefits-list__item'>Always up to date</li>
      </ul>
      <div className='flex'>
        <img
          className='w-10 h-10 rounded-full block mr-3'
          src={avatar}
          alt='Avatar'
        />
        <div>
          <p className='italic mb-3'>
            "Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing".
          </p>
          <div className='text-secondary-dark font-medium'>
            <span className='text-secondary mr-4 relative pl-5 person-name'>
              Anastasia Dan
            </span>
            UX Board
          </div>
        </div>
      </div>
    </div>
    <div className='relative md:flex-1 mb-6 md:mb-0 md:ml-5'>
      <img
        className='min-w-full md:min-w-540px md:absolute md:-top-10 md:left-0'
        src={benefits}
        alt='benefits img'
      />
    </div>
  </section>
);

export default Benefits;
