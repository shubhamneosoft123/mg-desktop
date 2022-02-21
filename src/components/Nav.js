import React from 'react';

function Nav() {
  return (
      <>
      
      <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
         
    <a className="navbar-brand  " href="#"> <img id='humb' src="assets/Group 12249.svg" alt="" />&nbsp;<span  id="n1">mint</span><span id='n2'>genie</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" navi collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a id='hm' className="nav-link active text-light" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">NEWS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MARKETS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">LEARN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TOOLS</a>
        </li> 
      </ul>
      <div className='mx-3'>
           <a href=''> <i style={{color:"#909eb1",fontSize:"20px"}} className="fa-solid fa-magnifying-glass"></i></a>
      </div>
       <div className='  mx-1'>
            <a href=''> <i style={{color:"#909eb1",fontSize:"20px"}} className="fa-solid fa-bell"></i></a>
      </div>

      <span id='bell'>3</span>

      <div className='  mx-1'>
            <a className='crete-port' href=''><span id='plus'>+</span>Create Portfolio</a>
      </div>
      <div className='  mx-1'>
            <a className='crete-port' href=''> <img id='play-img' src="assets/log.png" />Play</a>
      </div>
      <div class="dropdown">
      <a class="btn text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" >
        
      </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#"></a></li>
  </ul>
</div>
    </div>
  </div>
</nav>


      
      </>
  );
}

export default Nav;
