<template>
  <div class="home">


      <!-- <FloorSB class="fbar"/> -->
       <div class="sb-container">
    <!-- <b-form-input v-model="text" placeholder="Input nama/nomer ruangan "></b-form-input> -->
        <b-form-input class="sbform" v-model="search" placeholder="Cari Ruangan "></b-form-input>
    <!-- <div class="mt-2">Value: {{ text }}</div> -->
  </div>

        <div v-for="item in filtered" :key="item.Id" class="card border-0 cardSpace" style="width: 18rem;">
        <router-link v-bind:to="'/mappage/'+item.Id" >
          <li class="list-group-item bg-light">Lantai {{item.Id}} </li>
          </router-link>
       </div>
<!-- 
         <div v-for="item in room" :key="item.Id" class="card border-0 cardSpace" style="width: 18rem;">
        <router-link v-bind:to="'/mappage/'+item.Id" >
          <li class="list-group-item bg-light">Lantai {{item.Id}} </li>
          </router-link>
       </div> -->

  
  </div>
</template>

<script >

export default {
  name: 'ExploreView',
  components: {
    // FloorList,
    // FloorSB,
  },
  data() {
      return { 
        floors :[],
  
        search:''.toLowerCase(),
      }

    },


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
  
      
      // console.log(this.search)
      for(var i = 0; i < lantai.ruangan.length; i++)
{
        if(lantai.ruangan[i].indexOf(this.search) != -1)
        {
            //  console.log(search)
            return(lantai.ruangan[i]);
            
        }
} 
      // return lantai.Id.match(this.search);
        // return lantai.ruangan.match(this.search); gabisa kalo object
    //        
    });
    }
   }
  // filtered:function(){
  //   return "aha"
  //   }
  //  }



}

</script>

<style scoped>


.cardSpace{
  /* width: 100%;*/
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
}
</style>