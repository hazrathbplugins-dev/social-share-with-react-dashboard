import SocialShareDashboard from "./SocialShareDashboard";

function App() {

  return (
    <>
      <div className="App wrap">
        <div className='dashboard-wrapper'>
          <div className='dashboard-header'>
            <div className='icon-wrapper'><i class="fa-solid fa-share"></i></div>
            <h2>Welcome to Social Share Dashboard</h2>
          </div>
          <SocialShareDashboard />
        </div>
      </div>

    </>
  );
}
export default App;