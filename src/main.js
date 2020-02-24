import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';
import './assets/tailwind.css';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app-header',
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
