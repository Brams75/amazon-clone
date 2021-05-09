import styled from 'styled-components';

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

export default HeaderSearch;
