<template>
  <v-app-bar
      color="bg"
      dark
      app
  >
    <v-img class="mx-2" src="../assets/FastBill-Logo-Black.svg" height="40px" width="150px" contain></v-img>
    <v-tabs
        class="mx-auto"
        background-color="bg"
        color="primary"
        center-active
        grow
    >
      <v-tab
        class="accent--text"
        active-class="primary--text"
        v-for="(s, idx) in sections"
        :key="idx" @change="changeSection(s)">
        {{s}}
      </v-tab>
    </v-tabs>
    <v-text-field
        light
        dense
        color="primary"
        style="border-radius: 20px;"
        prepend-inner-icon="search"
        hide-details
        clearable
        background-color="bg"
        outlined
    ></v-text-field>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: "NavBar",
  data: () => ({
  }),
  computed: {
    ...mapState([
      'sections',
    ]),
  },
  created() {
    this.FETCH_SUMMARY()
  },
  mounted() {
    this.tabTextColor()
  },
  methods: {
    ...mapMutations([
        'SET_SECTION'
    ]),
    ...mapActions([
        'FETCH_SUMMARY'
    ]),
    changeSection (section) {
      this.SET_SECTION(section)
      this.FETCH_SUMMARY()
    },
    tabTextColor () {
      // const tab = document.querySelectorAll('.v-tab');

    }
  }
}
</script>

<style scoped>
</style>