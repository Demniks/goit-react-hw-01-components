import user from '../../data/user.json';
import stats from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { Transactions } from '../Transactions/Transactions';
import css from '../Container/Container.module.css';
export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
