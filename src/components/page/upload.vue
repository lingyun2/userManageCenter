<template>
	<div class="upload-main">
		
		<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
				
	</div>
</template>
										
<script>
  export default {
    data() {
      return {
      	
      }
    }
    
  }
</script>

<style scoped lang="less">
	.upload-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}	
	.upload-demo {
		width: 360px;
	}
</style>