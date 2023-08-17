import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../redux/auth/operations';
import { Form, Label, Input, ButtonLogIn } from './LoginForm.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from '../Navigation';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
        loginUserThunk({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
    );
    form.reset();
  };

  // if(isLoggedIn) return <Navigation to="/contacts" />;
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
            type="email"
            name="email"
            placeholder="Enter email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            required
        />
      </Label>
      <Label>
        Password
        <Input
            type="password"
            name="password"
            placeholder="Enter password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
        />
      </Label>
      <ButtonLogIn type="submit">Log In</ButtonLogIn>
    </Form>
  );
};
