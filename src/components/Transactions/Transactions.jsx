import PropTypes from 'prop-types';
import css from '../Transactions/Transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transaction}>
      <thead className={css.tableTitle}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(item => (
          <tr key={item.id} className={css.tableLines}>
            <td className={css.tableItem}>{item.type}</td>
            <td className={css.tableItem}>{item.amount}</td>
            <td className={css.tableItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};
