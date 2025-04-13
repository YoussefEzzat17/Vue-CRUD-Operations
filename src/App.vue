<template>
  <NavBar v-if="!$route.meta.hideNavbar"/>
  <div class="container">
    <router-view></router-view>
    <hr>
  </div>
</template>

<script>
import NavBar from './components/Pages/NavBar.vue';
export default {
  name: 'App',
     
  components:{NavBar},
  data(){
    return{
      

    }
  },
  methods:{
   
  },
  computed:{
 
  },
  watch:{


}
}
</script>

<style>

</style>
