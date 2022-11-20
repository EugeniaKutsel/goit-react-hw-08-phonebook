import { useNavigate } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <div className={css.auth}>
      <button type="button" onClick={() => { navigate(`login`) }} className={css.authLink}>Login</button>
      <button type="button" onClick={() => { navigate(`register`) }} className={css.authLink}>Register</button>
    </div>
  );
}

export default AuthNav;