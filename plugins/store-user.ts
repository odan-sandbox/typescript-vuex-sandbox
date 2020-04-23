import Vue from 'vue'

const vm = new Vue({
  data () {
    return {
      id: '',
      name: ''
    }
  },
  computed: {
    isLogin (): boolean {
      return !!this.id
    }
  },
  methods: {
    register (name: string) {
      // call api
      this.name = name
      this.id = 'id'
    }
  }
})

export type Store = Omit<typeof vm, keyof Vue>;
export const store: Store = vm
