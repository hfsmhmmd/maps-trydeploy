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
        room : null,
         Lantai: [{Id: "1",
                 ruangan:["lift", "administrasi, bank, perpustakaan"] },
                {Id:  "2",
                 ruangan:["lift", "dosen","ruang 201"] },
                {Id:  "3",
                 ruangan:["lift", "ruang 301"] },
                {Id:  "4",
                ruangan:["lift", "ruang 401","ruang 402","ruang 403","ruang 404","ruang 405","ruang 406","ruang 407","ruang 408","ruang 409" ]},
                {Id:  "5",
                ruangan:["lift", "ruang 501","ruang 502","ruang 503","ruang 505","ruang 505","ruang 506","ruang 507","ruang 508","ruang 509"]},
                {Id:  "6",
                ruangan:["lift", "ruang 601","ruang 602","ruang 603","ruang 606","ruang 605","ruang 606","ruang 607","ruang 608","ruang 609"]},
                {Id:  "7",
                ruangan:["lift", "ruang 701","ruang 702","ruang 703","ruang 707","ruang 705","ruang 706","ruang 707","ruang 708","ruang 709"]},
                {Id:  "B1",
                ruangan:["satpam, kantin"]}],
        search:''.toLowerCase(),
      }

    },
  methods: {
    say: function (msg) {
      return (msg)
    }
  },

    computed:{
     filtered:function(){
      //  return this.Lantai;
    return this.Lantai.filter((lantai)=>{
      // console.log(lantai.ruangan.length);
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