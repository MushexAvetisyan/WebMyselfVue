<template>
  <div>
    <h1>Event Modifier</h1>
    <div class="main_content_two">
      <h2>
        <a href="https://google.ru/" target="_blank" v-on:click.prevent="">Google</a>
      </h2>

      <h2 v-on:mousemove="handleMouseMove" style="background-color: red">
        X: {{ x }} \ Y: {{ y }}

        <span v-on:mousemove.stop="" style="background-color: green">No Changing</span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    x: 0,
    y: 0,
  }),
  methods: {
    handleMouseMove: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
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
