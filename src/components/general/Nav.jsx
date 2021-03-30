const Nav = ({ title, options = [] }) => (
  <div className='text-sm'>
    <span className='text-secondary '>{title}</span>
    <u className='list-none'>
      {options.map((item, i) => (
        <li key={i}>
          <a href='#'>{item}</a>
        </li>
      ))}
    </u>
  </div>
);

export default Nav;
