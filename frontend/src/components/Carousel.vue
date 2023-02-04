<template>
  <div class="block">
    <!-- <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="450px" autoplay="false">
      <el-carousel-item v-for="item in this.data" :key="item[1]" >
        <div>
          <el-image  style="width: 100%; height: 100%" :src="item[1]" />
          <p class="medium" style="color: #fff">{{ item[0] }}</p>
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <div v-for="item in this.data" :key="item[1]" >
      <img  style="width: 75%; height: auto" :src="item[1]" />
      <p class="medium" style="color: #fff">{{ item[0] }}</p>
    </div>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(n) {
    background-color: #99a9bf;
  }
</style>

<script>
export default {
  setup() {
    
  },
  data() {
    return{
      data: JSON.parse(JSON.parse(this.$route.query.data))
    }
  },
  created() {
      console.log(this.data)
  },
}
</script>
