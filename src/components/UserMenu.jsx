import { useDispatch, useSelector } from 'react-redux';
import { logOutUserThunk } from 'redux/metods';
import { getStateSelector } from 'redux/selector';
const UserMenu = () => {
  const { auth } = useSelector(getStateSelector);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOutUserThunk());
  return (
    <div>
      <p>Welcome , {auth.user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
