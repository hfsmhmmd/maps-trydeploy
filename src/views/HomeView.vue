<template>
  <div class="home">
      <div class="logo">
        <img alt="Vue logo" src="../assets/logo_UAI_white.jpg">

      </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>

.home{
 
  display: flex;
  background-color: white;
  height: 100%;
  /* border: 5px solid red; */
  justify-content: center;
}

.logo{
 align-self: center;
 
}

img{
  object-fit: contain;
  max-width: 80%;
}



</style>