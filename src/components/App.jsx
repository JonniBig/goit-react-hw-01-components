import user from './Data/user.json';
import { Profile } from './Profile/profile';
import data from './Data/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './Data/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './Data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />;
    </div>
  );
};
