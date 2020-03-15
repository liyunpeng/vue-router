<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      websock: null,
      msg: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init: function () {
      const wsurl = 'ws://127.0.0.1:88/ws'
      this.websock = new WebSocket(wsurl)
      this.websock.onmessage = this.onmessage
      this.websock.onopen = this.onopen
      this.websock.onerror = this.onerror
      this.websock.onclose = this.onclose
    },
    onopen: function () {
      let actions = {'test': '12345'}
      this.send(JSON.stringify(actions))
      // this.send('{"userid":1, "name":"zhang san", "age":"30"}')
      // this.send('send  begining data')
    },
    send: function (data) {
      this.websock.send(data)
    },
    onclose: function (e) {
      console.log('ws close', e)
    },
    onmessage: function (e) {
      console.log(e.data)
      var a = JSON.parse(e.data)
      this.msg = this.msg.concat('\n', a.Data)
    },
    onerror: function () {
      console.log('ws error')
      this.init()
    }
  },
  watch: {
  }
}
</script>
