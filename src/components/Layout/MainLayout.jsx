import Header from "./Header";
import Map from "./Map";

function MainLayout() {
  return (
    <>
      <h1 className="app-title">IP Address Tracker</h1>
      <div className="grid">
        <Header />
        <div>
          {/* <Map latlng={[37.38605, -122.08385]} /> */}
          <Map />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
