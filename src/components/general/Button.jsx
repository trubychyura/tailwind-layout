const Button = ({
  text,
  bg = 'bg-primary',
  color = 'text-secondary',
  classes = '',
}) => {
  return (
    <div className={`${classes}`}>
      <a
        href='#'
        className={`block text-center px-5 py-2 rounded-sm font-medium text-lg ${bg} ${color} hover:text-secondary ${
          bg === 'bg-primary' ? 'hover:bg-indigo-600' : ''
        } `}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
