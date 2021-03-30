import { Benefits, Features, Footer, Header, News } from '.';

function App() {
  return (
    <div className='container mx-auto font-sans text-primary overflow-x-hidden'>
      <Header />
      <Features />
      <Benefits />
      <News />
      <Footer />
    </div>
  );
}

export default App;
