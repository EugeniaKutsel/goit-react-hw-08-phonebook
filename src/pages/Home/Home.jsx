import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/auth/authSelectors';
import css from '../Home/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <div className={css.homeBox}>
      <h2 className={css.homeTitle}>Welcome to the Phonebook app</h2>
      <p className={css.homeText}>Create your personal Phonebook :)</p>
      {!isLoggedIn
        ? <button type="button" className={css.homeBtn} onClick={() => { navigate(`register`) }}>Get started</button>
        : <button type="button" className={css.homeBtn} onClick={() => { navigate(`contacts`) }}>Get started</button>}
    </div>
  );
}

export default Home;