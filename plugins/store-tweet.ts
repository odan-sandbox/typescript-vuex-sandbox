import Vue from 'vue'

const vm = new Vue({
  methods: {
    tweet (text: string) {
      const userId = this.$rootStore.user.id
      // call api
      console.log('tweet', userId, text)
    }
  }
})

export type Store = Omit<typeof vm, keyof Vue>;
export const store: Store = vm
