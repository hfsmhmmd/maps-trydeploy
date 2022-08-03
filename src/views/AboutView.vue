<template>
  <div class="about">
    
    <div class="upper">
         <h4>
      Who Are We? 
    </h4>
       <div class="uppertext">
        <p>
          Perkenalkan kami MYFTA!
        </p>
        <p>
          Kelompok dengan nama yang memiliki makna pembuka, awalan, dan kunci. 
Dengan logo bersimbol pentagon berwarna kuning mengartikan bahwa kami berlima sebagai pionir berdirinya MYFTA dan warna kuning yang berkaitan erat dengan arti keagungan. Ini menjadi simbol bahwa kami 
memiliki kapabilitas untuk mengatasi masalah yang dihadapi. Menjadi solusi di setiap masalah.  Karena..
        </p>
        <h4>
           MYFTA #semuabisa
        </h4>
    
        </div>
    </div>
    <div class="lower">
      <div class="grid">
      <div class="firstrow">
        <div class="profileCon">
           <img src="../assets/1.png" alt="">
        <div class="name">
          <p> Muhammad Lutfi </p>
           <div class="job">
            <p>
            Developer , Operation
            </p>
            </div>
        </div>
          </div> 
            <div class="profileCon">
            <img src="../assets/3.png" alt="">
            <div class="name">
                <p> Muhammad Afy </p>
            <div class="job">
            <p>
            Developer , Operation
            </p>
            </div>
            </div>
          
        </div> 
       </div>  

      <div class="secondRow">
         <div class="profileCon">
          <img src="../assets/2.png" alt="">
          <div class="name">
         <p> Dewi Nurhayati </p>
        <div class="job">
            <p>
            Developer , Project Manager
            </p>
            </div>
        </div>
           
        </div>  
        <div class="profileCon">
          <img src="../assets/4.png" alt="">
          <div class="name">
           <p>  Muhsin Wira </p>
           <div class="job">
            <p>
            Developer , Art Director
            </p>
            </div>
        </div>
        

        </div>
      </div>  
      <div class="thirdRow">
        <div class="profileCon third">
          <img src="../assets/5.png" alt="">
          <div class="name">
           <p> Muhammad Hafiz </p>
          <div class="job">
            <p>
            Developer , Architecture
            </p>
            </div>
          
        </div>
         
        </div> 
      </div>
      </div>
    </div>
    <br>
  <br>
  <br>
  </div>
</template>

<script>
export default {
    name: 'AboutView',
}
</script>

<style>

h1, h2 ,h3, h4{
  color: #0E47A1;
  text-align: left;
}

.about, .upper , .imgContainer , .lower ,.firstrow , .secondRow, .thirdRow {
  display: flex;
}

.about{
  flex-direction: column;
 justify-content: center;
 gap: 30px;

}
.upper{
flex-direction: column;
justify-content: center;
align-items: center;
 border-radius: 5px;
 /* width: 95%; */
/* border: 5px solid black; */
}

.uppertext{
  margin: 7px;
}
.uppertext p{
    font-size: 14px;
    text-align: left;
}

.lower{
  display: flex;
    flex-direction: column;
    background-color: #B1D0E0;
   
    /* justify-content: center;
    align-content: center; */
    /* justify-content: space-between; */
}

.grid
{
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
 align-content: space-evenly;
}

img{
  width: 100%;
  height: auto;
}

.profileCon{
    width: 90%;
    margin: 10px;
    margin-left: 5px;
  /* border: 5px solid white ; */
   
  /* border-radius: 5px ; */
  /* padding: 5px; */
  /* flex-grow: 0; */
  
}

.thirdRow, .firstrow, .secondRow{
  align-self: center;
  flex-grow: 1;
  /* flex-basis:50%; */
}
.name{
  margin-top: 10px;
  
}

.third{
  align-self: center;
  width: 50%;
}



.profileCon p{
    padding-left: 5px;
    font-size: 120%;
    text-align: left;
    color: #22577E;
}

.job{
  margin-top: -10%;
}
.job p{
  font-size: 80%;
  color: black;
  text-align: left;
}
</style>