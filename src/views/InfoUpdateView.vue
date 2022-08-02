<template>
  <div class="about">
<!-- 
    <h1>
      Info Updates
    </h1> -->
 
    <div class="upper">
            <h2> UAI MAPS Annual Poster</h2>
            <img src="../assets/Poster UAI MAPS.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
    name: 'InfoUpdateView',
}
</script>

<style>
.about{
    padding-top: 10px;
  display: flex;
  flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 overflow-y:scroll; 
 height: 100%;

}
.upper{
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 98%;
    /* justify-content: center; */
}

.upper Img{
    width: 95%;
    align-self: center;
    margin: 5px;
}

.lower{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}


.textcontainer{
  width: 90%;
  border: 5px solid white ;
  background-color: aliceblue;
  border-radius: 5px ;
}
</style>