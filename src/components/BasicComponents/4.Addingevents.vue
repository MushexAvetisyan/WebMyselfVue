<template>
  <div>
    <h1>Adding Events</h1>
    <div class="main_content_two">
      <h2>Counter {{ count }}</h2>
      <button v-on:click="riseCounter">Add</button>

      <hr>
      <h2 v-on:mouseover="onHover">Counter 2 {{ count2 }}</h2>
      <button v-on:click="count2++">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    count2: 0
  }),
  methods: {
    riseCounter: function() {
      this.count++
    },
    onHover: function(event) {
      event.target.style.color = 'red'
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  color: white;
}
button{
  cursor: pointer;
}
.main_content_two{
  p{
    color: white;
  }
}
</style>
