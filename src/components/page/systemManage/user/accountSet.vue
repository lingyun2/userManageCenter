<template>
	<div class="account-main">
		<div class="account-content">
			<el-form :model="form" label-width="140px" size="small">
			    <el-form-item label="用户姓名：" class="mb6">
			      <span>云智易联</span>
			    </el-form-item>	
			    <el-form-item label="登录名：" class="login-name">
			      <span>云智易联</span>
			    </el-form-item>	
			    <el-form-item label="" class="remark">
			      <span>*注:账户配置机构数据权限,可支持对设备和流量模块跨平台数据进行机构维度配置</span>
			    </el-form-item>	
			    <el-form-item label="车联网机构：" class="clw-organ">
				    <el-transfer
					    filterable
					    :filter-method="clwOrgan"
					    filter-placeholder="请输入"
					    :titles="['待选车联网机构', '已选车联网机构']"
					    v-model="selectClwOrgan"
					    :data="clwOrganList">
					</el-transfer>
				</el-form-item>
				<el-form-item label="流量平台机构：">
				    <el-transfer
					    filterable
					    :filter-method="llptOrgan"
					    filter-placeholder="请输入"
					    :titles="['待选流量平台机构', '已选流量平台机构']"
					    v-model="selectLlptOrgan"
					    :data="llptOrganList">
					</el-transfer>
				</el-form-item>		
				<el-form-item label="">
				    <el-button type="warning" class="orangeBtn">返回</el-button>
				    <el-button type="primary">保 存</el-button>
				</el-form-item>
		 	</el-form>	
		</div>							
	</div>
</template>

<script>
	export default {
		data() {
	      const generateData2 = _ => {
	        const data = [];
	        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
	        cities.forEach((city, index) => {
	          data.push({
	            label: city,
	            key: index,
	            cities: cities[index]
	          });	
	        });
	        return data;
	      };
	      return {
	      	//车联网机构选择框
	        clwOrganList: generateData2(),
	        selectClwOrgan: [],
	        clwOrgan(query, item) {
	          return item.cities.indexOf(query) > -1;
	        },
	        
	        //流量平台机构选择框
	        llptOrganList: generateData2(),
	        selectLlptOrgan: [],
	        llptOrgan(query, item) {		
	          return item.cities.indexOf(query) > -1;
	        },
	        
	        //form表单
	       form: {
	          userName: '',
	          loginName: '',
	        }
	        
	      };
	    },
		mounted() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.account-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
	.login-name {
		margin-bottom: -6px;
	}
	.remark {
		color: #999999;
	}
	.clw-organ {
		margin-bottom: 30px;
	}
	
</style>
<style lang="scss">
	.account-main {
		 
		.el-transfer-panel {
			width: 300px;
		}
		.el-transfer__button {
			padding: 6px;
		}
		.el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label {
			font-size: 12px;
		}
	}
</style>