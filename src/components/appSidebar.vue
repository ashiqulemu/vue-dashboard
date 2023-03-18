<template>
    
         <!-- left sidebar -->
         <div class="leftSection wow fadeIn" data-wow-delay=".25s" id='leftSidebar'>
           <div class="inner">
            <div class="brand">
            <img src="../assets/images/logo.png" class="my-3"/>
            <iconify-icon class="fs-5 closeIcon" @click="closeSidebar();"  icon="ic:sharp-close" rotate="90deg"></iconify-icon>
           </div>
           <div class="userAccount">
               <img class="userIcon" src="https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1" >
               <div class="rightPortion">
                <div class="title">Minimal UI</div>
                <div class="subTitle">admin</div>
               </div>
           </div>
            <nav class="sidenav">
                <ul class="m-0 p-0">
                    <p class="secTitle">general</p>
                    <li class="nav-item">
                        <router-link to="/app">
                           <img src="../assets/images/ic_dashboard.svg" alt="">
                           <span> App </span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/e-commerce">
                            <img src="../assets/images/ic_ecommerce.svg" alt="">
                            <span>E-commerce</span>
                        </router-link>
                    </li>
                    <li class="nav-item ">
                       <router-link to="/analysis">
                            <img src="../assets/images/ic_analytics.svg" alt="">
                            <span>Analysis</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/banking">
                            <img src="../assets/images/ic_banking.svg" alt="">
                            <span>banking</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/booking">
                            <img src="../assets/images/ic_booking.svg" alt="">
                            <span>Booking</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/file">
                            <img src="../assets/images/ic_file.svg" alt="">
                            <span>file</span>
                        </router-link>
                    </li> 
                    <p class="secTitle mt-4">management</p> 
                </ul>
 
            </nav>
           </div>
        </div>
    
</template>

<script>
export default{
    data(){
        return{

        }

    },
    methods:{
        closeSidebar(){
            let leftSidebar  = document.getElementById("leftSidebar");
                leftSidebar.classList.remove("open");

                let rightBar  = document.getElementById("rightBar");
                    rightBar.classList.remove("open");
        }
    }
}
</script>