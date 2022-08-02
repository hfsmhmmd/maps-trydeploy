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
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,200;0,300;0,400;1,100&family=Nanum+Gothic&display=swap');


#app{
   flex-direction: column;  
    overflow:hidden;
  font-family: 'Bitter', sans-serif;
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
  /* background-color:#0E47A1; */
  height: 100%;
  overflow: scroll;
  /* border: 5px solid green; */
      /* background-image: linear-gradient(45deg, transparent 20%, black 25%, transparent 25%),
                      linear-gradient(-45deg, transparent 20%, black 25%, transparent 25%),
                      linear-gradient(-45deg, transparent 75%, black 80%, transparent 0),
                      radial-gradient(gray 2px, transparent 0);
    background-size: 30px 30px, 30px 30px; */

background:
radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent),
radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
background-color:#0E47A1;
background-size:75px 100px;
    
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