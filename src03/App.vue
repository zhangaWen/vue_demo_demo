<template>
  <div>
    <div v-if="!repoName">Loading</div>
    <div v-else>
      Most star popular is
      <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
   data () {
     return {
       repoName: '',
       repoUrl: ''
     }
   },
   mounted () {
     //使用vue-resource发送ajax请求
     const url = `https://api.github.com/search/repositories?q=j&sort=stars`
      // this.$http.get(url).then(response =>{
      //   const result = response.data
      //   const {html_url,name} = result.items[0]
      //   this.repoName = name
      //   this.repoUrl = html_url
      // }).catch(error =>{
      //   alert('请求出错'+error.statusText)
      // })

     //使用axios发送ajax请求
     axios.get(url).then(response =>{
       const result = response.data
       const {name,html_url} = result.items[0]
       this.repoName = name
       this.repoUrl = html_url
     }).catch(error =>{
       alert('请求出错'+error.message)
     })
   }
  }
</script>
<style scoped>

</style>
