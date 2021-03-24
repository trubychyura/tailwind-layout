const Title = ({ text, classes = '' }) => (
  <h1 className={`text-center font-bold text-5xl text-gray-300 py-6 ${classes}`}>
    {text}
  </h1>
);

export default Title;
