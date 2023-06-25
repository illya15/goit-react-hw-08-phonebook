import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { getStateSelector } from 'redux/selector';

const AppBar = () => {
  const { auth } = useSelector(getStateSelector);
  return (
    <header>
      <Navigation />
      {!auth.isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};
export default AppBar;
