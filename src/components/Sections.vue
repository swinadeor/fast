<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg4 v-for="(section, idx) in sections" :key="idx">
        <v-card class="text--xs-center ma-4" outlined>
          <v-card-title class="subheading">{{section.name}}</v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-list-item v-for="list in section.lists" :key="list.id">
              <v-list-item-content @click="showList(list.id)">
                {{list.name}}
              </v-list-item-content>
            </v-list-item>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn outlined color="deep-purple accent-4" @click="addList(section.name)">Add {{section.name}}</v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="deep-purple accent-4" @click="showAll(section.name)">Show all</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Sections",
  data: () => ({
    sections: [
      {
        name: 'Offers',
        lists: [
          {name: 'Offer #1', id: '1'},
          {name: 'Offer #2', id: '2'},
          {name: 'Offer #3', id: '3'}
        ]
      },
      {
        name: 'Incomes',
        lists: [
          {name: 'Income #1', id: '4'},
          {name: 'Income #2', id: '5'},
          {name: 'Income #3', id: '6'}
        ]
      },
      {
        name: 'Outcomes',
        lists: [
          {name: 'Outcome #1', id: '7'},
          {name: 'Outcome #2', id: '8'},
          {name: 'Outcome #3', id: '9'}
        ]
      },
    ]
  }),
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