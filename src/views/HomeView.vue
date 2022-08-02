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

        <b-card class="uaiCard"
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
        <b-card 
          overlay
          img-src="../assets/abt_us.png">
        
        <b-card-text>
              <router-link to ="/about" class="rout">
                    <h3>About Us</h3>
              </router-link> 
        </b-card-text>  
        </b-card>    
        </div>
  
     
        <div class="infoCon">
          <b-card 
          overlay
          img-src="../assets/Poster UAI MAPS.png">
        
            <b-card-text>
                    <router-link to ="/infoupdate" class="rout">
                        <h3>Info Updates</h3>
                  </router-link> 
            </b-card-text>  
            </b-card>   
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
  /* background-color: white; */
  height: 100%;
  /* overflow: hidden; */
  justify-content: flex-start;
   gap: 10%;
/* background-color:white; */


background:
radial-gradient(circle at 100% 50%, transparent 20%, rgba(211, 211, 211, 0.747) 21%, rgba(211, 211, 211, 0.747) 34%, transparent 35%, transparent),
radial-gradient(circle at 0% 50%, transparent 20%, rgba(211, 211, 211, 0.747) 21%, rgba(211, 211, 211, 0.747) 34%, transparent 35%, transparent) 0 -50px;
background-color:white;
background-size:75px 100px;


/* background:
radial-gradient(circle at 100% 50%, transparent 20%, rgba(134, 133, 133, 0.747) 21%, rgba(134, 133, 133, 0.747) 34%, transparent 35%, transparent),
radial-gradient(circle at 0% 50%, transparent 20%, rgba(134, 133, 133, 0.747) 21%, rgba(134, 133, 133, 0.747) 34%, transparent 35%, transparent) 0 -50px;
background-color:white;
background-size:75px 100px; */


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
  height: 40%;
  width: 100%;
  /* widows: 100%; */
  /* border: 5px solid red; */
  justify-content: space-between;
  /* overflow-y: hidden; */
  /* height: inherit; */
}

.bottomMenu img{
  opacity: 0.5;
  /* width: 120%; */
  /* object-fit: cover;
  overflow: hidden; */

   display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */
  /* height: 100px; */

  object-fit: cover !important;

}




.aboutUsCon, .infoCon, .toUAICon{
  outline: 2px solid black;
  border-radius: 5px;
  margin: 5px;
  text-align: center;
}

.infoCon, .aboutUsCon{
  width: 50%;
  height: 80%;
  overflow-y: hidden;
  height: 80%;

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
    align-self: center ; 
}


.uaiCard img{
 object-fit: fill;
  width:100%;
  opacity: 0.7;
}



/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1659463582 svg {
        width: calc(100% + 1.3px);
        height: 41px;
    }
}

</style>