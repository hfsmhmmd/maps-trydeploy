<template>
  <div id="app">

      <!-- <HomeView/> -->

      <NavBar/>

      <nav>
        
      <!-- <router-link to ="/explore" class="rout"> Explore Lantai  </router-link>    -->
      <!-- <router-link to ="/mappage" class="rout">   Halaman Peta</router-link> -->
    </nav>
      <router-view/>
  </div>

</template>
<script>
// import HomeView from '@views/HomeView.vue'
import NavBar from '@/components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    // ExploreView
    // HomeView,
    NavBar
  }
}
</script>


<style scoped>
#app{
   flex-direction: column;  
    overflow:hidden;
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
  /* display: flex; */
  /* flex-direction:;  */
  /* justify-items: flex-end; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#0E47A1;
  height: 100%;
  overflow: scroll;
  /* border: 5px solid green; */
    
}
nav{
     display: fixed;
    bottom: 0;
   align-self: flex-end;
  /* display: flex; */
  /* height: 50px; */
  background-color: white;
  justify-content: center;
  /* background-color: white; */
  /* border: 5px solid red; */
bottom:0px;
}

</style>