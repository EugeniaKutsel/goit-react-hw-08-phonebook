import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/authOperations";

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
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm;