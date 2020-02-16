<template>
    <div>
        <h1>swiper</h1>
        <swiper :options="swiperOption">
          <swiper-slide>1</swiper-slide>
          <swiper-slide>2</swiper-slide>
          <swiper-slide>3</swiper-slide>
        </swiper>
        <h1>swiper</h1>
        <swiper :options="swiperOption">
          <swiper-slide v-for="items in allData.bannerphoto" key="items">
            <img :src="items" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      msg: '我是home 组件',
      radio: '1',
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600
      }
    }
  },
  name: 'data外的变量',
  age: 12,
  func1 () {
    console.log('func1')
  },
  created () {
    console.log(this.$options.name)
    console.log(this.$options.age)
    this.$options.func1()
  }
}
</script>
