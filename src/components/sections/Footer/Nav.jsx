const Nav = ({ title, options = [] }) => (
  <div className='text-sm'>
    <span className='text-gray-200'>{title}</span>
    <u className='list-none'>
      {options.map((item, i) => (
        <li key={i} className='py-1'>
          <a className='no-underline' href='#'>
            {item}
          </a>
        </li>
      ))}
    </u>
  </div>
);

export default Nav;
