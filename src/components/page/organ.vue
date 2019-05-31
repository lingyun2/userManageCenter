<template>
	<div class="organ-main clearfix" @click="addValue">
		<el-row>
		  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
		    <el-card :body-style="{ padding: '0px' }">
		      <img src="../../assets/image/organ.png" class="image">
		      <div style="padding: 14px;">
		        <span>好吃的汉堡</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ currentDate }}</time>
		          <el-button type="text" class="button">操作按钮</el-button>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>
	</div>
</template>
<style lang="scss">
	.organ-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
	.el-row {
		width: 60%;
		height: 360px;
	}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  		
  mounted() {
	//axios 	
  /*	this.$axios.post('http://10.0.0.196:9050/getRoleList')
  	.then(function(response){
  		console.log(response)						
  	})		
  	.catch(function(error){
  		console.log(error)
  	});*/
  	
  	//vuex
  	console.log(this.$store.state.count);		
  	console.log(this.$store.getters.getStateCount)
  },																	
  
  methods: {
  	addValue() {
  		this.$store.dispatch("addCount");		
  	}
  }
  
}
</script>