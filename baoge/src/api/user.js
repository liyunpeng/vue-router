import axios from 'axios'
export function fabc () {
  axios.get(`/info/`, {
    params: {
    }
  }).then(res => {
    console.log('res:' + res.data)
    return res.data
  })
  console.log('执行f123 完成')
}
