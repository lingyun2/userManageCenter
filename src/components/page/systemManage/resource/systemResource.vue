<template>
	<div class="resource-main">
		<el-button type="success" class="aquaBtn mb15" @click="handleAdd()" size="small">添加资源</el-button>
		<el-button class="mb15" @click="handleCancel()" size="small">取消添加</el-button>
		
		<div class="area-content clearfix">
			<el-tree :data="treeData" class="tree-menu fl" :props="defaultProps" node-key="id" :default-expanded-keys="[0]"></el-tree>
		
			<!-- 资源详情  -->
			<div class="area-detail fl">
				<el-form :model="form" :rules="rules" label-width="150px" size="small">
				    <el-form-item label="名称" prop="name">		
				      <el-input v-model="form.name" placeholder="名称" style="width: 366px;"></el-input>
				    </el-form-item>		
				    <el-form-item label="URL" prop="name">		
				      <el-input v-model="form.name" placeholder="URL，无URL信息可填写‘#’"></el-input>
				    </el-form-item>	
					<el-form-item label="资源类型" prop="name">
				    	<el-radio v-model="radio" label="1">菜单</el-radio>
		  				<el-radio v-model="radio" label="2">按钮</el-radio>
				 	</el-form-item>				
				    <el-form-item label="资源编码" prop="name">
					    <el-input v-model="form.desc" placeholder="资源编码"></el-input>	
					</el-form-item>			
					<el-form-item label="排序" prop="name">
					    <el-input v-model="form.desc" placeholder="排序"></el-input>	
					</el-form-item>
					<el-form-item label="菜单层级" prop="name">
					    <el-input v-model="form.desc" :disabled="true" placeholder="菜单层级"></el-input>	
					</el-form-item>
					<el-form-item label="父类资源" prop="name">
					    <el-input v-model="form.desc" :disabled="true" placeholder="单击资源树节点，确定父类资源"></el-input>	
					</el-form-item>
					<el-form-item label="资源所属站点" prop="name">
					    <el-input v-model="form.desc" :disabled="true" placeholder="单击资源树节点，确定所属站点"></el-input>	
					</el-form-item>
					<el-form-item label="状态" prop="name">
				    	<el-radio v-model="radio" label="1">启用</el-radio>
		  				<el-radio v-model="radio" label="2">停用</el-radio>
				    </el-form-item>
				    <el-form-item label="图标地址">
					    <el-input v-model="form.desc" placeholder="图标地址"></el-input>	
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
    		label: 'root',
    		children: this.treeData
    	})
		this.treeData = arrayList;
    },
					
    methods: {
       handleNodeClick(data) {
        console.log(data);
       },
       handleAdd() {
       		console.log(123)
       },
       handleCancel() {
       		console.log(22)
       }
    }		
  }
</script>

<style scoped lang="scss">
	.resource-main {
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