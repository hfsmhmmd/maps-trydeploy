<template>
  <div class="MapPage">
    
    
    
  <div class=upperBar>
      <h2>Lantai {{$route.params.id}}</h2>
  </div>

          <FLDropDown :rooma="{rooms,id}"   /> 
     
    <div class=mapContainer>

      <v-zoomer  ref="zoomer"
      style="width: 100%; height: 500px; border: solid 3px white"
      :max-scale="10"
      :zoomed.sync="zoom">  
        <!-- <img
            "
             style="object-fit: cover;"
             doubleClickToZoom=true>
            
          </v-zoomer> -->
       <img
        :src="getImgUrl(this.id)"
        style="object-fit: contain; width: 100%; height: 100%"
      />
    </v-zoomer>

    </div>
  

  </div>
</template>

<script>
import VueZoomer from 'vue-zoomer'
import FLDropDown from '@/components/FLDropDown.vue'
// import axios from 'axios'
// import DropDRoomList from '@/components/DropDRoomList.vue'

export default {
  // name: 'MapPageView',
  components: {
    FLDropDown,
    VZoomer: VueZoomer.Zoomer,
    // 'inner-image-zoom': InnerImageZoom,
  },
  data() {
      return { 
        // imgpath:'../assets/'+ Lt_5.png
        id:this.$route.params.id,
        rooms:[],
        info:null
      }
    },
    computed: {
    filter() {

      // ID=this.id;
      // console.log(this.Lantai[this.id].ruangan);
      // this.rooms
      return this.rooms;
      
    }
},
  //      mounted () {
  //   axios
  //     .get('https://data.mongodb-api.com/app/data-rsvcw/endpoint/floorlist')
  //     .then(response => (this.info = response.data))
  // },
     created() {
        fetch('/ruangan(1).json').then(response => response.json())
            .then((data) => this.rooms = data[this.id-1].ruangan)

    },

  methods: {
     getImgUrl(Id) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./Lt_' + Id + ".png")
  }
  },
}

</script>
<style scoped>

/* v-zoomer{
  width: 500px;
   height: 500px;
} */

.MapPage{
  padding-top: 30px;
  display: flex;
  flex-direction: column;
    gap: 15px;
  align-items: center;
}
.upperBar{
    display:flex;
    justify-content: space-between;

    /* border: 5px solid red; */
    color: white;
    width: 95%
}   
.fbar{
  margin-bottom: 20px;
  min-width: 93%;
}

img{
  max-width: 85%;
  border-radius: 5%;
   object-fit: cover;
   transform:translate(0px, 0px)
}
.mapContainer{
  max-width:100%;
  /* border: 5px solid black; */
}
   .f-list{ 
/* display: flex;
  justify-content: center;
   flex-direction: row; */
    /* border: 5px solid red;  */
  min-width: 95%;
}

@media (min-width:1281px) {


/* 
img{
  max-width: 50%;
  border-radius: 5%;
   object-fit: cover;
} */
}

</style>