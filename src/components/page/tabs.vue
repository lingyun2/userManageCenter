<template>

	<div class="tabs-main">
		<template>
		  <el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
		    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		  </el-tabs>
		</template>
	</div>

</template>
										
<script>
  export default {
    data() {
      return {
      	activeName: 'first'
      }
    },
    
    methods: {
    	handleClick(tab, event) {
	        console.log(tab, event);
	      }
    }

  }
</script>

<style scoped lang="less">
	.tabs-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}		
</style>