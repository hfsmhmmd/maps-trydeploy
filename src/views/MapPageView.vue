<template>
  <div class="MapPage">
    
    
  <div class=upperBar>
      <h2>Lantai {{$route.params.id}}</h2>
  </div>
    <div>
      <b-img src="../assets/lantai_7_putih.png" fluid alt="Responsive image"></b-img>
    </div>
    
     <!-- <div v-for="item in filter" :key="item.Id" class="card border-0 cardSpace" style="width: 18rem;">
        
          <li class="list-group-item bg-light"> {{item.toUpperCase()}}</li>
          
       </div> -->
  <FLDropDown v-bind:rooms="rooms"/> 

  </div>
</template>

<script>
// @ is an alias to /src
//hello
// import FloorList from '@/components/FloorList.vue'
// import FloorSB from '@/components/FloorSB.vue'

import FLDropDown from '@/components/FLDropDown.vue'

// import DropDRoomList from '@/components/DropDRoomList.vue'

export default {
  name: 'MapPageView',
  components: {
    FLDropDown,

  },
  data() {
      return { 
        
        id:this.$route.params.id,
        
       rooms:[],
        // rooms:this.floors[this.id],
        // rooms:[],
         
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
     created() {
        fetch('/ruangan.json').then(response => response.json())
            .then((data) => this.rooms = data[this.id-1].ruangan)
            // .then(this.floors = this.rooms)
    },
  // created() {

  //   console.log(this.data);
    
  // },
  methods: {
    say: function (msg) {
      return (msg)
    }
  },
  // computed:{
    
  //    filtered:function(){
  //     //  return this.Lantai;
  //   return this.Lantai.filter((lantai)=>{
  //     console.log(lantai.Id);
  //     console.log(this.search)
  //     return lantai.Id.match(this.search);
  //   //        
  //   });
  //   }
  //  }
}

</script>
<style scoped>

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
   .f-list{ 
/* display: flex;
  justify-content: center;
   flex-direction: row; */
    /* border: 5px solid red;  */
  min-width: 95%;
}
</style>