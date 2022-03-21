<template>
  <div>
    <h1>2.Dynamic Attributes</h1>
    <div class="main_content_two">
      <a  v-bind:href="url" target="_blank">{{ url }} --> with v-bind href with data href</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: 'http://google.com'
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
  a{
    color: white;
  }
}
</style>
