<template>
  <v-app id="inspire">
    <enjoy-header />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <enjoy-footer />
  </v-app>
</template>
<!-- -->
<script>
import EnjoyHeader from "@/components/commons/EnjoyHeader.vue";
import EnjoyFooter from "@/components/commons/EnjoyFooter.vue";
export default {
  components: { EnjoyHeader, EnjoyFooter },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
