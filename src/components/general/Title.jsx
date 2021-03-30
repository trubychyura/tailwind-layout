const Title = ({ text, classes = '' }) => (
  <h1
    className={`text-center font-bold text-5xl text-secondary py-6 ${classes}`}
  >
    {text}
  </h1>
);

export default Title;
