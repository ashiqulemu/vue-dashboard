<template>
    <div class="box-theme">
    <div class="title">
        Booked Room
    </div>
    <br>

    <div class="progress my-4">
        <div class="progress-bar bg-warning-theme" role="progressbar" style="width: 10%;" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"> </div>
    </div>
    <div class="progress my-4">
        <div class="progress-bar bg-danger-theme" role="progressbar" style="width: 80%;" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"> </div>
    </div>
    <div class="progress my-4">
        <div class="progress-bar bg-success-theme" role="progressbar" style="width: 70%;" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"> </div>
    </div>
    <br>
    <div class="bottom-status">
        <div class="items" v-for="(item,idx) in rooms" :key="idx">
            
            <div class="title"> 
                <div class="statusSign"
                 :class="{bgWarning: item.status =='bg-warning-theme',
                  bgDanger: item.status =='bg-danger-theme',
                  bgSuccess: item.status =='bg-success-theme' }">
                </div>
                {{item.title}}
            </div>
            <div class="amount">{{item.amount}}</div>
        </div>
    </div>
</div>
</template>
<script>
 

export default {
    data() {
        return { 
            rooms:[
                {
                     
                    title:'pending',
                    amount:'8.62K',
                    status:'bg-warning-theme'
                },
                {
                     
                    title:'Cancel',
                    amount:'86.36k',
                    status:'bg-danger-theme'
                },
                {
                     
                    title:'Done',
                    amount:'73.99k',
                    status:'bg-success-theme'
                },
            ],
        }
    }, 
}
</script>