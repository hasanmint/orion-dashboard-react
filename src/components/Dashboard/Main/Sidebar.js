import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
           <div class="leftside-menu">
             <Link to="/dashboard"  class="logo text-center logo-light">
                    <span class="logo-lg">
                        <img src="assets/images/logo.png" alt="" height="25"/>
                    </span>
                    <span class="logo-sm">
                        <img src="assets/images/logo_sm.png" alt="" height="16"/>
                    </span>
                </Link>

              
                <div class="h-100" id="leftside-menu-container" data-simplebar>

                    <ul class="side-nav ">
                        <li class="side-nav-title side-nav-item flex align-items-center text-center ">
                            <Link to="/dashboard" >
                                <img src="assets/images/Web 1920 - 1-image.png" alt="user-image" height="70" class=" shadow-sm border-1 mb-2 "/>
                                
                            </Link>
                            <div>
                            <span class="leftbar-user-name ">BRADLEY COOPER</span>
                            </div>
                        </li>

                        
                        <li class="side-nav-title side-nav-item"><span>MAIN</span></li>

                        <li class="side-nav-item">
                            <Link to="/dashboard"  data-bs-toggle="collapse"  aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                <span> DASHBOARD
                                    </span>
                            </Link>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" class="side-nav-link">
                                <i class="uil-briefcase"></i>
                                <span> PLANETS </span>
                                
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarProjects">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="⋕">Paragon 3,000 <span class="badge rounded-pill bg-danger text-dark font-10 float-end">OFF</span></a>

                                    </li>
                                    <li>
                                        <a href="⋕">Astral Explorer</a>

                                    </li>
                                    <li>
                                        <a href="⋕">Solar Spirit </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>


                        <li class="side-nav-item">
                            <Link to="/messages"  class="side-nav-link">
                                <i class="uil-rss"></i>
                                <span> MESSAGES </span>
                                <span class="badge bg-success float-end">3</span>
                            </Link>
                        </li>

                        <li class="side-nav-item">
                            <Link to="/profile"  data-bs-toggle="collapse"  aria-expanded="false" aria-controls="sidebarCrm" class="side-nav-link">
                                <i class="uil uil-tachometer-fast"></i>
    
                                <span> PROFILE </span>
                                <span class="badge rounded-pill bg-light text-dark font-10 float-end">98%</span>
                            </Link>
                          
                        </li>

                 

                        <li class="side-nav-item">
                            <Link to="/settings"  class="side-nav-link">
                                <i class="uil-folder-plus"></i>
                                <span> SETINGS </span>
                            </Link>
                        </li>
                
                    </ul>

                
                    <div class="help-box text-white text-center">
                        <img src="assets/images/Web 1920 - 1-image3.png" height="90" alt="Helper Icon Image" />
                        <h5 class="mt-3">KVASIR V
                            GALLI PRIME 7023</h5>
                        <p class="mb-3">
                            Giant planet located about 65 light
                            years away. It is the brightest
                            planet in the zodiac constellation of 
                            Taurus.</p>
                        <a href="javascript: void(0);" class="btn btn-secondary btn-sm">MORE</a>
                    </div>
                   

                    <div class="clearfix"></div>

                </div>
              

            </div>  
        </>
    );
};

export default Sidebar;