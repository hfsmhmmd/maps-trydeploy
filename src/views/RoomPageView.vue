<template>
    <div class="try">
        <!-- <h1>test</h1>
        <p>test</p> -->
        <div class="upper">
            <div class="roomtittle">
                <h4>{{this.id}}</h4>
            </div >
            
            <div class="picContainer">
         
                    <img :src="require(`@/assets/Footage/Lantai ${floor}/${id}.jpg`)">
           
            </div>
        </div>
        
        <RoomDesc class="roomdesc" :deskripsi="{desc}"/>
        
       
        </div>

</template>

<script>
 
import RoomDesc from '@/components/RoomDesc.vue'
// import axios from 'axios';

export default {
    name: 'RoomPageView',
    props: ['roomdesc'],
    components: {
        RoomDesc
    },
    data()
    {
        return{
         id:this.$route.params.room,   
         floor:this.$route.params.id,  
         res:[],
         try:207,
        //  rooms:[],
         desc:[],
        }
    },

    created() {
        fetch('/ruangan(1).json').then(response => response.json())
            .then((data) => this.desc = data[this.floor-1].deskripsi[this.id])
          
            // .then(this.floors = this.rooms)
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
    overflow: scroll;
    gap: 25px;
}

.upper{
    display: flex;
    flex-direction: column;
    background-color:white;
    padding: 5px;
    border-radius: 8px;
        align-items: center; 
     justify-content: center;
}
.picContainer{
    /* border: 1px solid yellow; */
    display: flex;
    height: 92%;
    width: 95%;
    align-items: center; 
     justify-content: center;

}
img{
    max-width: 100%;
  max-height: 90%;
  border-radius: 5%;
   object-fit: cover;
   border: 2px solid gray;

}

.roomtittle{
    display: flex;
    /* border: 5px solid red; */
    justify-content: start;
    color: black;
    margin: 5px;
    align-self: flex-start;
}



/* .roomdesc */

@media (min-width:1281px) {

.try{
    display: flex;
    flex-direction: row;
    /* height: 100%;
    padding: 10px;*/
    border:5px solid green;
    justify-content: space-around;
    overflow: scroll; 
        /* align-items: center;  */
     /* justify-content: center; */

}

.upper{
    display: flex;
    flex-direction: column;
        background-color:white;
    padding: 5px;
    border-radius: 8px;
    max-height: 70%;
    min-width: 55%;
    /* border: 1px solid yellow; */
}

img{
  max-width: 70%;
  /* max-height: 20%;   */
  max-height: 97%;
  /* max-width: auto;
  max-height: auto; */
  border-radius: 5%;
   object-fit: cover;
   border: 2px solid gray;
    box-shadow: 10px 10px;
}

.picContainer{
       /* border: 1px solid yellow; */
display: flex;
height: 90%;
align-items: center;
justify-content: center;
   

}
.roomdesc{
    min-width: 35%;
    max-height: 70%;
}
}



</style>