import React from "react";
export default function Main() {
  return (
    <>
      {/* Header */}
      <section className="header">
        <div style={{backgroundColor:"#000000"}} className="container-fluid  text-light py-1">
          <div className="row head-share text-center">
            <div className="col ">
              <span>SBI 1742.60 <i style={{fontSize:"20px",color:"#1BB46F"}} className="fa-light fa-mobile"></i>  &nbsp;<span style={{color:"#1BB46F"}}>(1.43%)</span> </span>
            </div>
            <div className="col">
              <span>ICICI Bank 842.34 <i style={{fontSize:"20px",color:"#1BB46F"}} className="fa-thin fa-square"></i> &nbsp;<span style={{color:"#1BB46F"}}>(1.43%)</span></span>
              </div>
            <div className="col">
              <span>Tata Steels 725.21 <i style={{fontSize:"20px",color:"#1BB46F"}} className="fa-thin fa-square"></i> &nbsp;<span style={{color:"#1BB46F"}}>(1.43%)</span></span>
              </div>
            <div className="col">
              <span>Tata Steels 412.68 <i style={{fontSize:"20px",color:"#FD0D30"}} className="fa-thin fa-square"></i>  &nbsp;<span style={{color:"#FD0D30"}}>(1.43%)</span></span>
              </div>
            <div className="col">
              <span>Reliance 1243.98 <i style={{fontSize:"20px",color:"#1BB46F"}} className="fa-thin fa-square"></i> &nbsp;<span style={{color:"#1BB46F"}}>(1.43%)</span></span>
              </div>
            <div className="col">
              <span>Bajaj 829.00 <i style={{fontSize:"20px",color:"#FD0D30"}} className="fa-thin fa-square"></i>  &nbsp;<span style={{color:"#FD0D30"}}>(1.43%)</span></span>
              </div>
          </div>
        </div>
      </section>

      {/* Add section */}
      <section className="add">
        <div className="text-center mt-5">
          <img src="assets/Image 95.png" />
        </div>
      </section>
      <hr />

      {/* Main section */}
      <section>
        {/* Grouped image and text */}
        <div id="main-image" >
          <img src="assets/Group 12264.png" width={700} height={575} alt="" />
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-sm-1 mx-5">
              <img id="boy" src="assets/Asset 3.png" alt="" />
            </div>

            <div className="col-lg-8 mt-5 mx-4">
              <h1>Learn,Play & Win Trade Game</h1>
              <h3 className="text-light">
                From The Best MintGenie For{" "}
                <span style={{ color: "orange" }}>Free</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Card on Image  */}
        <div className="container">
          <div className="card-image">
            <h6 className="text-light px-4 py-3">
              Portfollio:&nbsp;
              <span style={{ color: "orange" }}>MariaGomez</span>
            </h6>

            <div className="container mx-2">
              <div className="row">
                <div className="col-lg-4">
                  <span style={{color:"#909EB1"}}> Mutual funds</span>
                  <h4 className="text-light">₹11,00,211.32</h4>
                </div>
                <div className="col-lg-2">
                  <div style={{ color: "#1bb46f" }}>
                    <span> Returnes</span>
                    <h5>22%</h5>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <span style={{color:"#909EB1"}}>Stocks</span>
                  <h4 className="text-light">₹925,328.32</h4>
                </div>
                <div className="col-lg-2">
                  <div style={{ color: "#1bb46f" }}>
                    <span> Returnes</span>
                    <h5>25%</h5>
                  </div>
                </div>
              </div>
              <hr className="text-light" />
              {/*  */}
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-sm-2">
                      <span style={{color:"#909EB1"}}>Gain</span>
                      <h6 style={{color:"#909EB1"}}>105.22</h6>
                    
                    </div>
                    

                    <div className="col-sm-4">
                      <span style={{color:"#909EB1"}}>Today's Gain</span>
                      <h6 style={{color:"#909EB1"}}>2,202.22</h6>
                    </div>
                    <div className="col">
                      <span style={{color:"#909EB1"}}>Allocation</span>
                      <h6 style={{color:"#909EB1"}}>60%</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-sm-2">
                      <span style={{color:"#909EB1"}}>Gain</span>
                      <h6 style={{color:"#909EB1"}}>205.22</h6>
                    </div>
                    <div className="col-sm-4">
                      <span style={{color:"#909EB1"}}>Today's Gain</span>
                      <h6 style={{color:"#909EB1"}}>4105.22</h6>
                    </div>
                    <div className="col">
                      <span style={{color:"#909EB1"}}>Allocation</span>
                      <h6 style={{color:"#909EB1"}}>60%</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/* progress bar--------------------- */}
              <div className="progress  mt-4 mb-1" style={{ height: "5px" }}>
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <span style={{ color: "#f5e3e3f1" }} className="float-strat">
                75% stocks
              </span>

              <span style={{color:"#909EB1"}} className="float-end">25% Mutual Funds</span>

              {/* Portfollio button--------------- */}
              <div>
                <button id="btn1" className="btn mt-3 py-2">
                  Go To Portfollio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending card section */}
      <section className="trending-stock-card ">
                <div className="dream">
                  <img src="assets/Image 96.png"/>
                </div>
        <div className="container mt-5 py-5 mx-5 ">
          <h1 className="mx-5 px-2 py-3">
            Trending <span style={{ color: "orange" }}>Stocks</span>
          </h1>
                
          
            
              <div className="row mx-5 ">
                <div className="col-sm-2">
                  <div id="Trend-card1">
                    <div className="px-3">
                      <span >SBI</span>
                      <h6 className="text-light">₹190.70</h6>
                      <small style={{ color: "#1BB46F" }}>21.95 (1.02%)</small>
                      &nbsp;<small className="text-light">1 Day</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div id="Trend-card1">
                    <div className="px-3">
                      <span >HDFC Bank</span>
                      <h6 className="text-light">₹700.20</h6>
                      <small style={{ color: "#1BB46F" }}>21.95 (1.02%)</small>
                      &nbsp;<small className="text-light">1 Day</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div id="Trend-card1">
                    <div className="px-3">
                      <span >Axis Bank</span>
                      <h6 className="text-light">₹433.70</h6>
                      <small style={{ color: "#FD0D30" }}>14.25 (1.02%)</small>
                      &nbsp;<small className="text-light">1 Day</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div id="Trend-card1">
                    <div className="px-3">
                      <span >ICICI Bank</span>
                      <h6 className="text-light">₹173.70</h6>
                      <small style={{ color: "#1BB46F" }}>21.95 (1.02%)</small>
                      &nbsp;<small className="text-light">1 Day</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <div id="Trend-card1">
                    <div className="px-3">
                      <span >ICICI Bank</span>
                      <h6 className="text-light">₹173.70</h6>
                      <small style={{ color: "#1BB46F" }}>21.95 (1.02%)</small>
                      &nbsp;<small className="text-light">1 Day</small>
                    </div>
                  </div>
                </div>
               
                {/* View all btn */}
                <div className="mt-4 va">
                    <button id="viewAll" className="btn">
                      View All
                    </button>
                  </div>
                  {/*  */}
                
                 
                
                    
               </div>
              </div>
             
          
      </section>
      {/* End Trending card section */}

      {/* Mutual Funds Performance */}
      <section className="fund-performance">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-9">
              <h1>
                Mutual Funds{" "}
                <span style={{ color: "orange" }}>Performance</span>
              </h1>

              <div className="tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link eq" href="#">
                      Equity
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link border1" href="#">
                      Debt
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Hybrid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Tax Saving
                    </a>
                  </li>
                </ul>
              </div>

              {/* table */}

              <div className="Perform-table">
                <div className="mx-2 tabs2">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link eq2" href="#">
                        Large Cap Fund
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link border1" href="#">
                        Multi cap Fund
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Large & Multi Cap Fund
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Mid Cap Fund
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Small Cap Fund
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="container">
                  {/*  */}
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr className="text-light">
                        <th>
                          <small>Scheme</small>
                        </th>
                        <th>
                          <small>Rank</small>
                        </th>
                        <th>
                          <small>Asset&nbsp;Size(cr)</small>
                        </th>
                        <th>
                          <small>Nav</small>
                        </th>
                        <th>
                          <small>1m</small>
                        </th>
                        <th>
                          <small>3m</small>
                        </th>
                        <th>
                          <small>6m</small>
                        </th>
                        <th>
                          <small>1y</small>
                        </th>
                        <th>
                          <small>3y</small>
                        </th>
                        <th>
                          <small>5y</small>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="tr1">
                        <td>
                          <small className="col">
                            CR Bluechip Equity <br />
                            Fund - D(G)
                          </small>
                        </td>
                        <td>
                          <span className="tb-btn px-2">5*</span>
                        </td>
                        <td>
                          <small className="col">291</small>
                        </td>
                        <td>
                          <small className="col">₹23.33</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>2.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>14.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>10.30%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                      </tr>
                      <tr className="tr2">
                        <td>
                          <small className="col">
                            CR Bluechip Equity <br /> Fund - (G)
                          </small>
                        </td>
                        <td>
                          <span className="tb-btn px-2">5*</span>
                        </td>
                        <td>
                          <small className="col">291</small>
                        </td>
                        <td>
                          <small className="col">₹23.33</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>2.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>14.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>10.30%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                      </tr>
                      <tr className="tr1">
                        <td>
                          <small className="col">
                            JM Large Cap <br /> Fund - D(G)
                          </small>
                        </td>
                        <td>
                          <span className="tb-btn px-2">5*</span>
                        </td>
                        <td>
                          <small className="col">291</small>
                        </td>
                        <td>
                          <small className="col">₹23.33</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>2.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>14.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#ff0031" }}>10.30%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                      </tr>
                      <tr className="tr2">
                        <td>
                          <small className="col">
                            JM Large Cap <br /> Fund - (G)
                          </small>
                        </td>
                        <td>
                          <span className="tb-btn px-2">5*</span>
                        </td>
                        <td>
                          <small className="col">291</small>
                        </td>
                        <td>
                          <small className="col">₹23.33</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>2.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>14.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#ff0031" }}>10.30%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                      </tr>
                      <tr className="tr1 my-3">
                        <td>
                          <small className="col">
                            BNP Paribhas Large <br />
                            Cap Fund - D (G)
                          </small>
                        </td>
                        <td>
                          <span className="tb-btn px-2">5*</span>
                        </td>
                        <td>
                          <small className="col">291</small>
                        </td>
                        <td>
                          <small className="col">₹23.33</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>2.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>14.10%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>10.30%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                        <td>
                          <small style={{ color: "#1bb46f" }}>9.60%</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* View all btn */}
                  <div className="mt-4 text-center px-3">
                    <button id="viewAll" className="btn">
                      View All
                    </button>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="col-sm-3 mt-2">
              <img src="assets/Image 93.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Cards */}
      <section>
        <div className="container  mt-5">
          <h5 className="mt-5 text-light">Latest News</h5>
          <div className="row ">
            <div className="col-lg-4">
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="assets/Ln1.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-light">
                      India Networking Market <br /> Falls 27% in first quater{" "}
                      <br /> of 2020:IDC
                    </h5>
                    <small className="text-light">
                      Updated : 25 June 2020 08.14 PM IST
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-deck">
                <div className="card ">
                  <img
                    className="card-img-top"
                    src="assets/Ln2.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-light">
                      India Networking Market <br /> Falls 27% in first quater{" "}
                      <br /> of 2020:IDC
                    </h5>
                    <small className="text-light">
                      Updated : 25 June 2020 08.14 PM IST
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="assets/Ln3.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-light">
                      India Networking Market <br /> Falls 27% in first quater{" "}
                      <br /> of 2020:IDC
                    </h5>
                    <small className="text-light">
                      Updated : 25 June 2020 08.14 PM IST
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="new-news">
        <div className="container mt-2">
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-3  ">
                  <img src="assets/Mg1.png" />
                </div>
                <div className="col ">
                  <h6 className="text-light">
                    India Networking Market Falls <br /> 27% in first quater of
                    2020: IDC
                  </h6>
                  <small className="sml">
                    Updated: 25 June 2020 08.14 PM IST
                  </small>
                  <hr style={{ width: "220px" }} />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-3  ">
                  <img src="assets/Mg1.png" />
                </div>
                <div className="col ">
                  <h6 className="text-light">
                    India Networking Market Falls <br /> 27% in first quater of
                    2020: IDC
                  </h6>
                  <small className="sml">
                    Updated: 25 June 2020 08.14 PM IST
                  </small>
                  <hr style={{ width: "220px" }} />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-3  ">
                  <img src="assets/Mg1.png" />
                </div>
                <div className="col ">
                  <h6 className="text-light">
                    India Networking Market Falls <br /> 27% in first quater of
                    2020: IDC
                  </h6>
                  <small className="sml">
                    Updated: 25 June 2020 08.14 PM IST
                  </small>
                  <hr style={{ width: "220px" }} />
                </div>
              </div>
            </div>
          </div>
          {/* second row tata image */}
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-3  ">
                  <img src="assets/Mg1.png" />
                </div>
                <div className="col ">
                  <h6 className="text-light">
                    India Networking Market Falls <br /> 27% in first quater of
                    2020: IDC
                  </h6>
                  <small className="sml">
                    Updated: 25 June 2020 08.14 PM IST
                  </small>
                  <hr style={{ width: "220px" }} />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-3  ">
                  <img src="assets/Mg2.png" />
                </div>
                <div className="col ">
                  <h6 className="text-light">
                    India Networking Market Falls <br /> 27% in first quater of
                    2020: IDC
                  </h6>
                  <small className="sml">
                    Updated: 25 June 2020 08.14 PM IST
                  </small>
                  <hr style={{ width: "220px" }} />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-3  ">
                  <img src="assets/Mg2.png" />
                </div>
                <div className="col ">
                  <h6 className="text-light">
                    India Networking Market Falls <br /> 27% in first quater of
                    2020: IDC
                  </h6>
                  <small className="sml">
                    Updated: 25 June 2020 08.14 PM IST
                  </small>
                  <hr style={{ width: "220px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center px-3">
          <button id="viewAll" className="btn">
            View All
          </button>
        </div>
      </section>

      {/* Portfolio LeaderShip Board */}

      <section className="leader-board mt-5">
        <div className=" text-center pt-4">
          <h1>
            Portfolio <span style={{ color: "#f7941d" }}>Leaderboard</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's
          </p>
        </div>

        <div className="container  mt-4">
          <div className="row  ">
            <div className="col-lg-2">
              <div id="card-portleo">
                <img src="assets/PL1.png" />
                <span className="text-light px-1">Manikand Rao</span>
                <div className="mx-3">
                  <span>----------------------------------</span>
                  <span style={{ color: "#f7941d" }}>Rank: 1</span>
                  <h6 className="text-light">₹2,11,324.00</h6>
                  <h6 style={{ color: "#1bb46f" }}>Returns 22%</h6>
                  <small id="ff" style={{ color: "#909eb1" }}>
                    Today's Gain
                  </small>
                  <br />
                  <h6 style={{ color: "#909eb1" }}>13201.22</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div id="card-portleo">
                <img src="assets/PL2.png" />
                <span className="text-light px-1">Manikand Rao</span>
                <div className="mx-3">
                  <span>----------------------------------</span>
                  <span style={{ color: "#f7941d" }}>Rank: 1</span>
                  <h6 className="text-light">₹2,11,324.00</h6>
                  <h6 style={{ color: "#1bb46f" }}>Returns 22%</h6>
                  <small id="ff" style={{ color: "#909eb1" }}>
                    Today's Gain
                  </small>
                  <br />
                  <h6 style={{ color: "#909eb1" }}>13201.22</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-portleo">
                <img src="assets/PL3.png" />
                <span className="text-light px-1">Manikand Rao</span>
                <div className="mx-3">
                  <span>----------------------------------</span>
                  <span style={{ color: "#f7941d" }}>Rank: 1</span>
                  <h6 className="text-light">₹2,11,324.00</h6>
                  <h6 style={{ color: "#1bb46f" }}>Returns 22%</h6>
                  <small id="ff" style={{ color: "#909eb1" }}>
                    Today's Gain
                  </small>
                  <br />
                  <h6 style={{ color: "#909eb1" }}>13201.22</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-portleo">
                <img src="assets/PL4.png" />
                <span className="text-light px-1">Manikand Rao</span>
                <div className="mx-3">
                  <span>----------------------------------</span>
                  <span style={{ color: "#f7941d" }}>Rank: 1</span>
                  <h6 className="text-light">₹2,11,324.00</h6>
                  <h6 style={{ color: "#1bb46f" }}>Returns 22%</h6>
                  <small id="ff" style={{ color: "#909eb1" }}>
                    Today's Gain
                  </small>
                  <br />
                  <h6 style={{ color: "#909eb1" }}>13201.22</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-portleo">
                <img src="assets/PL5.png" />
                <span className="text-light px-1">Manikand Rao</span>
                <div className="mx-3">
                  <span>----------------------------------</span>
                  <span style={{ color: "#f7941d" }}>Rank: 1</span>
                  <h6 className="text-light">₹2,11,324.00</h6>
                  <h6 style={{ color: "#1bb46f" }}>Returns 22%</h6>
                  <small id="ff" style={{ color: "#909eb1" }}>
                    Today's Gain
                  </small>
                  <br />
                  <h6 style={{ color: "#909eb1" }}>13201.22</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-portleo">
                <img src="assets/PL6.png" />
                <span className="text-light px-1">Manikand Rao</span>
                <div className="mx-3">
                  <span>----------------------------------</span>
                  <span style={{ color: "#f7941d" }}>Rank: 1</span>
                  <h6 className="text-light">₹2,11,324.00</h6>
                  <h6 style={{ color: "#1bb46f" }}>Returns 22%</h6>
                  <small id="ff" style={{ color: "#909eb1" }}>
                    Today's Gain
                  </small>
                  <br />
                  <h6 style={{ color: "#909eb1" }}>13201.22</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* view all */}
        <div className="mt-4 text-center px-3">
          <button id="viewAll1" className="btn">
            View All
          </button>
        </div>
      </section>

      {/* Genie Collectio section */}

      <section>
        <div className=" text-center pt-5">
          <h1>
            Genie <span style={{ color: "#f7941d" }}>Collection</span>
          </h1>
          <p style={{ color: " #909eb1" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's
          </p>
        </div>
        {/*  */}

        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-2">
              <div id="card-geniecollection1" className="genie">
                <div className="pt-2 mx-3">
                  <small id="head1">10%</small>
                  <i
                    style={{ color: "#1E6953" }}
                    className="fa-solid fa-circle-chevron-right"
                  ></i>
                  <h6 id="head2">1y Returns</h6>
                  <hr style={{ color: "white", width: "100px" }} />
                  <span id="head3">Value Stocks</span>
                  <br />
                  <h6 id="head4">
                    Lorem Ipsum service
                    <br /> simply dummy text
                    <br />
                    the printin
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-geniecollection2" className="genie">
                <div className="pt-2 mx-3">
                  <small id="head1">10%</small>
                  <i
                    style={{ color: "#4A73C1" }}
                    className="fa-solid fa-circle-chevron-right"
                  ></i>
                  <h6 id="head2">1y Returns</h6>
                  <hr style={{ color: "white", width: "100px" }} />
                  <span id="head3">Value Stocks</span>
                  <br />
                  <h6 id="head4">
                    Lorem Ipsum service
                    <br /> simply dummy text
                    <br />
                    the printin
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-geniecollection3" className="genie">
                <div className="pt-2 mx-3">
                  <small id="head1">10%</small>
                  <i
                    style={{ color: "#A83455" }}
                    className="fa-solid fa-circle-chevron-right"
                  ></i>
                  <h6 id="head2">1y Returns</h6>
                  <hr style={{ color: "white", width: "100px" }} />
                  <span id="head3">Value Stocks</span>
                  <br />
                  <h6 id="head4">
                    Lorem Ipsum service
                    <br /> simply dummy text
                    <br />
                    the printin
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-geniecollection1" className="genie">
                <div className="pt-2 mx-3">
                  <small id="head1">10%</small>
                  <i
                    style={{ color: "#1E6953" }}
                    className="fa-solid fa-circle-chevron-right"
                  ></i>
                  <h6 id="head2">1y Returns</h6>
                  <hr style={{ color: "white", width: "100px" }} />
                  <span id="head3">Value Stocks</span>
                  <br />
                  <h6 id="head4">
                    Lorem Ipsum service
                    <br /> simply dummy text
                    <br />
                    the printin
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-geniecollection2" className="genie">
                <div className="pt-2 mx-3">
                  <small id="head1">10%</small>
                  <i
                    style={{ color: "#4A73C1" }}
                    className="fa-solid fa-circle-chevron-right"
                  ></i>
                  <h6 id="head2">1y Returns</h6>
                  <hr style={{ color: "white", width: "100px" }} />
                  <span id="head3">Value Stocks</span>
                  <br />
                  <h6 id="head4">
                    Lorem Ipsum service
                    <br /> simply dummy text
                    <br />
                    the printin
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div id="card-geniecollection3" className="genie">
                <div className="pt-2 mx-3">
                  <small id="head1">10%</small>
                  <i
                    style={{ color: "#A83455" }}
                    className="fa-solid fa-circle-chevron-right"
                  ></i>
                  <h6 id="head2">1y Returns</h6>
                  <hr style={{ color: "white", width: "100px" }} />
                  <span id="head3">Value Stocks</span>
                  <br />
                  <h6 id="head4">
                    Lorem Ipsum service
                    <br /> simply dummy text
                    <br />
                    the printin
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* view all btn */}

        <div className="mt-4 text-center px-3">
          <button id="viewAll" className="btn">
            View All
          </button>
        </div>
        {/*  */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5 title">
              <span id="title1">The Power of MintGenie</span>
              <br />
              <span id="title2">
                Improve Your Genie Portfolio for{" "}
                <span style={{ color: "#f7941d" }}>Free</span>
              </span>
              <p id="title3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's
              </p>
              <div>
                <button id="btn1" className="btn mt-2 px-5 py-2">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/GN1.png" width={570} />
            </div>
          </div>
        </div>
      </section>

      {/* Learn Now section */}

      <section>
        <div className="container">
          {/* heading */}
          <div className=" text-center pt-5">
            <h1>
              Learn <span style={{ color: "#f7941d" }}>Now</span>
            </h1>
            <p style={{ color: " #909eb1" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's
            </p>
          </div>
          {/* heading */}

          <div className="row">
            <div className="col-lg-4">
              <div className="learn-card">
                <div className="row">
                  <div className="col-sm-2">
                    <img
                      className="mt-3 mx-3"
                      src="assets/Learn1.png"
                      height={65}
                      width={65}
                    />
                  </div>
                  <div className="col mx-5 my-3">
                    <small className="text-light">Stocks</small>
                    <br />
                    <span className="text-light">What are bull & bear</span>
                  </div>
                  <span id="dots" className="dots mx-4">
                    ..............................................................................................................................................
                  </span>
                </div>

                <div id="flexx" className="  container">
                  <div className="text-light flex1">
                    <small style={{ color: "#1bb46f" }}>Level</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>Easy</small>
                  </div>
                  <div className="text-light  flex1">
                    <small style={{ color: "#1bb46f" }}>Points</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>350 Points</small>
                  </div>
                  <div className="text-light mx-5 px-1   flex1">
                    <small style={{ color: "#1bb46f" }}>Read Tine</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>5 mins</small>
                  </div>
                </div>
              </div>
            </div>
        {/* 1.card */}
        <div className="col-lg-4">
              <div className="learn-card">
                <div className="row">
                  <div className="col-sm-2">
                    <img
                      className="mt-3 mx-3"
                      src="assets/Learn2.png"
                      height={65}
                      width={65}
                    />
                  </div>
                  <div className="col mx-5 my-3">
                    <small className="text-light">Stocks</small>
                    <br />
                    <span className="text-light">What are bull & bear</span>
                  </div>
                  <span id="dots" className="dots mx-4">
                  ..............................................................................................................................................
                  </span>
                </div>

                <div id="flexx" className="  container">
                  <div className="text-light flex1">
                    <small style={{ color: "#1bb46f" }}>Level</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>Easy</small>
                  </div>
                  <div className="text-light  flex1">
                    <small style={{ color: "#1bb46f" }}>Points</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>350 Points</small>
                  </div>
                  <div className="text-light mx-5 px-1   flex1">
                    <small style={{ color: "#1bb46f" }}>Read Tine</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>5 mins</small>
                  </div>
                </div>
              </div>
            </div>
        
            {/* 2 */}
            <div className="col-lg-4">
              <div className="learn-card">
                <div className="row">
                  <div className="col-sm-2">
                    <img
                      className="mt-3 mx-3"
                      src="assets/Learn3.png"
                      height={65}
                      width={65}
                    />
                  </div>
                  <div className="col mx-5 my-3">
                    <small className="text-light">Stocks</small>
                    <br />
                    <span className="text-light">What are bull & bear</span>
                  </div>
                  <span id="dots" className="dots mx-4"> ..............................................................................................................................................
                  </span>
                </div>

                <div id="flexx" className="  container">
                  <div className="text-light flex1">
                    <small style={{ color: "#1bb46f" }}>Level</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>Easy</small>
                  </div>
                  <div className="text-light  flex1">
                    <small style={{ color: "#1bb46f" }}>Points</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>350 Points</small>
                  </div>
                  <div className="text-light mx-5 px-1   flex1">
                    <small style={{ color: "#1bb46f" }}>Read Tine</small>
                    <br />
                    <small style={{ color: "#FFFFFF" }}>5 mins</small>
                  </div>
                </div>
              </div>
            </div>
        
            {/* 3 card */}
            
          </div>
        </div>
        <div className="mt-4 text-center px-3">
          <button id="viewAll" className="btn">
            View All
          </button>
        </div>
      </section>

      {/* Add image */}

      <section>
        <div className="container text-center my-5 py-1">
          <img src="assets/Add2.png"/>
        </div>
        
      </section>

      <div className="py-3">
          <hr className="text-light" />
      </div>
{/* Footer */}
   <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            <a id="foo-anc" href="#!"> <span id="n1">mint</span> <span id='n2'>genie</span> </a>
    <br/>
    <address className="mt-3">
    CIN: L22121DL2002PLC117874 <br/>
    Hindustan Times House <br/>
    (2Nd Floor) 18-20, Gandhi Marg <br/>
    New Delhi – 110001,
    </address>
    
    <div id="sele">
      <div  >
          <select id="sele1" className="form-select" aria-label="Default select example">
            <option selected>India</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
      </div>
      <div  className="mx-2" >
          <select id="sele1" className="form-select" aria-label="Default select example">
            <option selected>English</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
      </div>
    </div>
     
              
            </div>
            <div className="col-lg-2 mx-3 my-3 anchor">
              <span>MINTGENIE</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
            <div className="col-lg-2 my-3  anchor">
              <span>NEWS</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
            <div className="col-lg-2 my-3 anchor">
              <span>PORTFOLIO</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
            <div className="col-lg-2 my-3 anchor">
              <span>MARKETS</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
          </div>
          
        </div>
        {/*  */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-3">
              <span id="sub1" className=" text-uppercase">Subscribe to our newsletter </span>
              <input id="sub2" type="text" className="form-control" placeholder="Your Email Address"/><br/>
              <span id="sub3" className=" text-uppercase">follow us </span>
                  <div className="social-media mt-3">
                    <a href="#"><i  className="fab fa-whatsapp"></i></a>
                    <a href="#"><i  className="fab fa-linkedin"></i></a>
                    <a  href="#"><i  className="fab fa-instagram"></i></a>
                    <a href="#"><i  className="fab fa-twitter"></i></a>
                 </div> 
                 <div className=" download mt-4">
                     <span id="sub4" className=" text-uppercase">Download app </span><br/>
                   <div className="mt-3">
                   <a href="#" > <i className="fa-brands fa-apple text-light"></i>&nbsp;Google Play</a>
                    <a  href="#"> <i className="fa-brands fa-google-play text-light"></i>&nbsp;Apple Store</a>
                   </div>
                 </div>
            </div>
           
             <i id="farr" className="fa-solid fa-arrow-right text-light"></i>
            <div className="col-lg-2 mx-3 my-5 anchor">
              <span>STOCKS</span>
              <ul className="list-unstyled ">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
            <div className="col-lg-2 my-5  anchor">
              <span>MUTUAL FUNDS</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
            <div className="col-lg-2 my-5  anchor">
              <span>LEARN</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
            <div className="col-lg-2 my-5 anchor">
              <span>MORE</span>
              <ul className="list-unstyled my-1">
                <a href=""><li>About us</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Terms & Condition</li></a>
                <a href=""><li>Privacy Policy</li></a>
                <a href=""><li>Security</li></a>
                <a href=""><li>Site Map</li></a>
              </ul>
            </div>
          </div>
          {/* disclaimer */}
          <div className="disclaimer mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br/><br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          
        </div>
        <div className="container">
        <div className="float-end mx-4 my-3" style={{color: "#526C8D"}}>
                @ 2016-2022 MintGeine
          </div>
        </div>
    </section>  
    
        
        
     
        
        
        
     




     
 </>   
  );
}
