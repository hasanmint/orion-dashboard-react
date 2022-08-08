import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
           <div class="leftside-menu">
                <a href="index.html" class="logo text-center logo-light">
                    <span class="logo-lg">
                        <img src="assets/images/logo.png" alt="" height="25"/>
                    </span>
                    <span class="logo-sm">
                        <img src="assets/images/logo_sm.png" alt="" height="16"/>
                    </span>
                </a>

              
                <div class="h-100" id="leftside-menu-container" data-simplebar>

                    <ul class="side-nav ">
                        <li class="side-nav-title side-nav-item flex align-items-center text-center ">
                            <a href="javascript: void(0);">
                                <img src="assets/images/Web 1920 - 1-image.png" alt="user-image" height="70" class=" shadow-sm border-1 mb-2 "/>
                                
                            </a>
                            <div>
                            <span class="leftbar-user-name ">Dominic Keller</span>
                            </div>
                        </li>

                        <li class="side-nav-title side-nav-item"><span>MAIN</span></li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                              
                                <span> DASHBOARD
                                    </span>
                            </a>
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
                                        <a href="apps-projects-list.html">Paragon 3,000 <span class="badge rounded-pill bg-light text-dark font-10 float-end">OFF</span></a>
                                        
                                    </li>
                                    <li>
                                        <a href="apps-projects-details.html">Astral Explorer</a>
                                        
                                    </li>
                                    <li>
                                        <a href="apps-projects-gantt.html">Solar Spirit </a>
                                    </li>
                        
                                </ul>
                            </div>
                        </li>


                        <li class="side-nav-item">
                            <a href="apps-social-feed.html" class="side-nav-link">
                                <i class="uil-rss"></i>
                                <span> MESSAGES </span>
                                <span class="badge bg-success float-end">3</span>
                            </a>
                        </li>

                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" class="side-nav-link">
                                <i class="uil uil-tachometer-fast"></i>
    
                                <span> PROFILE </span>
                                <span class="badge rounded-pill bg-light text-dark font-10 float-end">98%</span>
                            </a>
                          
                        </li>

                 

                        <li class="side-nav-item">
                            <a href="apps-file-manager.html" class="side-nav-link">
                                <i class="uil-folder-plus"></i>
                                <span> SETINGS </span>
                            </a>
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