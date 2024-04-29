import Header from "./Header";
import Insights from "./Insights";
import Footer from "./Footer";
import DashboardWithTabs from "./DashboardWithTabs";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <aside className="drawer">
          <Insights />
        </aside>
        <main className="main">
          <DashboardWithTabs />
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
