<template>
  <div>
    <div class="main_content_two">
      <p>Labels For Directives</p>

      <h2>
        <a :href="url" target="_blank">Google</a>
      </h2>

      <h2>
        Counter: {{ counter }}
      </h2>

      <button @click="counter++">Rise</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      url: 'http://google.com',
      counter: 0
  })
}
</script>

<style scoped lang="scss">
.main_content_two{
  p{
    color: white;
  }
}
</style>
