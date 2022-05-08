<template>
  <div>
    <div class="main_content_two">
      <h1>Model for working with forms</h1>
      <input type="text" v-model.lazy="inputValue">

      <h2>
        {{ inputValue }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputValue: "",
  })
}
</script>

<style scoped lang="scss">
.main_content_two{
  p{
    color: white;
  }
  h1, h2{
    color: white;
  }
}
</style>
