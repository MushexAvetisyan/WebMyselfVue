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
          :adjustableHeight="true"
          :navigation-enabled="false"
          @pageChange="pageChange"
          v-if="showCarousel"
        >
          <slide><interpolation /></slide>
          <slide><DynamicAttributes /></slide>
          <slide><HTMLcodeoutput /></slide>
          <slide><Addingevents /></slide>
          <slide><PassingParameterstoaMethod /></slide>
          <slide><Eventmodifiers /></slide>
          <slide><Keyboardeventmodifiers /></slide>
          <slide><Labelsfordirectives /></slide>
          <slide><Modelforworkingwithforms /></slide>
          <slide><WorkingwithCSSclasses /></slide>
          <slide><Dynamicstyles /></slide>
          <slide><ElementDisplayControl /></slide>
          <slide><vshowvifdirective /></slide>
          <slide><Workingwithlists /></slide>
          <slide><Applicationoptimizationwithcomputed /></slide>
          <slide><Trackchangeswithwatch /></slide>
          <slide><LinkingDifferentApplicationsVueInstance /></slide>
          <slide><AccessingDOMelements /></slide>
          <slide><templateproperty /></slide>
          <slide><Lifecycle /></slide>
        </carousel>
      </lazy-component>
    </div>
  </div>
</template>

<script>
import LazyComponent from "v-lazy-component";
import { Carousel, Slide } from "vue-carousel";
import Interpolation from "@/components/BasicComponents/1.Interpolation";
import DynamicAttributes from "@/components/BasicComponents/2.Dynamic-Attributes";
import HTMLcodeoutput from "@/components/BasicComponents/3.HTML-Code-Output";
import Addingevents from "@/components/BasicComponents/4.Addingevents";
import PassingParameterstoaMethod from "@/components/BasicComponents/5.PassingParameterstoaMethod";
import Eventmodifiers from "@/components/BasicComponents/6.Eventmodifiers";
import Keyboardeventmodifiers from "@/components/BasicComponents/7.Keyboardeventmodifiers";
import Labelsfordirectives from "@/components/BasicComponents/8.Labelsfordirectives";
import Modelforworkingwithforms from "@/components/BasicComponents/9.Modelforworkingwithforms";
import WorkingwithCSSclasses from "@/components/BasicComponents/10.WorkingwithCSSclasses";
import Dynamicstyles from "@/components/BasicComponents/11.Dynamicstyles";
import ElementDisplayControl from "@/components/BasicComponents/12.ElementDisplayControl";
import Vshowvifdirective from "@/components/BasicComponents/13.vshowvifdirective";
import Workingwithlists from "@/components/BasicComponents/14.Workingwithlists";
import Applicationoptimizationwithcomputed from "@/components/BasicComponents/15.Applicationoptimizationwithcomputed";
import Trackchangeswithwatch from "@/components/BasicComponents/16.Trackchangeswithwatch";
import LinkingDifferentApplicationsVueInstance from "@/components/BasicComponents/17.LinkingDifferentApplicationsVueInstance";
import AccessingDOMelements from "@/components/BasicComponents/18.AccessingDOMelements";
import Templateproperty from "@/components/BasicComponents/19.templateproperty";
import Lifecycle from "@/components/BasicComponents/20.Lifecycle";
export default {
  name: "Home",
  data: () => ({
    slideCount: 20,
    currentPage: 0,
    showCarousel: 1,
    isTouch: "undefined" !== typeof window && "ontouchstart" in window,
  }),
  components: {
    Lifecycle,
    Templateproperty,
    AccessingDOMelements,
    LinkingDifferentApplicationsVueInstance,
    Trackchangeswithwatch,
    Applicationoptimizationwithcomputed,
    Workingwithlists,
    Vshowvifdirective,
    ElementDisplayControl,
    Dynamicstyles,
    WorkingwithCSSclasses,
    Modelforworkingwithforms,
    Labelsfordirectives,
    Keyboardeventmodifiers,
    Eventmodifiers,
    PassingParameterstoaMethod,
    Addingevents,
    HTMLcodeoutput,
    DynamicAttributes,
    Interpolation,
    LazyComponent,
    Carousel,
    Slide,
  },
  methods: {
    pageChange(index) {
      this.currentPage = index;
    },
  },
};
</script>

<style scoped lang="scss">
.main_content {
  background-color: #05081d;
  height: 100vh;
}
.count_slider {
  color: white;
  font-size: 28px;
}
.basic {
  color: white;
}
::v-deep{
  .VueCarousel-dot-container{
    .VueCarousel-dot--active{
      background-color: red !important;
      &:focus{
        outline: none;
      }
    }
  }
}
</style>
