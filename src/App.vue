<template>
  <div id="app">

      <!-- <HomeView/> -->
      <nav>
        
      <router-link to ="/explore" class="rout"> Explore Lantai  </router-link>   
      <!-- <router-link to ="/mappage" class="rout">   Halaman Peta</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>
<script>
// import HomeView from '@views/HomeView.vue'

export default {
  name: 'App',
  components: {
    // ExploreView
    // HomeView
  }
}
</script>


<style scoped>
#app{
   flex-direction: column;  
}

.rout{
  align-self: center;
  color: white;
}
</style>
<style>
html, body{
  height: 100%;
  
}


#app {
  display: flex;
  flex-direction: column; 
  justify-items: flex-end;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#0E47A1;
  height: 100%;
  /* border: 5px solid green; */
    
}
nav{
   /* align-self: flex-end; */
  display: flex;
  height: 50px;
  background-color: #0E47A1;
  justify-content: center;
  /* background-color: white; */

bottom:5px;
}

</style>