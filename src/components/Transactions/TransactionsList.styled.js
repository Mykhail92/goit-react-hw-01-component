import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  thead {
    border-radius: 0.5rem;
  }
`;

export const TrHead = styled.tr`
  background-color: lightblue;
  color: grey;
  height: 40px;
  border-radius: 0.5rem;
`;

export const TrBody = styled.tr`
  border-radius: 0.5rem;
  height: 30px;
  background-color: ${props => {
    if (props.index % 2 === 0) {
      return 'grey';
    }
  }};

  td {
    text-align: center;
    color: darkgray;
  }
`;
