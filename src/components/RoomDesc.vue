<template>
    <div class="textcon">
        <div>
        
        <p>
       {{deskripsi.desc}}
        </p>
     
      </div>  
<!--         
        <h4>507</h4>
            <b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
                <b-card-text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </b-card-text>
            </b-card>  
             </b-card-group> -->
    </div>
</template>

<script>


export default {
    name:'RoomDesc', 
    props:[ 'deskripsi'],
}


</script>

<style scoped>
.textcon{
   
    background:white;
    padding: 5px;

    border-radius: 2%;
   border: 1px solid black;

}
</style>