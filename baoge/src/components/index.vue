<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar />
    <div >
      <Appmain />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import Appmain from '@/components/Appmain'
export default {
  name: 'index',
  components: {
    Sidebar,
    Appmain
  }
}
</script>
