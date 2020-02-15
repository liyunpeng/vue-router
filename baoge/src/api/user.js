import axios from 'axios'
export function apiFunc () {
  axios.get(`/info/`, {
    params: {
    }
  }).then(res => {
    console.log('res:' + res.data)
    console.log('执行f123 完成')
    return res.data
  })
}
