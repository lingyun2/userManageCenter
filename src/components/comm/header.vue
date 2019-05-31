<template>
  <div class="header clearfix">
  	<div class="header-left fl">
  		<div class="collapse-btn fl" @click="collapseChage">		
  			<i class="el-icon-menu"></i>	
  		</div>		
			<span class="logo">用户管理系统</span>
		</div>		
		<div class="header-right fr">
			<div class="message-info fl">
				<el-tooltip class="item" effect="dark" content="2条未读消息" placement="bottom">
		      <i class="el-icon-bell"></i>		
		  	</el-tooltip>		
		    <span class="message-tip"></span>
			</div>
			<div class="user-img fl">
				<img src="../../assets/image/user.jpg" />
			</div>
			<div class="set fl">
				<el-dropdown trigger="click" @command="setDropdown">
		      <span class="el-dropdown-link name">	
		        admin<i class="el-icon-caret-bottom el-icon--right"></i>
		      </span>		
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item command="userinfo" icon="el-icon-plus">个人中心</el-dropdown-item>
		        <el-dropdown-item command="organ" icon="el-icon-circle-plus">用户设置</el-dropdown-item>
		        <el-dropdown-item command="login" icon="el-icon-circle-check-outline">退出登录</el-dropdown-item>
		      </el-dropdown-menu>		
		  	</el-dropdown>			
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Header',		
  data () {		
    return {				
      collapse: false
    }				
  },		
  methods:{		
  	// 侧边栏折叠
  	collapseChage(){			
	    this.collapse = !this.collapse;
	    this.$emit('collapse', this.collapse);
		},
							
		setDropdown(command){		
			this.$router.push(command);
		}
  }		
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.header {
		position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    background-color: #242f42;		
    line-height: 70px;
    
    .collapse-btn {
    	padding: 0 20px;
    	cursor: pointer;
    }
    
    .header-right {
    	padding-right: 40px;
    	
    	.message-info {
    		position: relative;
    		
    		.message-tip {
    			position: absolute;
			    right: 18px;
			    top: 21px;
			    width: 8px;
			    height: 8px;
			    border-radius: 4px;
			    background: #f56c6c;
			    color: #fff;
    		}
    		.el-tooltip {
    			padding: 20px;
    			cursor: pointer;
    		}
    	}
    	.user-img {
    		margin-right: 10px;
    			
    		img {
    			width: 40px;
		    	height: 40px;
		    	border-radius: 50%;
		    	vertical-align: middle;
    		}		
	    }
	    .set {
		    display: inline-block;
		    position: relative;
		    color: #606266;
		    font-size: 14px;
		    
		    .name {
		    	color: #fff;
    			cursor: pointer;
    			height: 70px;
    			display: block;
		    }
	    }
    }
    
	}
	.el-dropdown-menu {
		overflow: inherit;
	}
</style>
