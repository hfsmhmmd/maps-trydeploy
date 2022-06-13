<template v-for="(ruang,index) in lantai" :key="index">
    <li>
        {{ruang}}
    </li>

    
</template>

<script >
// import { defineComponent } from 'vue'

export default {

    name: 'FLDropDown',
    props: ['Lantai'],
    data(){
        return{
            lantai:["Satu","Dua","Tiga"]
        }
    }
}
</script>
