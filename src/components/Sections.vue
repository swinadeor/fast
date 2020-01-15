<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg4 v-for="(section, idx) in summary" :key="idx">
        <v-card class="text--xs-center ma-4 accent--text" outlined>
          <v-card-title class="subheading">{{section.name}}</v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-list-item v-for="list in section.lists" :key="list.id">
              <v-list-item-content class="accent--text" @click="showList(list.id)">
                {{list.name}}
              </v-list-item-content>
            </v-list-item>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn outlined color="primary" @click="addList(section.name)">Add {{section.name}}</v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary" @click="showAll(section.name)">Show all</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Sections",
  data: () => ({
  }),
  computed: {
    ...mapState([
        'summary'
    ])
  },
  methods: {
    showList (id) {
      alert('showList ' + id)
    },
    addList (name) {
      alert('addList ' + name)
    },
    showAll (lists) {
      alert('showAll ' + lists)
    }
  }
}
</script>

<style scoped>

</style>