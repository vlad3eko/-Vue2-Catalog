<template>
  <div id="show-blogs">
    <div id="nav-blogs" v-theme:op>
      <div id="blog-news">
        <div class="single-blog" v-for="blog in filteredBlogs">
          <router-link v-bind:to="'blog/' + blog.id">
            <img v-bind:src="blog.imageUrl" alt="">
            <h3>{{ blog.title | toUppercase }}</h3>
            <article>{{ blog.content | snippet }}</article>
            <div id="preview-tags">
              <p v-for="tags in blog.categories">{{ tags.toString().toUpperCase() }}</p>
            </div>
            <p>Author: {{ blog.author }}</p>
          </router-link>
          <div id="blog-controls">
            <button>Fix Content</button>
            <button>Public</button>
          </div>
        </div>
      </div>
      <div id="controls-blogs">
        <input type="text" v-model="search" placeholder="search-title">
      </div>
    </div>
  </div>
</template>

<script>

import searchMixins from "../mixins/searchMixins";

export default {
  components: {},
  data() {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {},
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
  computed: {},
  filters: {
    toUppercase(val) {
      return val.toUpperCase()
    },
    snippet(val) {
      return val.slice(0, 200) + '...'
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
  margin: 62px;
}

#nav-blogs * {
  text-decoration: none;
  padding: 10px;
  overflow: hidden;
  max-width: 500px;
}

#nav-blogs img {
  max-width: 458px;
  margin: 0;
  padding: 10px 0 10px;
}

h3, p, article {
  text-decoration: none;
  color: white;
  margin: 0;
}

.single-blog {
  border-radius: 10px;
  margin: 0 0 25px 0;
  background: rgba(44, 60, 43, 0.88);
  border: 1px solid #1B1B1B;
  transition: 0.2s ease-in;
}

.single-blog:hover {
  box-shadow: 0 0 10px white;
  transition: 0.2s ease-in;
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

#blog-controls {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}

#blog-controls button {
  width: 45%;
  cursor: pointer;
}

#preview-tags {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  padding: 0 15px 0 10px;
}

#preview-tags p {
  border: 1px solid rgba(121, 332, 213);
  padding: 2px 5px;
  border-radius: 10px;
  width: max-content;
  margin: 18px 5px 0 0;
}
</style>
