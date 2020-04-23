import { Plugin } from '@nuxt/types'

import { Store as UserStore, store as userStore } from './store-user'
import { Store as TweetStore, store as tweetStore } from './store-tweet'

export type Store = {
  user: UserStore,
  tweet: TweetStore
}

declare module 'vue/types/vue' {
  interface Vue {
    // $store は被るので名前...
    $rootStore: Store;
  }
}

const storePlugin: Plugin = (_, inject) => {
  const store: Store = {
    user: userStore,
    tweet: tweetStore
  }
  inject('rootStore', store)

  // 普通に代入すると怒られる
  Object.defineProperty(tweetStore, '$rootStore', {
    value: store,
    writable: false
  })
}

export default storePlugin
