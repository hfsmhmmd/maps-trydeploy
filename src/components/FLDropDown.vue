<template >
<div>

  <b-dropdown id="dropdown-1" text="Ruangan" class="m-md-2">
  <div v-for="(ruangan, i ) in rooms" :key="i" >
    <b-dropdown-item>{{ruangan}}</b-dropdown-item>
  </div>
  </b-dropdown>
</div>
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