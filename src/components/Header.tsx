import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useAppSelector, useAppDispatch } from "../hooks";
import { firebaseCartItems } from "../reducers/firebase";
import { db } from "../firebase";

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  border-radius: 4;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  border-radius: 4px;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    filter: brightness(95%);
  }
`;

const HeaderNavItems = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
  margin: 0.5rem;
  cursor: pointer;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;

interface HeaderProps {
  user: { name: string | null; email: string | null; photo: string | null };
  signOut: () => void;
}

const Header = ({ user, signOut }: HeaderProps): ReactElement => {
  const cartItems = useAppSelector((state) => state.firebase.cartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCartItems = (): void => {
      db.collection("cartItems").onSnapshot((snapshot) => {
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
          <OptionLineOne>Hello, {user && user.name}</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />

            <CartCount>{getCount()}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;
