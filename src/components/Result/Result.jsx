function Result() {
  return (
    <>
      <div className="wrapper grid">
        <div className="grid-item">
          <span className="result-title">IP ADDRESS</span>
          <h2 className="result-content">192.212.174.101</h2>
        </div>
        <div className="grid-item">
          <span className="result-title">LOCATION</span>
          <h2 className="result-content">NY 10001</h2>
        </div>
        <div className="grid-item">
          <span className="result-title">TIMEZONE</span>
          <h2 className="result-content">UTC -05:00</h2>
        </div>
        <div className="grid-item">
          <span className="result-title">ISP</span>
          <h2 className="result-content">SpaceX Starlink</h2>
        </div>
      </div>
    </>
  );
}

export default Result;
