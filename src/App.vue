<template>
  <v-app>
    <div id="app">
      <v-app-bar color="green mb-5">
        <v-toolbar-title>
          <router-link to="/" class="toolbar-title">
            キツネ探し当てゲーム
          </router-link>
        </v-toolbar-title>
      </v-app-bar>
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
