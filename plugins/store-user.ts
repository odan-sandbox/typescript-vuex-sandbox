import Vue from 'vue'

const vm = new Vue({
  data () {
    return {
      user: ''
    }
  },
  computed: {
    isLogin (): boolean {
      return !!this.user
    }
  }
})

export type Store = Omit<typeof vm, keyof Vue>;
export const store: Store = vm
