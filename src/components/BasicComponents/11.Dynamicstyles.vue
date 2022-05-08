<template>
  <div>
    <div class="main_content_two">
      <h1>Dynamic Styles</h1>
    </div>

    <div class="circle" :style="circleCLasses"></div>
    <div class="circle" :style="[circleCLasses, {'width' : height + 'px'}]"></div>

    <hr>

    <input type="text" v-model="color">
    <input type="text" v-model="height">
  </div>
</template>

<script>
export default {
  data: () => ({
    color: 'blue',
    height: 100
  }),
  computed: {
    circleCLasses() {
      return {
        'background' : this.color,
        'height' : this.height + 'px'
      }
    }
  },
}
</script>

<style scoped lang="scss">
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  display: inline-block;
  margin: 40px;
}

.red {
  background: red;
}
.blue {
  background: blue;
}
.green {
  background: green;
}
.main_content_two{
  h1{
    color: white;
  }
}
</style>
