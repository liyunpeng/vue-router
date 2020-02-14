<template>
  <section class="city-select" :class="{animation: !show}">
    <div class="city-select-content">
      <h2 class="city-select-title">
        请选择地址<i class="icon-close" @click="hide">x</i>
      </h2>
      <v-distpicker type="mobile"  @province="changeProive" @city="changeCity" @area="changeArea"></v-distpicker>
    </div>
    <button class="btn-confirm" @click="confirm">确定</button>
  </section>
</template>
<script>
import Distpicker from 'v-distpicker'
export default {
  components: {
    'v-distpicker': Distpicker
  },
  data () {
    return {
      show: true,
      province: '',
      city: '',
      area: ''
    }
  },
  methods: {
    changeProive (province) {
      this.province = province
      this.city = ''
      this.area = ''
    },
    changeCity (city) {
      this.city = city
      this.area = ''
    },
    changeArea (area) {
      this.area = area
    },
    hide () {
      this.show = false
      this.callBack && this.callBack(false)
    },
    confirm () {
      let self = this;

      if (!self.province) return this.$Toast('请选择地址')
      if (!self.city) return this.$Toast('请选择城市')
      if (!self.area) return this.$Toast('请选择市区')
      let addr = `${self.province.value} ${self.city.value} ${self.area.value} `
      self.show = false;
      self.callBack && self.callBack(addr)
    }
  }
}
</script>
<style lang="less">
  .city-select{
  & {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }
  .city-select-content{
    position: absolute;
    left: 0;
    bottom: 3.0625rem;
    width: 100%;
    height: 22.25rem;
    overflow: scroll;
    background: #fff;
  }
  .btn-confirm{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.0625rem;
    color: #fff;
    font-size: 0.875rem;
    background-color: #5556ab;
    border-radius: 0;
  }
  .city-select-title{
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.0rem;
    border-bottom: 1px solid #5556ab;
    text-indent: 0.625rem;
    color: #323232;
  }
  .icon-close{
    float: right;
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.875rem;
    line-height: 2rem;
    color: #5556ab;

  }
  }
</style>
