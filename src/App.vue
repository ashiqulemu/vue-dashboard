<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/booking">About</router-link>
  </nav> -->
  <div class="dashbaord-main">
    <appSidebar></appSidebar>
    <router-view />
  </div>
</template>

<script>

import appSidebar from './components/appSidebar.vue';

export default {
  components: {
    appSidebar,
  },
  data() {
    return {

    }
  },
 
  mounted() {
  
  },
}
 
</script>

<style lang="scss"></style>
