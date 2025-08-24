<template>
  <div class="single-blog">
    <img v-bind:src="blog.imageUrl" alt="">
    <h2>{{ blog.title | toUppercase }}</h2>
    <article>{{ blog.content }}</article>
    <div id="preview-tags">
      <p>{{blog.categories.toString().toUpperCase()}}</p>
    </div>
    <p>Author: {{ blog.author }}</p>
  </div>
</template>

<script>

export default {
  methods: {},
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    }
  },
  filters: {
    toUppercase(val) {
      return val.toUpperCase()
    },
  },
  async created() {
    const response = await this.$http.get('https://vue2-catalog-default-rtdb.firebaseio.com/posts/' + this.id + '.json')
    this.blog = await response.json()
  }
}

</script>

<style scoped>

div {
  margin: 0 auto;
}

img {
  max-width: 500px;
}

.single-blog {
  background: rgba(44, 60, 43, 0.88);
  color: white;
  max-width: 500px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 100px;
}

#preview-tags {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
}

#preview-tags p {
  border: 1px solid rgba(121, 332, 213);
  padding: 2px 5px;
  border-radius: 10px;
  width: max-content;
  margin: 18px 5px 0 0;
}
</style>
