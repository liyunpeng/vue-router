<template>
  <div class="slotcontent">
    <ul>
      这是子组件开始
      <slot>如果这里没有指定任何内容，这就是默认内容</slot>
      <slot name="my-header"></slot>
      <slot name="my-body"></slot>
      <slot name="my-footer"></slot>
      <slot name="my-footera"></slot>
      <slot name="item" v-for="item in items" :text="item.text">{{item}}</slot>
      <slot chinldToParent="hello from child"></slot>
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
        {id: 3, text: 'slot 第3段'}
      ]
    }
  }
}
</script>
<style scoped>
</style>
