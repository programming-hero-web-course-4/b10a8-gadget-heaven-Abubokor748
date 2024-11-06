import { Outlet, useLoaderData } from "react-router-dom";
import DashboardBanner from "./DashboardBanner";

const Dashboard = () => {

  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <DashboardBanner></DashboardBanner>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
