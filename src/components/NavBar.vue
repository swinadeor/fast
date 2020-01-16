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
        v-for="(s, idx) in sections"
        :key="idx" @change="changeSection(s)"
        active-class="primary--text"
        class="black--text"
      >
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
  computed: {
    ...mapState([
      'sections',
      'section'
    ]),
  },
  created() {
    this.FETCH_SUMMARY()
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
  }
}
</script>

<style scoped>
</style>