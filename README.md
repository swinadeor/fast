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
##### For your fast check, please check the video below.
https://drive.google.com/open?id=16CJ2B5S1BOpuZXN8mzVgTdwnvVge2rZc
1. I used Vue, Vuetify, VueRouter, Vuex for this app.
2. To make fewer components for a maintenance and less calls to the backend server, 
    I used only two components.
3.  'Sections' component will be changed according to the 'summary' mutation.
    I used 'FETCH_SUMMARY' actions to filter the results. 
    The filtered result will be assigned to 'summary' and 'summary' will be committed.
    You can check it at 'store > index.js'. 
    I would prefer to separating all Vuex properties but as you see, 
    it doesn't have a lot of codes. And if I divide them, it would be harder to see in one glance
    So I just left it.
4. In a real project, 'totalSummary' will be given by the backend server 
   so the API call('FETCH_TOTAL_SUMMARY') will be written on 'created' hook in 'NavBar' component.
   After the call is resolved, 'FETCH_SUMMARY' will be executed.
5. The button text is filtered by the function 'deleteS' in 'Sections' component.   
6. For the main theme, I got the main colors from 'FastBill Logo' and made them as a global variable in 'plugins > vuetify.js'
7. To use 'search' icon, I installed an npm library for 'material-design-icons-iconfont'