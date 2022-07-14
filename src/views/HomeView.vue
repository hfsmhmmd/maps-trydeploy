<template>
  <div class="home">
    <div class="semi-circle"></div>
    <div class="welcome">
      <h2>Hello Visitors !</h2>
      <h3>Selamat datang di </h3>
    </div>
      <!-- <div class="logo">
        <img alt="Vue logo" src="../assets/logo_UAI_white.jpg">
      </div> -->

    <div class="menu">
      <div class="toUAICon" >
        <!-- <div class="logo" href="http://uai.ac.id/"> -->
        <a class="logo" href="http://uai.ac.id/">
          <!-- <img alt="UAI logo" src="../assets/gedungUAI.jpg"> -->
        <!-- </div> -->
         <b-card 
        overlay
        img-src="../assets/gedungUAI.jpg"
      >
    
        <b-card-text>
         <h3>
            Profile UAI
          </h3> 
        </b-card-text>
  </b-card>

      </a>


      </div>
      <div class="bottomMenu">
        <div class="aboutUsCon">
   
            <router-link to ="/about" class="rout">
                   <h3>About Us</h3>
             </router-link> 
        </div>
      <!-- <AboutUs/> -->
     
        <div class="infoCon">
          <h3>Info Update
          </h3>
        </div>
      </div>
    </div>
      <!-- <NavBar class="Nav"/> -->
    <NavBar/>
  </div>
</template>

<script>

// import FLDropDown from '@/components/FLDropDown.vue'
// import AboutUs from '@/components/AboutUs.vue'
import NavBar from '@/components/NavigationBar.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
<style scoped>
*{
  display: flex;
}
/* nav{

} */
.semi-circle {
  align-self: flex-start;
  height: 70%; 
  width: 150%; 
  border-radius : 50%;             
  background-color: #0E47A1; 
  margin-top:0px;
  transform: scale(2) rotateX(110deg);  
  overflow:hidden;
  align-items:center;
  margin-left:50px;
}


.Nav{
  border: 5px solid red;
  width: 100%;

}

.home{
    flex-direction: column;
  background-color: white;
  height: 100%;
  overflow: hidden;
  /* border: 5px solid red; */

  justify-content: center;
  /* align-content: center; */

}

.welcome{
  float: left;
}
/* div{
  border: 5px solid red
} */
.bottomMenu{
  flex-direction: row;
  height: 100%;
  /* widows: 100%; */
  /* border: 5px solid red; */
  justify-content: space-between;
  /* height: inherit; */

}

.aboutUsCon, .infoCon, .toUAICon{
  outline: 2px solid gray;
  border-radius: 5px;
  margin: 5px;
}

.infoCon, .aboutUsCon{
  width: 50%;
  height: 100%;

}

.toUAICon{
  align-content: center;
}

.menu{
  max-height: 30%;
  /* align-items: center; */
  /* border: 2px solid gray; */
  margin: 5px;
  flex-direction: column;
    align-self: center;
}


img{
 object-fit: fill;
  width:100%;
}



</style>