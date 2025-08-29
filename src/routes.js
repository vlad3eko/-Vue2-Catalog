import showBlogs from "./components/ShowBlogs.vue";
import addBlog from "./components/addBlog.vue";
import listBlogs from "./components/listBlogs.vue";
import PreviewSinglePost from "./components/previewSinglePost.vue";

export default [
  {path: '/', component: showBlogs},
  {path: '/add-news', component: addBlog},
  {path: '/search', component: listBlogs},
  {path: '/blog/:id', component: PreviewSinglePost}
]
