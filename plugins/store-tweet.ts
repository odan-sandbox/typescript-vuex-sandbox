import Vue from 'vue'

const vm = new Vue({
  methods: {
    tweet (text: string) {
      console.log(text)
      console.log(this.$store.user.user)
    }
  }
})

export type Store = Omit<typeof vm, keyof Vue>;
export const store: Store = vm
