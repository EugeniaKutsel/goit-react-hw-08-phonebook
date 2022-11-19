import { useDispatch } from "react-redux";
import { logInUser } from "redux/auth/authOperations";

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
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm;