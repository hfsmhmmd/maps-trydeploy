<template>
  <div class="about">

    <h1>
      Info Updates
    </h1>
 
    


  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">v1.0 -  First Release  </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <!-- <b-card-text>I start opened because <code>visible </code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text> -->
                
      <!-- <div class="upper"> -->
            <h3>{{mapTittle}}</h3>
            <img src="../assets/Poster UAI MAPS.png" alt="">
            <p>
              Introducing UAI MAPS,
            </p>
            
            <p class="desc">
              
              {{desc}}
            </p>
    <!-- </div> -->
    
        </b-card-body>


      </b-collapse>
    </b-card>

  </div>
  <br>
  <br>
  <br>
  </div>
  
</template>

<script>
export default {
    name: 'InfoUpdateView',
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        mapTittle:`
         UAI MAPS Annual Poster
         `,
         desc:`
        

          Find any room you are looking for with Explore features now!
          Know all room through the description from the definition to the function of the room.`
      }
    }
}
</script>

<style>
.about{
    padding-top: 10px;
  display: flex;
  flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 overflow:scroll; 
 height: 100%;
 clear: both;	

}

.accordion{
  width: 98%;
}

.desc{
   text-align: left;
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