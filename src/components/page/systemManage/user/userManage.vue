<template>
	<div class="list-main">
		<div class="search-list">
			<!-- 日期  -->
		    <el-date-picker v-model="userDate" class="mr10 mt10" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="small"></el-date-picker>
		    		
		    <!-- 下拉选择  -->
		    <el-select v-model="value" class="mr10 mt10" placeholder="请选择机构" size="small">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">	
			    </el-option>
			</el-select>
						
			<el-input v-model="loginName" class="search-text mr10 mt10" placeholder="登录名" size="small"></el-input>
			<el-input v-model="userName" class="search-text mr10 mt10" placeholder="用户姓名" size="small"></el-input>
			<el-input v-model="phone" class="search-text mr10 mt10" placeholder="移动电话" size="small"></el-input>
			<el-button type="primary" class="blueBtn mt10" @click="handleSearch()" size="small">搜索</el-button>
			<el-button type="success" class="aquaBtn mt10 fr" @click="handleEdit()" size="small">添加用户</el-button>
		</div>
												
		<!-- 列表 -->
		<el-table ref="multipleTable" :data="tableData3" v-loading="loading" border tooltip-effect="dark" style="width: 100%" size="mini">
		    <el-table-column type="index" label="序号" width="50"></el-table-column>
		    <el-table-column prop="role_name" label="用户姓名" width="120" show-overflow-tooltip></el-table-column>
		    <el-table-column prop="status" label="性别" width="50"></el-table-column>
		    <el-table-column prop="organ_code" label="登录名" width="120" show-overflow-tooltip></el-table-column>
		    <el-table-column prop="create_person" label="所属机构"></el-table-column>
		    <el-table-column prop="create_person" label="移动电话" width="120"></el-table-column>
		    <el-table-column prop="status" label="用户状态" width="50"></el-table-column>
		    <el-table-column prop="create_person" label="创建人" width="120"></el-table-column>
		    <el-table-column label="创建时间" width="200"><template slot-scope="scope">{{ scope.row.create_time }}</template></el-table-column>
		    <el-table-column label="操作" width="450">		
		      <template slot-scope="scope">	
		      	<i class="el-icon-document blue mr6" @click="handleDetail(scope.$index, scope.row)">详情</i>
		      	<i class="el-icon-edit green mr6" @click="handleEdit(scope.$index, scope.row)">编辑</i>
		      	<i class="el-icon-circle-close-outline orange mr6" @click="handleDelete(scope.$index, scope.row)">停用</i>
		      	<i class="el-icon-delete red mr6" @click="handleDelete(scope.$index, scope.row)">删除</i>
		      	<i class="el-icon-delete aqua mr6" @click="handleDelete(scope.$index, scope.row)">重置密码</i>
		      	<i class="el-icon-remove-outline purple" @click="handleAuthority(scope.$index, scope.row)">移动端账户设置</i>
		      </template>				
		    </el-table-column>				
		</el-table>
							
		<!--分页-->
		<div class="pagination">
			<el-pagination background
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="pageNo"		
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="pageSize"		
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total" small>				
		 	</el-pagination>			
		</div>
		
		<!-- 详情弹窗 -->
		<el-dialog custom-class="detail-dialog" title="用户详情" :visible.sync="detailDialog" width="30%">
			<el-form :model="form" label-width="100px" size="small" style="">		
			    <el-form-item label="用户姓名"><span>云智易联</span></el-form-item>		
			    <el-form-item label="登录名"><span>云智易联</span></el-form-item>
			    <el-form-item label="性别"><span>云智易联</span></el-form-item>
			    <el-form-item label="机构"><span>云智易联</span></el-form-item>
			    <el-form-item label="Email"><span>云智易联</span></el-form-item>
			    <el-form-item label="QQ号码"><span>云智易联</span></el-form-item>
			    <el-form-item label="移动电话"><span>云智易联</span></el-form-item>
			    <el-form-item label="固定电话"><span>云智易联</span></el-form-item>
			    <el-form-item label="微信号"><span>云智易联</span></el-form-item>
			    <el-form-item label="地区"><span>云智易联</span></el-form-item>
			    <el-form-item label="地址"><span>云智易联</span></el-form-item>
			    <el-form-item label="角色"><span>云智易联</span></el-form-item>
			    <el-form-item label="站点"><span>云智易联</span></el-form-item>
			    <el-form-item label="状态"><span>云智易联</span></el-form-item>
			    <el-form-item label="备注"><span>云智易联</span></el-form-item>
			    <el-form-item label="创建人"><span>云智易联</span></el-form-item>
			    <el-form-item label="创建时间"><span>云智易联</span></el-form-item>
			    <el-form-item label="最后修改人"><span>云智易联</span></el-form-item>
			    <el-form-item label="最后时间"><span>云智易联</span></el-form-item>
			</el-form>			
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="detailDialog = false" size="small">关闭</el-button>
		  </div>
		</el-dialog>
		
		<!-- 编辑弹窗 -->
		<el-dialog title="编辑用户" :visible.sync="editDialog" width="30%">
		  <el-form :model="form" :rules="rules" label-width="100px" size="small">
		    <el-form-item label="用户姓名" prop="name"><el-input v-model="form.name"></el-input></el-form-item>		
		    <el-form-item label="登录名" prop="name"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="性别" prop="name">
		    	<el-radio v-model="radio" label="1">男</el-radio>
  				<el-radio v-model="radio" label="2">女</el-radio>
		    </el-form-item>
		    <el-form-item label="机构">
		    	<!-- 下拉选择  -->
			    <el-select v-model="form.organ" filterable placeholder="请选择机构">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">	
				    </el-option>
				</el-select>
		    </el-form-item>
		    <el-form-item label="Email"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="QQ号码"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="移动电话" prop="name"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="固定电话"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="微信号"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="地区">
		    	<el-cascader
				  :options="options2"
				  @active-item-change="handleItemChange"
				  :props="props"
				></el-cascader>
		    </el-form-item>
		    <el-form-item label="地址"><el-input v-model="form.name"></el-input></el-form-item>
		    <el-form-item label="角色">
		    	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="复选框 A"></el-checkbox>
				    <el-checkbox label="复选框 B"></el-checkbox>
				</el-checkbox-group>
		    </el-form-item>
		    <el-form-item label="站点">
		    	<el-checkbox-group v-model="checkList1">
				    <el-checkbox label="复选框 A"></el-checkbox>
				    <el-checkbox label="复选框 B"></el-checkbox>
				</el-checkbox-group>
		    </el-form-item>
		    <el-form-item label="备注"><el-input v-model="form.name"></el-input></el-form-item>
		  </el-form>					
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="editDialog = false" size="small">取 消</el-button>
		    <el-button type="primary" @click="editDialog = false" size="small">确 定</el-button>
		  </div>
		</el-dialog>
		
	</div>
</template>
										
<script>
  export default {
    data() {
      return {
      	//列表控件
        tableData3: [],
        total: 0,
        pageNo: 1,
        pageSize: 10,
        multipleSelection: [],
        		
        //时间控件
        userDate: "",	
        				
        //下拉控件
        options: [{value: '选项1',label: '永盛杰'},
	       {value: '选项2',label: '乐驾'},
	       {value: '选项3',label: '云智'},
	       {value: '选项4',label: '凌度'},
	       {value: '选项5',label: 'HP惠普安行'}],
        value: '',
        
        //单选  默认选中值
        radio: '1',
        
        loading: false,	//加载状态
        
        //复选框
        checkList: ['选中且禁用','复选框 A'],
        checkList1: ['选中且禁用','复选框 A'],
        		
        //三级联动
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        		
        //输入框
        loginName: '',
        userName: '',
        phone: '',
        
        //弹窗
        detailDialog: false,   //详情
        editDialog: false,  //编辑
        		
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
    	this.getRoleList(this.pageNo,this.pageSize);					
    },
		
    methods: {
      getRoleList: function(pageNo,pageSize){	//获取角色列表
      	var _this = this;
      	_this.loading = true;
      	_this.$post('/getRoleList',{
    		pageNo: pageNo,		
    		pageSize: pageSize
    	})				
    	.then((response) => {
    		//转换GWT格式时间
    		var roleList = response.data.roleList;
    		var createTime,createMonth,createDay,createHours,createMinutes,createSeconds;
    		if(roleList && roleList.length>0){
    			for(var i=0;i<roleList.length;i++) {
    				createTime = new Date(roleList[i].create_time);
    				createMonth = createTime.getMonth()+1;
    				createDay = createTime.getDate();
    				createHours = createTime.getHours();
    				createMinutes = createTime.getMinutes();
    				createSeconds = createTime.getSeconds();
					if(createMonth<10) createMonth = "0"+createMonth;
					if(createDay<10) createDay = "0"+createDay;
					if(createHours<10) createHours = "0"+createHours;
					if(createMinutes<10) createMinutes = "0"+createMinutes;
					if(createSeconds<10) createSeconds = "0"+createSeconds;
    				roleList[i].create_time = createTime.getFullYear()+"-"+createMonth+"-"+createDay+" "+createHours+":"+createMinutes+":"+createSeconds;
    			}			
    		}
    		_this.tableData3 = roleList;
    		_this.total = response.data.total;	
    		setTimeout(function(){
    			_this.loading = false;
    		},1000);
    	});	
      },
      handleSearch() {	//搜索
      	this.getRoleList(this.pageNo,this.pageSize);		
      },
      handleSizeChange(val) {
      	this.pageSize = val;
      	this.getRoleList(this.pageNo,this.pageSize);				
      },
      handleCurrentChange(val) {
      	this.pageNo = val;
      	this.getRoleList(this.pageNo,this.pageSize);		
      },
      handleDetail(index, row) {	//详情
      	console.log(row);
      	this.detailDialog = true;
      },		
      handleEdit(index, row) {	//编辑
      	console.log(row);
      	this.editDialog = true;
      },		
      handleDelete(index, row) {  //删除
        console.log(index, row);
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
      },
      handleAuthority(index, row) {	//账户设置
      	console.log(index, row);
		this.$router.push('/accountSet');
      },
      handleItemChange(val) {	//三级联动
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }	
    }		
  }
</script>

<style scoped lang="scss">
	.list-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
	.search-list {
		padding-bottom: 20px;
		
		.search-text {
			width: 200px;
		}
	}
	.el-icon-document {
		cursor: pointer;
	}	
	.el-icon-edit {
		cursor: pointer;
	}
	.el-icon-circle-close-outline {
		cursor: pointer;
	}
	.el-icon-delete {
		cursor: pointer;
	}	
	.el-icon-remove-outline {
		cursor: pointer;
	}
	.detail-dialog .el-form-item {
		margin-bottom: 8px;
	}
</style>