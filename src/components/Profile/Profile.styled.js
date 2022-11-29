import styled from 'styled-components';

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-top: 10px;
  padding-bottom: 40px;
  img {
    width: 150px;
    border-radius: 50%;
    border: 2px dotted black;
    background-color: lightgrey;
  }
`;

export const UserName = styled.p`
  margin: 10px 0 10px 0;
  font-weight: bold;
  font-size: 24px;
`;

export const UserDscr = styled.p`
  margin: 0;
  color: rgba(2, 25, 2, 0.25);
`;

export const UserList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-left: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  color: rgba(2, 2, 44, 0.25);
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: black;
`;
