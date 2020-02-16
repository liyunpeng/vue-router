<template>
    <div>
        <h1>单张图片</h1>
        <img :src="items" alt="">
        <h1>数字可以滑动</h1>
        <swiper :options="swiperOption">
          <swiper-slide>1</swiper-slide>
          <swiper-slide>2</swiper-slide>
          <swiper-slide>3</swiper-slide>
        </swiper>
        <h1>图片可以滑动</h1>
        <swiper :options="swiperOption">
          <swiper-slide>
            <img :src="items" alt="">
          </swiper-slide>
          <swiper-slide>
            <img :src="items1" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <h1>v-for写法图片滑动</h1>
        <swiper :options="swiperOption" >
          <swiper-slide v-for="imageitem in images" :key="imageitem">
            <img :src="imageitem" alt="">
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
      items: require('../assets/tim1.jpg'),
      items1: require('../assets/timg.jpg'),
      images: [
        require('../assets/timg.jpg'),
        require('../assets/tim1.jpg')
      ],
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600
      },
      swiperOption1: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: false,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2
        }
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
