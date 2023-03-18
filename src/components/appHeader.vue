<template>
      <div class="topbar">
                <div class="fold" onclick='foldSidebar();'>
                    <span class="iconify text-secondary" data-icon="codicon:layout-sidebar-right"></span>
                </div>
                <!-- <h6 class="text-capitalize mb-0 border border-light shadow-sm text-white p-2 border-1 d-inline-block mx-auto rounded">
                    <small class="fw-bold">welcome to "Company Name"</small>
                </h6> -->
                <div class="right-element">
                    <div class="circle-box bg-warning">
                        <span class="iconify" data-icon="ant-design:plus-outlined"></span>
                    </div>
                    <div class="circle-box">
                        <span class="iconify" data-icon="clarity:bell-line"></span>
                    </div>
                    <div class="dropdown">
                        <a href="#" class="btn dropdown-toggle profile-manage p-0" role="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="" height="45px" width="45px">
                        </a>
                        <ul class="dropdown-menu border-0 shadow " aria-labelledby="dropdownMenuButton1">
                            <a class="dropdown-item" href="#"><span class="iconify"
                                    data-icon="carbon:user-avatar"></span> Profile</a>
                            <a class="dropdown-item" href="#"><span class="iconify"
                                    data-icon="ion:log-out-outline"></span> Log Out</a>
                        </ul>
                    </div>
                </div>
            </div>
</template>