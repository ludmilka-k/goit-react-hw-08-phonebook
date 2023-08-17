import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import {logoutUserThunk} from '../../redux/auth/operations';
import {selectUserData} from '../../redux/auth/selectors';
import { Wrapper, Text, ButtonLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  return (
    <Wrapper>
      <Text>Welcome to Phonebook {userData.name} </Text>
      <ButtonLogOut type="button" onClick={() => dispatch(logoutUserThunk())}>
        Logout
      </ButtonLogOut>
    </Wrapper>
  );
};
