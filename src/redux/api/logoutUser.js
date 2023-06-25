import axios from 'axios';

export const logoutUser = async () => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/logout'
  );

  return data;
};
