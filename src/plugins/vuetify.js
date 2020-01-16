import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        bg: '#F2F2F2',
        primary: '#8DBF21',
        accent: '#252226',
      },
    },
  },
});
