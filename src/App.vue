<template>
  <div>
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/ShowBlogs.vue";
import listBlogs from "./listBlogs.vue";
import navMenu from "./components/navMenu.vue";

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlogs,
    'list-blogs': listBlogs,
    'nav-menu': navMenu,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>

body {
  background: url("https://i.pinimg.com/736x/bf/9c/c7/bf9cc77e15dd2f0dfd34e810e60b6b2e.jpg") fixed -43%;
}

</style>
