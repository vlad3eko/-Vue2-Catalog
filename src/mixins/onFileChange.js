export default {
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.blog.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
