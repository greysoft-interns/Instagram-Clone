import { store, route } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from "../router"

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(async(/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)
  pinia.use(({ store }) => {
    // important! dont add a $router here
    store.router = markRaw(router)
  })
  return pinia
})
