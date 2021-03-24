const Button = ({ text, bg = 'bg-indigo-500', color = '', classes = '' }) => {
  return (
    <div className={`${classes}`}>
      <a
        href='#'
        className={`inline-block px-5 py-2 rounded-sm font-medium text-lg ${bg} ${color} `}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
