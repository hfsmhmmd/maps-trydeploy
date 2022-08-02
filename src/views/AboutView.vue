<template>
  <div class="about">

    <h1>
      About Us
    </h1>
    <div class="upper">
      <div class="imgContainer">
        <img src="../assets/abt_us.png" alt="">
      </div>  
    </div>
    <div class="lower">
      <div class="textcontainer">
        <p>
          Perkenalkan kami MYFTA!
        </p>
        <p>
          Kelompok dengan nama yang memiliki makna pembuka, awalan, dan kunci. 
Dengan logo bersimbol pentagon berwarna kuning mengartikan bahwa kami berlima sebagai pionir berdirinya MYFTA dan warna kuning yang berkaitan erat dengan arti keagungan. Ini menjadi simbol bahwa kami 
memiliki kapabilitas untuk mengatasi masalah yang dihadapi. Menjadi solusi di setiap masalah.
        </p>
        <p>
           Karena MYFTA #semuabisa
        </p>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'AboutView',
}
</script>

<style>

h1{
  color: white;
}

.about{
  display: flex;
  flex-direction: column;
 justify-content: center;
 gap: 30px;

}
.upper{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 border-radius: 5px;


 /* width: 95%; */
/* border: 5px solid black; */
}
.imgContainer{
  display: flex;
  width: 98%;
  justify-content: center;
 
  /* background-color: white; */
}

img{
  width: 100%;
  height: auto;
}

.lower{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}


.textcontainer{
  width: 90%;
  /* border: 5px solid white ; */
  background-color: white;
  border-radius: 5px ;
  padding: 5px;
}

p{
    font-size: 19px;
}
</style>