<template>
	<div class="cache-main">
		<el-button type="primary" @click="handleAreaCache()"><i class="el-icon-upload el-icon--right mr6"></i>区域缓存同步</el-button>
		<el-button type="primary" @click="handleAreaCache()"><i class="el-icon-upload el-icon--right mr6"></i>机构缓存同步</el-button>
	</div>
</template>
										
<script>
  export default {
    data() {
      return {
      }		
    },
    
    methods: {
      handleAreaCache(e) {  //区域缓存同步
        this.$confirm('确认同步所有区域数据至缓存?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {			
          this.$message({
            type: 'success',
            message: '同步成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消同步'
          });          
        });
      }
    }		
  }
</script>

<style scoped lang="scss">
	.cache-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
</style>