export default {
  async created() {
    const response = await this.$http.get('https://vue2-catalog-default-rtdb.firebaseio.com/posts.json')
    const data = await response.json()
    const blogsArray = []
    for (let key in data) {
      data[key].id = key
      blogsArray.push(data[key])
    }
    this.blogs = blogsArray
  },
}
