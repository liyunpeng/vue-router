<template>
    <div>
        <MyChild :parentMessage="parentMessage"></MyChild>
    </div>
</template>

<script>
// import MyChild from '@components/MyChild'

export default {
  components: {
    MyChild
  },
  data () {
    return {
      parentMessage: '我是来自父组件的消息'
    }
  }
}
</script>
