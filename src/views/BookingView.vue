<template>
    <!-- right content box -->
    <div class="rightSection px-4" id="rightBar">

        <div class="topBar py-4">
            <div class="items d-flex">
                <iconify-icon  @click="folding" class="fs-4 me-3 foldSidebar"  icon="ic:twotone-devices-fold" rotate="90deg"></iconify-icon>
                <iconify-icon @click="fire" class="fs-4" icon="ic:round-search" rotate="90deg"></iconify-icon>
            </div>
            <div class="items">
                <div class="btn-group cursor-pointer">
                    <div class=" " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <img style="width:40px;" class="rounded-circle" :src="userAccount" alt="">
                    </div>
                    <ul class="dropdown-menu dropdown-menu-end py-4 px-2 pt-2">
                        <li>
                            <div class="mb-0 text-muted px-3 border-bottom pb-2 mb-3">
                                <h6 class="mb-1">Minimal UI</h6>
                                <small>demo@minimals.cc</small>
                            </div>
                        </li>
                        <li><a class="dropdown-item d-flex align-items-center rounded" href="#">Home</a></li> 
                        <li><a class="dropdown-item d-flex align-items-center rounded" href="#">Profile</a></li> 
                        <li><a class="dropdown-item d-flex align-items-center rounded" href="#">Settings</a></li> 
                        <li><a class="dropdown-item d-flex align-items-center rounded" href="#">Logout</a></li> 
                    </ul>
                </div>


            </div>
        </div>

        <div class="row">
            <div class="col-md-4 col-sm-12 col-xs-12 mb-4" v-for="(item, idx) in status" :key="idx">
                <div class="statusBar">
                    <div class="items">
                        <h3>{{ item.amount }}</h3>
                        <h6>{{ item.title }}</h6>
                    </div>
                    <div class="items">
                        <div class="circle ms-auto">
                            <img :src="item.photo" alt="Photo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-6 mb-4">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="box-theme bg-theme-light">
                            <div class="topInfo">
                                <div class="items">
                                    <p class="mb-0">Total income</p>
                                    <div class="amount">
                                        $18,765
                                    </div>
                                </div>
                                <div class="items">
                                    <p class="mb-0 text-end">
                                        <img width="20px" src="../assets/images/chart.svg" alt="">
                                        +2.6%
                                    </p>
                                    <span class="d-block text-end"> than last month</span>
                                </div>
                            </div>
                            <div id="chart"> </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <roomStatus></roomStatus>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="box-theme py-0">
                            <div class="checkStatus">
                                <div class="items py-3">
                                    <div class="subItems">
                                        <div id="chartCircle"></div>
                                    </div>
                                    <div class="subItems">
                                        <h3>38,566</h3>
                                        <h6>Check In</h6>
                                    </div>
                                </div>

                                <div class="items py-3">
                                    <div class="subItems">
                                        <div id="chartCircle2"></div>
                                    </div>
                                    <div class="subItems">
                                        <h3>18,472</h3>
                                        <h6>Check Out</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-6 mb-4">
                <div class="box-theme ">
                    <div class="title ">Room Available</div>
                    <div id="roomsChart"> </div>
                    <div class="roomStatus">
                        <div class="items">
                            <div class="title">
                                <div class="sign"></div> Sold out
                            </div>
                            <div class="rooms">120 Rooms</div>
                        </div>
                        <div class="items">
                            <div class="title">
                                <div class="sign avalable"></div> Available
                            </div>
                            <div class="rooms">66 Rooms</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-6 mb-4">
                <div class="box-theme">
                    <div class="title">Reservation Stats</div>
                    <p class=" subtext">(+43% Check In | +12% Check Out) than last year</p>
                    <div id="barChart"></div>

                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12 mb-4">
                <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                    <swiper-slide class="p-1" v-for="n in 5" :key="n">
                        <div class="box-theme">
                            <div class="title">Customer Reviews</div>
                            <p class=" subtext">5 Reviews</p>
                            <div class="slideContent">
                                <div class="topper">
                                    <img src="../assets/images/users/1.jpg" alt="">
                                    <div class="right">
                                        <h6>Lucian Obrien</h6>
                                        <span>Posted:17 Mar 2023 9:28 AM</span>
                                    </div>
                                </div>
                                <div class="review my-2 fs-4">
                                    <iconify-icon icon="material-symbols:star" class="text-warning"></iconify-icon>
                                    <iconify-icon icon="material-symbols:star" class="text-warning"></iconify-icon>
                                    <iconify-icon class="color-light" icon="material-symbols:star"></iconify-icon>
                                    <iconify-icon class="color-light" icon="material-symbols:star"></iconify-icon>
                                    <iconify-icon class="color-light" icon="material-symbols:star"></iconify-icon>
                                </div>
                                <div class="reviewText">
                                    Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex
                                    saepe
                                    hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium
                                    beatae
                                    modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.
                                </div>
                                <div class="tags my-3">
                                    <span>Great Sevice</span>
                                    <span>Recommended</span>
                                    <span>Best Price</span>
                                </div>
                                <div class="actions">
                                    <button class=" btn-success-theme">
                                        <iconify-icon class="fs-5 me-2" icon="material-symbols:check-circle"></iconify-icon>
                                        Accept
                                    </button>
                                    <button class=" btn-danger-theme">
                                        <iconify-icon class="fs-5 me-2" icon="gridicons:cross-circle"></iconify-icon>
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

            </div>
            <div class="col-md-12 mb-4">
                <div class="row">
                    <div class="newBooking">Newest Booking</div>
                    <p class="subtextBooking">12 Booking</p>
                </div>
                <div class="row">
                    <swiper
                        :breakpoints="{ 300: { slidesPerView: 1 }, 400: { slidesPerView: 1 }, 500: { slidesPerView: 1 }, 600: { slidesPerView: 1 }, 960: { slidesPerView: 2 }, 1024: { slidesPerView: 4, } }"
                        class="bookingSlider" :slides-per-view="4" :space-between="25" @swiper="onSwiper"
                        @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, idx) in newestBooking" :key="idx">
                            <div class="slideContent booking">
                                <div class="topper">
                                    <img :src="item.photo" alt="">
                                    <div class="right">
                                        <h6 class="text-muted">{{ item.name }}</h6>
                                        <span>{{ item.date }}</span>
                                    </div>
                                </div>
                                <div class="room">
                                    <div class="item">
                                        <iconify-icon class="me-2 fs-6"
                                            icon="material-symbols:vpn-key-rounded"></iconify-icon>
                                        <span>Room {{ item.room }}</span>
                                    </div>
                                    <div class="item">
                                        <iconify-icon class="me-2 fs-6" icon="mdi:user-group-outline"></iconify-icon>
                                        <span>{{ item.person }} Person</span>
                                    </div>
                                </div>
                                <div class="photo">
                                    <img :src="item.gallery" alt="">
                                    <div class="badge">{{ item.status }}</div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="col-md-12 mb-5">
                <div class="box-theme px-0">
                    <div class="title px-4 pb-4 pt-2"> Booking Details </div>
                    <div class="table-responsive">
                        <table class="table-custom table-responsive">
                            <thead>
                                <tr>
                                    <th>Booker</th>
                                    <th>Check in </th>
                                    <th>check out</th>
                                    <th>status</th>
                                    <th>Phone</th>
                                    <th>Room type</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, idx) in booking" :key="idx">
                                    <td class="d-flex align-items-center">
                                        <img style="width:45px;" class="rounded-circle" :src="item.photo">
                                        <h6 class="ms-3 mb-0">
                                            {{ item.user }}
                                        </h6>
                                    </td>
                                    <td> {{ item.checkin }}</td>
                                    <td> {{ item.checkout }}</td>
                                    <td>
                                        <span
                                            :class="{ 'paid': item.status == 'paid', 'pending': item.status == 'pending' }">
                                            {{ item.status }}
                                        </span>
                                    </td>
                                    <td>{{ item.phone }}</td>
                                    <td>{{ item.roomType }}</td>
                                    <td>
                                        <div class="dropstart">
                                            <span class="cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                                                <iconify-icon icon="ph:dots-three-outline-vertical-fill"></iconify-icon>
                                            </span>
                                            <ul class="dropdown-menu px-2">
                                                <li>
                                                    <a class="dropdown-item d-flex align-items-center rounded"
                                                        href="#"><iconify-icon
                                                            icon="material-symbols:download-for-offline-outline-rounded"></iconify-icon>
                                                        Download
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item d-flex align-items-center rounded"
                                                        href="#"><iconify-icon icon="material-symbols:print"></iconify-icon>
                                                        Print
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item d-flex align-items-center rounded"
                                                        href="#"><iconify-icon icon="material-symbols:share"></iconify-icon>
                                                        Share
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item d-flex align-items-center rounded text-danger"
                                                        href="#"><iconify-icon
                                                            icon="material-symbols:delete-outline"></iconify-icon>
                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="border-top d-flex align-items-center justify-content-end px-4 pt-3">
                        <router-link to="#" class="tdn fw-bold">
                            <small class="text-dark d-flex align-items-center">
                                View all <iconify-icon class="ms-1 fs-5"
                                    icon="ic:sharp-keyboard-arrow-right"></iconify-icon>
                            </small>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
 
<script >

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';


// import icon for status bar 
import photo1 from "../assets/images/3-people.svg";
import photo2 from "../assets/images/man.svg";
import photo3 from "../assets/images/woman.svg";

// import users on table data 
import user1 from "../assets/images/users/1.jpg"
import user2 from "../assets/images/users/5.jpg"
import user3 from "../assets/images/users/3.jpg"
import user4 from "../assets/images/users/4.jpg"
import user5 from "../assets/images/users/5.jpg"


// room photos

import gallery1 from "../assets/images/rooms/1.jpg"
import gallery2 from "../assets/images/rooms/2.jpg"
import gallery3 from "../assets/images/rooms/3.jpg"
import gallery4 from "../assets/images/rooms/4.jpg"
import gallery5 from "../assets/images/rooms/5.jpg"
import gallery6 from "../assets/images/rooms/6.jpg"

// import apex 
import ApexCharts from 'apexcharts'
import roomStatus from '../components/rooms.vue'



export default {

    components: {
        Swiper,
        SwiperSlide,
        roomStatus,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
    },
    data() {
        return {
            userAccount: user1,
            status: [
                {
                    amount: '714k',
                    title: 'Total Booking',
                    photo: photo1,
                },
                {
                    amount: '311k',
                    title: 'Check In',
                    photo: photo2,
                },
                {
                    amount: '124k',
                    title: 'Check Out',
                    photo: photo3,
                },
            ],

            rooms: [
                {

                    title: 'pending',
                    amount: '8.62K',
                    status: 'bg-warning-theme'
                },
                {

                    title: 'Cancel',
                    amount: '86.36k',
                    status: 'bg-danger-theme'
                },
                {

                    title: 'Done',
                    amount: '73.99k',
                    status: 'bg-success-theme'
                },
            ],

            booking: [
                {
                    photo: user1,
                    user: 'Jayvion Simon',
                    checkin: '18 Mar 2023',
                    checkout: '18 Mar 2023',
                    status: 'paid',
                    phone: '365-374-4961',
                    roomType: 'King',
                },
                {
                    photo: user2,
                    user: 'Lucian Obrien',
                    checkin: '17 Mar 2023',
                    checkout: '17 Mar 2023',
                    status: 'pending',
                    phone: '904-966-2836',
                    roomType: 'King',
                },
                {
                    photo: user3,
                    user: 'Deja Brady',
                    checkin: '16 Mar 2023',
                    checkout: '16 Mar 2023',
                    status: 'pending',
                    phone: '399-757-9909',
                    roomType: 'Single',
                },
                {
                    photo: user4,
                    user: 'Lucian Obrien',
                    checkin: '15 Mar 2023',
                    checkout: '15 Mar 2023',
                    status: 'paid',
                    phone: '904-966-2836',
                    roomType: 'Double',
                },
                {
                    photo: user5,
                    user: 'Lucian Obrien',
                    checkin: '14 Mar 2023',
                    checkout: '14 Mar 2023',
                    status: 'paid',
                    phone: '526-966-2836',
                    roomType: 'King',
                },
            ],
            newestBooking: [
                {
                    photo: user1,
                    name: 'Deja Brady',
                    date: '16 Mar 2023 8:28 AM',
                    gallery: gallery1,
                    room: 'A-25',
                    person: '3-5',
                    status: 'Double',
                },
                {
                    photo: user2,
                    name: 'Deja Brady',
                    date: '16 Mar 2023 8:28 AM',
                    gallery: gallery2,
                    room: 'A-12',
                    person: '2-5',
                    status: 'Single',
                },
                {
                    photo: user3,
                    name: 'Lorem Brady',
                    date: '16 Mar 2023 8:28 AM',
                    gallery: gallery3,
                    room: 'A-11',
                    person: '1-3',
                    status: 'Single',
                },
                {
                    photo: user4,
                    name: 'Ipsum Brady',
                    date: '16 Mar 2023 8:28 AM',
                    gallery: gallery4,
                    room: 'A-10',
                    person: '1-2',
                    status: 'King',
                },
                {
                    photo: user5,
                    name: 'Ipsum Dolor',
                    date: '18 Mar 2023 8:28 AM',
                    gallery: gallery5,
                    room: 'A-05',
                    person: '3-7',
                    status: 'Big',
                },
            ],
        }
    },
    mounted() {

        var options = {
            chart: {
                type: 'line',
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight'
            },
            colors: ['#00AB55'],
            series: [{
                name: '$',
                data: [111, 136, 76, 108, 74, 54, 57, 84]
            }],
            // xaxis: {
            //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            // }
        }

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        //circle1
        var options = {
            series: ['72'],
            chart: {
                height: '100%',
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    // hollow: { 
                    //     size: '72%',
                    // },
                },
            },
            colors: ['#00AB55'],
            stroke: {
                lineCap: "round",
            },
            labels: ['72%'],
        };

        var chart = new ApexCharts(document.querySelector("#chartCircle"), options);
        chart.render();

        // circle2
        var options = {
            series: ['64'],
            chart: {
                height: '100%',
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    // hollow: { 
                    //     size: '72%',
                    // },

                },
            },
            colors: ['#FFAB00'],
            stroke: {
                lineCap: "round",
            },
            labels: ['64%'],
        };

        var chart = new ApexCharts(document.querySelector("#chartCircle2"), options);
        chart.render();

        // roomsChart
        var options = {
            series: [86],
            chart: {
                height: '320',
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%',
                    },

                },
            },
            colors: ['#5BE584'],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    gradientToColors: ["#11B65E"],
                    stops: [0, 100]
                }
            },

            stroke: {
                lineCap: "round",
            },
            labels: ['Rooms-186'],
        };

        var chart = new ApexCharts(document.querySelector("#roomsChart"), options);
        chart.render();

        // barsChart
        var options = {
            series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                data: [53, 32, 33, 52, 13, 44, 32]
            }],
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    dataLabels: {
                        position: 'top',
                    },
                }

            },
            colors: ['#5BE584'],
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
        };

        var chart = new ApexCharts(document.querySelector("#barChart"), options);
        chart.render();



    },
    methods:{
      folding(){
      let leftSidebar  = document.getElementById("leftSidebar");
          leftSidebar.classList.add("open");
      let rightBar  = document.getElementById("rightBar");
          rightBar.classList.add("open");
        
    },
    fire(){
        alert("event will be fired ")
    }
  },
}


</script>
