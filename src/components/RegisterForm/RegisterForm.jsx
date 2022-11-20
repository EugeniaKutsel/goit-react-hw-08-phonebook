import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/authOperations";
import css from '../RegisterForm/RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    }
    dispatch(registerUser(user));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={css.registerForm}>
      <label>Username</label>
      <input type="text" name="name" className={css.registerInput} required/>
      <label>Email</label>
      <input type="email" name="email" placeholder="example@mail.com" className={css.registerInput} required/>
      <label>Password</label>
      <input type="password" name="password" className={css.registerInput} required/>
      <button type="submit" className={css.registerBtn}>Register</button>
    </form>
  );
}

export default RegisterForm;