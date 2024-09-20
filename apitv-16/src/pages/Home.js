import TextInput from '../Components/TextInput';
import BestShowsImage from '../img/BestShows.webp';

const Home = () => {
  return (
    <div className='home' >
      <div className='backimagehome  container-fluid ' style={{ backgroundImage: `url(${BestShowsImage})` }}> </div>
      <h3 className='text-center m-5'>Procure por suas séries favoritas, ou navegue pelo menu!</h3>
     
      <TextInput />
    </div>
  );
};

export default Home;
