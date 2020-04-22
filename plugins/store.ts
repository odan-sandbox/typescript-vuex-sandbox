import { Store as UserStore } from './store-user'
import { Store as TweetStore } from './store-tweet'

type Store = {
  user: UserStore,
  tweet: TweetStore
}

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store;
  }
}
