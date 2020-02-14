<template>
  <div class="slotcontent">
    <ul>
      这是子组件开始
      <slot></slot>
      <li v-for="item in items">{{item.text}}</li>
      这是子组件结束
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      items: [
        {id: 1, text: 'slot 第1段'},
        {id: 2, text: 'slot 第2段'},
        {id: 3, text: 'slot 第3段'},
      ]
    }
  }
}
</script>
<style scoped>
</style>
