<template>
  <div id="app">
    <va-navibar></va-navibar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import VANaviBar from "NaviBar.vue";

export default {
  name: "app",
  components: {
    "va-navibar": VANaviBar,
  },
};
</script>
