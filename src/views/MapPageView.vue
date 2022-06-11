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
  </div>
</template>

<script>
// @ is an alias to /src
//hello
// import FloorList from '@/components/FloorList.vue'
// import FloorSB from '@/components/FloorSB.vue'
// import DropDRoomList from '@/components/DropDRoomList.vue'
export default {
  name: 'MapPageView',
  components: {
  },
  data() {
      return { 
        id:this.$route.params.id,
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
          
        // search:''
      }

    },
    computed: {
    filter() {
      // ID=this.id;
      // console.log(this.Lantai[this.id].ruangan);
      return this.Lantai[this.id].ruangan
      
    }
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