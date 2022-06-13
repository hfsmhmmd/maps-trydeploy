<template>
    <div class="try">
        <!-- <h1>test</h1>
        <p>test</p> -->
        <div class="upper">
            <div class="roomtittle">
                <h4>Mushola</h4>
            </div>
            <!-- <div class="imgCont"> -->
            <img src="https://placekitten.com/1000/300" alt="">
            <!-- </div> -->
        </div>
        <RoomDesc/>
        </div>

</template>

<script>
 
import RoomDesc from '@/components/RoomDesc.vue'

export default {
    name: 'RoomPageView',
    components: {
        RoomDesc
    },
}
</script>

<style scoped>


.try{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    /* border:5px solid green; */
    justify-content: space-around;

}

.upper{
    display: flex;
    flex-direction: column;
    background-color:white;
    padding: 5px;
}
/* .img{
    height: 200px;
} */

.roomtittle{
    display: flex;
    /* border: 5px solid red; */
    justify-content: start;
    color: white;
}


/* RoomDesc{

} */

</style>