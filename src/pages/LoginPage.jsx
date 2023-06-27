import { useDispatch } from 'react-redux';

import { loginUserThunk } from 'redux/metods';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(loginUserThunk(user));
    form.reset();
  };

  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={handleSumbit}
      >
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
    </>
  );
};

export default LoginPage;
