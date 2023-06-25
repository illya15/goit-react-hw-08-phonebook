import axios from 'axios';

export const updateUser = async () => {
  const { data } = await axios(
    'https://connections-api.herokuapp.com/users/current'
  );

  return data;
};
