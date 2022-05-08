<template>
  <div>
    <div class="main_content_two">
      <h1>Working With Css Classes</h1>
    </div>
    <div
      class="circle"
      @click="isActive = !isActive"
      :class="getCssCLasses"
    ></div>

    <div class="circle" :class="[color, {'red': isActive}]">

    </div>

    <input type="text" v-model="color">
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    color: 'blue',
  }),
  computed: {
    getCssCLasses() {
      return {
        'red': this.isActive,
        'green': !this.isActive
      }
    }
  },
  methods: {

  }
};
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

.main_content_two {
  h1 {
    color: white;
  }
}
</style>
