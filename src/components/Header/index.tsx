import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { firebaseCartItems } from '../../reducers/cartItems';
import { db } from '../../firebase';
import HeaderLogo from './HeaderLogo';
import HeaderOptionAddress from './HeaderOptionAddress';
import OptionLineOne from './OptionLineOne';
import OptionLineTwo from './OptionLineTwo';
import HeaderSearch from './HeaderSearch';
import HeaderSearchInput from './HeaderSearchInput';
import HeaderSearchIconContainer from './HeaderSearchIconContainer';
import HeaderNavItems from './HeaderNavItems';
import HeaderOption from './HeaderOption';
import HeaderOptionCart from './HeaderOptionCart';
import CartCount from './CartCount';

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

interface HeaderProps {
  user: { name: string | null; email: string | null; photo: string | null };
  signOut: () => void;
}

const Header = ({ user, signOut }: HeaderProps): ReactElement => {
  const cartItems = useAppSelector((state) => state.cartItems.cartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCartItems = (): void => {
      db.collection('cartItems').onSnapshot((snapshot) => {
        const tempCartItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          cartItem: doc.data(),
        }));

        dispatch(firebaseCartItems(tempCartItems));
      });
    };

    getCartItems();
  }, [dispatch]);

  const getCount = (): number => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.cartItem.quantity;
    });
    return count;
  };
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src="https://i.imgur.com/7I9Was5.png" alt="amazon logo" />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello </OptionLineOne>
          <OptionLineTwo>Select Your Adress</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption onClick={signOut}>
          <OptionLineOne data-testid="name">
            Hello,
            {user && user.name}
          </OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount data-testid="cartCount">{getCount()}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;
