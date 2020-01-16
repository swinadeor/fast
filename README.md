# fast

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Comment
#####For your fast check, please check the video below.
https://drive.google.com/file/d/1-5rNqOznAu4tAg1de-FB1-4WACcZzkJ8/view?usp=sharing
1. I used Vue, Vuetify, VueRouter, Vuex for this app.
2. To make fewer components for a maintenance and less calls to the backend server, 
    I used only two components.
3.  'Sections' component will be changed according to the 'SET_SECTION' mutation.
    I used 'FETCH_SUMMARY' actions to filter the results. 
    The filtered result will be assigned to 'summary' and 'summary' will be committed
    You can check it at 'store > index.js'. 
    I would prefer to separating all Vuex properties but as you see, 
    it doesn't have a lot of codes. And if I divide them, it would be harder to see in one glance
    So I just left it.
3. In a real project, 'totalSummary' will be given by the backend server 
   so the API call('FETCH_TOTAL_SUMMARY') will be written on 'created' hook in 'NavBar' component.
   After the call is resolved, 'FETCH_SUMMARY' will be executed.
4. For the main theme, I got the main colors from 'FastBill Logo' and made them as a global variable in 'plugins > vuetify.js'
5. To use 'search' icon, I installed an npm library for 'material-design-icons-iconfont'