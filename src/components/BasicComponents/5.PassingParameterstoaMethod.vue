<template>
  <div>
    <h1>Passing Parameters To Method</h1>
    <div class="main_content_two">
      <h2>{{ title }} = {{ count }}</h2>
      <button v-on:click="riseCounter(5, 'changing on 5', $event)">Add + 5 </button>
      <button v-on:click="riseCounter(10, 'changing on 10', $event)">Add + 10 </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Counter",
    count: 0,
  }),
  methods: {
    riseCounter: function(num, str, event) {
      this.count += num
      this.title = str

      if (num === 5 ) {
        event.target.style.color = 'blue'
      }
      else if (num === 10) {
        event.target.style.color = 'red'
      }
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
