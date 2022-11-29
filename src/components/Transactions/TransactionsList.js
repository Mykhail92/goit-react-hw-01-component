import PropTypes from 'prop-types';

import { Table, TrHead, TrBody } from './TransactionsList.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TrHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TrHead>
      </thead>

      <tbody>
        {items.map((item, index) => {
          const NormilezedType = item.type.split('');
          NormilezedType[0] = NormilezedType[0].toUpperCase();
          const UpperCase = NormilezedType.join('');

          return (
            <TrBody key={item.id} index={index}>
              <td>{UpperCase}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TrBody>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
