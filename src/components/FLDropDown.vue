<template >


    <b-dropdown id="dropdown-1" text="Ruangan" class="m-md-2" split>
          <!-- <router-link to="/roompage"> -->
        <div v-for="(ruangan, i ) in rooma.rooms" :key="i"  >
     
    <b-dropdown-item v-bind:to="'/roompage/'+rooma.id+'/'+ruangan" >{{ruangan}} </b-dropdown-item>

    </div>
         <!-- </router-link> -->
  </b-dropdown> 
   
  


</template>


<script > 
// import { ESLint } from 'eslint'
// import { defineComponent } from 'vue'
// eslint-disable


export default {
    name: 'FLDropDown',
    props: ['rooma'],
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