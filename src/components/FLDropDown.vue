<template >


        <b-dropdown id="dropdown-1" text="Ruangan" class="m-md-2" split>
          <!-- <router-link to="/roompage"> -->
    <div v-for="(ruangan, i ) in rooms" :key="i" >
     
       <b-dropdown-item v-bind:to="'/roompage/'+ruangan">{{ruangan}}</b-dropdown-item>

    </div>
         <!-- </router-link> -->
  </b-dropdown> 
   
  


</template>


<script > 
// import { defineComponent } from 'vue'

export default {
    name: 'FLDropDown',
    props: ['rooms'],
    data(){
        return{
            floora:[],
            
        }
    },    
}
</script>


<style scoped>
/* @import'~bootstrap/dist/css/bootstrap.css' */
</style>