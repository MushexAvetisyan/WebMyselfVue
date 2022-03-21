<template>
  <div>
    <h1>HTML Code Output</h1>
    <div class="main_content_two">
      <p v-html="link">{{ link }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    link: '<a href="http://google.com" target="_blank">Google</a> --> bind link in data with v-html attribute'
  })
}
</script>

<style scoped lang="scss">
h1{
  color: white;
}
.main_content_two{
  p{
    color: white;
  }
}
</style>
