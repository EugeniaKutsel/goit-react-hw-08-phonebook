import { useDispatch } from "react-redux";
import { logInUser } from "redux/auth/authOperations";
import css from '../LoginForm/LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    const user = {
      email: email.value,
      password: password.value,
    }
    dispatch(logInUser(user));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={css.loginForm} autoComplete='on'>
      <label className={css.loginText}>Email</label>
      <input type="email" name="email" placeholder="example@mail.com" className={css.loginInput} required/>
      <label className={css.loginText}>Password</label>
      <input type="password" name="password" className={css.loginInput} required/>
      <button type="submit" className={css.loginBtn}>Log In</button>
    </form>
  );
}

export default LoginForm;