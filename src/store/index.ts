import { createStore } from 'vuex'
import guthub from './modules/github'


export default createStore({
  modules: {
    guthub
  }
});
