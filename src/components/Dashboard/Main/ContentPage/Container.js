import React from 'react';
import TinyAreaChart from '../TinyAreaChart';

const Container = () => {
    return (
        <>
            <div class="container-fluid">

           

                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <div class="page-title-right">
                                <form class="d-flex">

                                  
                                <a href="javascript: void(0);" class="btn btn-primary ms-1">
                                      
                                        <i class="mdi mdi-table-large"></i>
                                        
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-primary ms-1">
                                        <i class="mdi mdi-view-module"></i>
                                       
                                        
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-primary ms-2">
                                    <i class="mdi mdi-chart-histogram"></i>
                                    </a>

                                </form>
                            </div>
                            <h4 class="page-title">DASHBOARD</h4>
                        </div>
                    </div>
                </div>
                {/* Row */}

                <div class="row">
                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-end">
                                    <span class="badge bg-success float-end">+35.7%</span>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">MEMBERS ONLINE</h5>
                                        <h3 class="mt-3 mb-3">75,650</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> +35.7%</span>
                                            <span class="text-nowrap">789 AVG</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi mdi-cart-plus widget-icon"></i>

                                </div>
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">STOCK LOAD </h5>
                                        <h3 class="mt-3 mb-3">54.9%</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                                            <span class="text-nowrap">42.7% AVG</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi mdi-currency-usd widget-icon"></i>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">SHIP COSTS</h5>
                                        <h3 class="mt-3 mb-3">$9,324,980</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 5.27% AVG</span>
                                            <span class="text-nowrap">$427,684 </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-end">
                                    <i class="mdi mdi-account-multiple widget-icon"></i>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">POPULATION</h5>
                                        <h3 class="mt-3 mb-3">36,254</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                                            <span class="text-nowrap">2,568 AVG</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Row */}
                <div class="row">
                    <div class="col-lg-5">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <h4 class="header-title">Campaigns</h4>
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">

                                            <a href="javascript:void(0);" class="dropdown-item">Today</a>

                                            <a href="javascript:void(0);" class="dropdown-item">Yesterday</a>

                                            <a href="javascript:void(0);" class="dropdown-item">Last Week</a>

                                            <a href="javascript:void(0);" class="dropdown-item">Last Month</a>
                                        </div>
                                    </div>
                                </div>



                                <div class="row text-center mt-3">
                                    <div class="col-sm-4">
                                        <i class="mdi mdi-send widget-icon rounded-circle bg-light-lighten text-muted"></i>
                                        <h3 class="fw-normal mt-3">
                                            <span>6,510</span>
                                        </h3>
                                        <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-warning"></i> Total Sent</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <i class="mdi mdi-flag-variant widget-icon rounded-circle bg-light-lighten text-muted"></i>
                                        <h3 class="fw-normal mt-3">
                                            <span>3,487</span>
                                        </h3>
                                        <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-primary"></i> Reached</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <i class="mdi mdi-email-open widget-icon rounded-circle bg-light-lighten text-muted"></i>
                                        <h3 class="fw-normal mt-3">
                                            <span>1,568</span>
                                        </h3>
                                        <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-success"></i> Opened</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-body">
                               
                           

                            </div>

                        </div>

                    </div>

                </div>

                <div class="row">
                    <div class="col-xl-5 col-lg-6">

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-account-multiple widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">Customers</h5>
                                        <h3 class="mt-3 mb-3">36,254</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-cart-plus widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Orders</h5>
                                        <h3 class="mt-3 mb-3">5,543</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-danger me-2"><i class="mdi mdi-arrow-down-bold"></i> 1.08%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-currency-usd widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                                        <h3 class="mt-3 mb-3">$6,254</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-danger me-2"><i class="mdi mdi-arrow-down-bold"></i> 7.00%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-pulse widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Growth">Growth</h5>
                                        <h3 class="mt-3 mb-3">+ 30.56%</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="card card-h-100">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h4 class="header-title">Projections Vs Actuals</h4>
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">

                                            <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>

                                            <a href="javascript:void(0);" class="dropdown-item">Export Report</a>

                                            <a href="javascript:void(0);" class="dropdown-item">Profit</a>

                                            <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                        </div>
                                    </div>
                                </div>

                                <div dir="ltr">
                                    <div id="high-performing-product" class="apex-charts" data-colors="#727cf5,#e3eaef"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- end row --> */}



                
            </div>
        </>
    );
};

export default Container;