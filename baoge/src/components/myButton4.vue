<template>
  <button @click="incrementCounter">{{counter}}</button> <!--在子组件中创建一个按钮，创建点击事件-->
</template>

<script>
export default{
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment1')
      this.$emit('increment2')
    }
  }
}
</script>
