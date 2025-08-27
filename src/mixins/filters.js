
export default {
  filters: {
    toUppercase(val) {
      return val.toUpperCase()
    },
    snippet(val) {
      return val.slice(0, 200) + '...'
    }
  },
}
