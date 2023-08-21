import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {logoutUserThunk} from '../../redux/auth/operations';
import { selectUserData } from '../../redux/auth/selectors';
import { Wrapper, Text, ButtonLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  console.log("reading UserData")
  const userData = useSelector(selectUserData);
  const userName = userData ? userData.name : "";
  return (
    <Wrapper>
      <Text>Welcome {userName} </Text>
      <ButtonLogOut type="button" onClick={() => dispatch(logoutUserThunk())}>
        Logout
      </ButtonLogOut>
    </Wrapper>
  );
};
