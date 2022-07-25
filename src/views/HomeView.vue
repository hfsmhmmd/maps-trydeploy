<template>
  <div class="home">
  <!-- <div class="upperCurve"> -->
      <div class="semi-circle">
        <div class="custom-shape-divider-top-1658029318">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </div> 
  <!-- </div>    -->
    <div class="welcome">
      <h2>Hello Visitors !</h2>
      <h3>Selamat datang di </h3>
    </div>

    <div class="menu">
      <div class="toUAICon" >
      
        <a class="logo" href="http://uai.ac.id/"> 

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
  
     
        <div class="infoCon">
          <h3>Info Update
          </h3>
        </div>
      </div>
    </div>
 
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



.home{
    flex-direction: column;
  background-color: white;
  height: 100%;
  /* overflow: hidden; */
  justify-content: flex-start;
   gap: 10%;


}


.semi-circle {
  position: relative;
  /* align-self:flex-end ; */
}
.custom-shape-divider-top-1658029318 {
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;   
    line-height: 0;
}

.custom-shape-divider-top-1658029318 svg {
    position: relative;
    display: block;
    width: calc(111% - 1.2%);
    transform: translate(-8.5%);
    height: 200px;
      /* overflow: hidden; */
  
}

.custom-shape-divider-top-1658029318 .shape-fill {
    fill: #0E47A1;
}

/** For tablet devices **/
/* @media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape-divider-top-1658029318 svg {
        width: calc(300% + 1.3px);
        height: 376px;
    }
} */

/* @media (min-width:1281px) {
.custom-shape-divider-top-1658029318 .shape-fill {
    fill: #0E47A1;
}


.custom-shape-divider-top-1658029318 svg {
    position: relative;
    display: block;
    width: calc(111% - 1.2%);
    transform: translate(-8.5%);
    height: 110px;
}
} */

.lightblue{
  background: #81B1EF;
}





.Nav{
  border: 5px solid red;
  width: 100%;

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