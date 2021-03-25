import animation from '../../img/animation.svg';

const Benefits = () => (
  <section className='grid grid-cols-2 gap-2'>
    <div>
      <h2 className='font-custom'>Lighting fast workflow</h2>
    </div>
    <div>
      <img src={animation} alt='Pulsating animation' />
    </div>
  </section>
);

export default Benefits;
