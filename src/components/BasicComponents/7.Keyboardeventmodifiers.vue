<template>
  <div>
    <h1>Keyboards Events</h1>
    <div class="main_content_two">

      <h2 v-on:mousemove="handleMouseMove" style="background-color: red">
        X: {{ x }} \ Y: {{ y }}

        <span v-on:mousemove.stop="" style="background-color: green">No Changing</span>
      </h2>

      <hr>

      <input type="text" v-on:keyup.enter="alertValue">


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
    },
    alertValue: function(event) {
        alert(event.target.value)
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
