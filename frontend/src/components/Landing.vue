<template>
    <div
    class="w-100 p-4 d-flex align-items-center justify-content-center"
    style="height: 350px;">
     <el-input
        type="textarea"
        :rows="2"
        placeholder="Text"
        v-model="textarea"
        align = "center"
        justify = "center">
    </el-input>
    <br />
    <el-button type="success" plain @click="submit()" style="padding:10px"><router-link to="/carousel">Enter</router-link></el-button>
    </div>

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    submit() {
      axios.post("http://localhost:3000/gpt/", {data: this.textarea})
        .then((res)=>{
            console.log("res.data in landing", res.data)
            this.$router.push({name:'carousel', query:{data:JSON.stringify(res.data)}})
        })
      
    },
  },
}
</script>