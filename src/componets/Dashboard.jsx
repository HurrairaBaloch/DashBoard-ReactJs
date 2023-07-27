import DashBoardStats from "./DashBoardStats";
import TransactionChart from "./TransactionChart";
import RecentOrders from "./RecentOrder";
import BuyerProfileChart from "./BuyerProfileChart";

const Dashboard = () => {
  return (
    <div className="w-full">
      <DashBoardStats />
      <div className="flex flex-row gap-4">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4">
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
