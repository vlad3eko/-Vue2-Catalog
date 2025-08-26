<template>
  <div id="wrapper">
    <div id="show-blogs">
      <div id="nav-blogs" v-theme:op>
        <div id="blog-news">
          <div class="single-blog" v-for="blog in filteredBlogs">
            <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
          </div>
        </div>
        <div id="controls-blogs">
          <input type="text" v-model="search" placeholder="search-title">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixins from "../mixins/searchMixins";

export default {
  components: {
  },
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {},
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(data => {
        this.blogs = data.body.slice(0, 10)
      })
  },
  computed: {},
  filters: {
    toUppercase(val) {
      return val.toUpperCase()
    },
    snippet(val) {
      return val.slice(0, 100) + '...'
    }
  },
  directives: {
    rainbow(el, bind, _vNode) {
      return el.style.background = '#' + Math.random().toString().slice(2, 8)
    },
  },
  mixins: [searchMixins]
}
</script>

<style scoped>

#show-blogs {
  margin: -22px 0;
  color: white;
}

#nav-blogs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
}

#nav-blogs * {
  padding: 10px;
  overflow: hidden;
  max-width: 500px;
}

.single-blog {
  border-radius: 10px;
  margin: 0 0 15px 0;
  background: rgba(44, 60, 43, 0.88);
}

#controls-blogs {
  border-radius: 10px;
  width: 300px;
  max-height: 400px;
  margin-left: 20px;
  box-sizing: border-box;
  position: sticky;
  top: 90px;
}
</style>
