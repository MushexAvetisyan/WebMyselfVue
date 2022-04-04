<template>
  <div>
    <h1>Passing Parameters To Method</h1>
    <div class="main_content_two">
      <h2>Counter {{ count }}</h2>
      <button v-on:click="riseCounter(5)">Add + 5 </button>
      <button v-on:click="riseCounter(10)">Add + 10 </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
  }),
  methods: {
    riseCounter: function(num) {
      this.count += num
    },
  }
}
</script>

<style scoped lang="scss">
h1, h2{
  color: white;
}
.main_content_two{
  p{
    color: white;
  }
}
</style>
