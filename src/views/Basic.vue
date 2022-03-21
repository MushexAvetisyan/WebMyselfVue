<template>
  <div class="home">
    <div class="main_content">
      <span class="count_slider">
        {{ currentPage + "/" + slideCount }}
      </span>
      <lazy-component>
        <carousel
            :per-page="1"
            :mouse-drag="true"
            :navigation-enabled="true"
            @pageChange="pageChange"
            v-if="showCarousel"
        >
          <slide>
            <p>BASIC</p>
          </slide>
          <slide><interpolation /></slide>
        </carousel>
      </lazy-component>
    </div>
  </div>
</template>

<script>
import LazyComponent from "v-lazy-component";
import { Carousel, Slide } from "vue-carousel";
import Interpolation from "@/components/BasicComponents/Interpolation";
export default {
  name: 'Home',
  data: () => ({
    slideCount: 3,
    currentPage: 0,
    showCarousel: 1,
    isTouch: "undefined" !== typeof window && "ontouchstart" in window,
  }),
  components: {
    Interpolation,
    LazyComponent,
    Carousel,
    Slide,
  },
  methods: {
    pageChange(index) {
      this.currentPage = index
    }
  }
}
</script>

<style scoped lang="scss">
.main_content{
  background-color: #05081D;
}
.count_slider{
  color: white;
  font-size: 28px;
}
</style>
