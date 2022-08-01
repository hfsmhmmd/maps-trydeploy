<template>
  <div class="home">


      <!-- <FloorSB class="fbar"/> -->
       <div class="sb-container">
    <!-- <b-form-input v-model="text" placeholder="Input nama/nomer ruangan "></b-form-input> -->
        <b-form-input class="sbform" v-model="search" placeholder="Cari Ruangan "></b-form-input>
    <!-- <div class="mt-2">Value: {{ text }}</div> -->
  </div>

      <div v-for="item in filtered" :key="item.Id" class="card border-0 cardSpace" style="width: 18rem;">
        <router-link class="rout" v-bind:to="'/mappage/'+item.Id " >
     
          <li class="list-group-item">Lantai {{item.Id}} </li>

        </router-link>
       </div>
    <!-- <div>
      {{daxios}}
    </div> -->
  </div>
</template>

<script >
// import axios from 'axios';
export default {
  name: 'ExploreView',
  components: {
    // FloorList,
    // FloorSB,
    
  },
  data() {
      return { 
        floors :[],
        info: [],
        search:''.toLowerCase(),
      }

    },
  //      mounted () {
  //   axios
  //     .get('https://data.mongodb-api.com/app/data-rsvcw/endpoint/floorlist')
  //     .then(response => (this.info = response.data))
  // },



     created() {
        fetch('/ruangan.json').then(response => response.json())
            .then((data) => this.floors = data);
    },



  methods: {
    say: function (msg) {
      return (msg)
    }
  },   
 computed:{
     filtered:function(){
      return this.floors.filter((lantai)=>{
 
      for(var i = 0; i < lantai.ruangan.length; i++)
{
        if(lantai.ruangan[i].indexOf(this.search) != -1)
        {
 
            return(lantai.ruangan[i]);
            
        }
} 

    });
    }
   }

}

</script>

<style scoped>


.cardSpace{
  /* width: 100%;*/
   background-color:white ;
}
.card{
   background-color:#0E47A1 ;
}
.list-group-item{
  margin-bottom: 15px;
  height: 65px;
  border-radius: 10px;
  width: 98%;
  text-align: start;
  font-size: 32px;
  font-weight: bold;
  /* background-color:  #0E47A1; */
}

.list-group-item:hover {
  background-color: #81B1EF;
  color: white;
}

.home{
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: whitesmoke; */
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


.sbform{
  border-radius: 30px;
  min-height: 45px;
  width: 100%;
  margin: 10px;
}

</style>