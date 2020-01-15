<template>
  <v-app-bar
      color="deep-purple accent-4"
      dark
      app
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-tabs
        class="mx-auto"
        background-color="deep-purple accent-4"
        center-active
        dark
        grow
    >
      <v-tab
        v-for="(tab, idx) in tabs"
        :key="idx">
        {{tab}}
      </v-tab>
    </v-tabs>
    <v-text-field
        solo
        dense
        rounded
        prepend-inner-icon="search"
        hide-details
        clearable
    ></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    tabs : [
        'All',
        'Offers',
        'Incomes',
        'Outcomes'
    ]
  }),
}
</script>

<style scoped>

</style>