<template>
    <div class="try">
        <!-- <h1>test</h1>
        <p>test</p> -->
        <div class="upper">
            <div class="roomtittle">
                <h4>{{this.id}}</h4>
            </div>
            
            <!-- <div class="imgCont"> -->
            <!-- <img src="../assets/Lantai gedungUAI.jpg" alt=""> -->
            
            <img :src="require(`@/assets/Footage/Lantai ${floor}/${id}.jpg`)">
        
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
    data()
    {
        return{
         id:this.$route.params.room,   
         floor:this.$route.params.id,  
        }
    },
    methods: {
     getImgUrl(Id,floor) {
    var images = require.context('../assets/Footage/Lantai '+floor, false, /\.png$/)
    return images('./'+ Id + ".jpg")
  }
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
    border-radius: 8px;
}
img{
    max-height: 80%;
    width: auto;
}

.roomtittle{
    display: flex;
    /* border: 5px solid red; */
    justify-content: start;
    color: black;
}


/* RoomDesc{

} */

</style>