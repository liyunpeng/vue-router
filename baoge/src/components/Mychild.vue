<template>
    <div>
        <span>{{ parentMessage }}</span>
    </div>
</template>

<script>
export default {
  name: 'MyChild',
  props: {
    parentMessage: {
      type: String,
      default: '默认显示的信息123'
      // require: true // 必填
    }
  }
}
</script>
