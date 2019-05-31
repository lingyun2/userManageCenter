<template>
	<div class="area-main">
		<el-button type="success" class="aquaBtn mb15" @click="handleAdd()" size="small">添加地区</el-button>
		<el-button class="mb15" @click="handleCancel()" size="small">取消添加</el-button>
		
		<div class="area-content clearfix">
			<el-tree :data="treeData" class="tree-menu fl" :props="defaultProps" node-key="id" :default-expanded-keys="[0]" :render-content="renderContent"></el-tree>
		
			<!-- 区域详情  -->
			<div class="area-detail fl">
				<el-form :model="form" :rules="rules" size="small" label-width="150px">
				    <el-form-item label="名称" prop="name">		
				      <el-input v-model="form.name" placeholder="名称"></el-input>
				    </el-form-item>		
				    <el-form-item label="编码" prop="name">
				    	<el-input v-model="form.name" class="fl" :disabled="true" placeholder="父节点编码" style="width: 160px;"></el-input>
				    	<div class="fl"  style="margin: 0 20px;">-</div>
				    	<el-input v-model="form.name" class="fl" placeholder="编码" style="width: 160px;"></el-input>	
					</el-form-item>
					<el-form-item label="叶子节点" prop="name">
				    	<el-radio v-model="radio" label="1">否</el-radio>
		  				<el-radio v-model="radio" label="2">是</el-radio>
				 	</el-form-item>				
				    <el-form-item label="子节点数">		
					    <el-input v-model="form.desc" placeholder="子节点数"></el-input>	
					</el-form-item>			
					<el-form-item label="排序">
					    <el-input v-model="form.desc" placeholder="排序"></el-input>	
					</el-form-item>
					<el-form-item label="邮编">
					    <el-input v-model="form.desc" placeholder="邮编"></el-input>	
					</el-form-item>
					<el-form-item label="邮费">
					    <el-input v-model="form.desc" placeholder="邮费"></el-input>	
					</el-form-item>
					<el-form-item label="地区编号">
					    <el-input v-model="form.desc" placeholder="地区编号"></el-input>	
					</el-form-item>
					<el-form-item label="状态">
				    	<el-radio v-model="radio" label="1">启用</el-radio>
		  				<el-radio v-model="radio" label="2">停用</el-radio>
				    </el-form-item>
				    <el-form-item label="备注">
					    <el-input v-model="form.desc" placeholder="备注"></el-input>	
					</el-form-item>
					<el-form-item label="">
					    <el-button type="warning" class="orangeBtn">清 空</el-button>
					    <el-button type="primary">保 存</el-button>
					</el-form-item>
				</el-form>
			</div>	
		</div>
									
	</div>
</template>
										
<script>
  export default {
    data() {
      return {
        
        treeData: [{
          id: 1,
          label: '湖南省',
          children: [{
          	id: 4,
          	label: '一级 12',
          	children: [{
          		id: 6,
          		label: '一级13'
          	}]
          }]
        }, {
          id: 2,
          label: '湖北省',
          children: [{
          	id: 5,
          	label: '一级 1'
          }]
        }, {
          id: 3,        	
          label: '广东省'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },		
        
        //单选  默认选中值
        radio: '1',
        		
        //form表单
        form: {
          name: '',
          organ: '',
          desc: ''
        },
        rules: {		
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
        
      }
    },
    
    mounted() {
    	const arrayList = []
    	arrayList.push({
    		id: 0,
    		label: '地区列表',
    		children: this.treeData
    	})
		this.treeData = arrayList;
    },
					
    methods: {
       handleNodeClick(data) {
        console.log(data);
       },
       handleAdd() {	//添加地区
       		console.log(123)
       },
       handleCancel() {	//取消添加
       		console.log(22)
       },
       renderContent (h, { node, data, store }) {	//自定义tree
			return (		
				<span>
					<i class="el-icon-message"></i>
					<span class="el-tree-node__label">{node.label}</span>
				</span>			
			)
		}
    }		
  }
</script>

<style scoped lang="scss">
	.area-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
	.tree-menu {
		width: 300px;
    	border: 1px solid #DCDFE6;
    	min-height: 300px;
    	max-height: 500px;
	}
</style>