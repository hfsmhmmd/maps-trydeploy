<template>
    <!-- <div class="Navbar"> -->

  <b-navbar class="fixed-bottom head d-xl-flex" >
    <!-- <div class="navbar"> -->
         <b-navbar-brand class="HomeCon" href="/#/">
            <img src="../assets/icon/Home_trimed.png" class="icon" alt="Kitten">
         </b-navbar-brand> 
         <b-navbar-brand href="/#/explore"  class="CompassCon">
            <img src="../assets/icon/Compass_trimed.png"  class="icon" alt="Kitten">
        </b-navbar-brand > 
         <b-navbar-brand href="/#/explore"  class="infoCon">
           <img src="../assets/icon/info_trimed.png"  class="icon" alt="Kitten">
         </b-navbar-brand> 
    <!-- </div> -->
 
    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

    <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar class="imgcont" variant="faded" type="light"> -->
              <!-- <b-icon icon="camera" font-scale="2"></b-icon>
              <b-icon icon="camera" font-scale="2"></b-icon> -->
               <!-- <b-img   alt="Fluid image"></b-img> -->
          <!-- <b-navbar-brand href="#"> -->
            
          <!-- </b-navbar-brand> -->
        <!-- </b-navbar>      Right aligned nav items -->

    <!-- </b-collapse> -->
  </b-navbar>

<!-- </div> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'NavBar',
} 
</script>

<style>


.head{
  /* padding: 0 !important; */
  border-top: 0.5px solid grey;
    /* linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), */
  
}

.navbar{
  /* max-height: 5px; */
  /* border: 5px solid red; */
  display: flex;
  justify-content: space-between;
}
/* 
.HomeCon{
  padding-left: ;
} */



/* .imgcont{
  border: 5px solid red;
} */
.icon{
  height:43px;
  /* border: 5px solid red; */
  padding: 0 !important;
}
/* b-navbar{
  height: 100px;
} */

.navbod{
  width: 100%;
}


</style>
 