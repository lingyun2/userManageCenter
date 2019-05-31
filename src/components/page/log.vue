<template>
	<div class="log-main">
		<el-steps :active="2" align-center>
		  <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
		</el-steps>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				message:　"日志系统"
			}
		}
	}
	
</script>

<style scoped lang="less">
	.log-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
</style>