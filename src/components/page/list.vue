<template>
	<div class="list-main">
		<div class="search-list">
			<!-- 日期  -->
			<el-date-picker class="mr10" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
		    
		    <!-- 下拉选择  -->
		    <el-select v-model="value" class="mr10" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			
			<el-input v-model="input" class="search-text mr10" placeholder="请输入内容"></el-input>
					
			<el-button type="primary">搜索</el-button>
	
		</div>
						
		<!-- 列表 -->
		<el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
		    <el-table-column type="selection" width="55"></el-table-column>
		    <el-table-column label="日期" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
		    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
		    <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
		    <el-table-column label="操作" width="220">
		      <template slot-scope="scope">	
		        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>		
		    </el-table-column>		
		</el-table>
				
		<!--分页-->
		<div class="pagination">
			<el-pagination background
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="2"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		</div>
		
		<!-- 删除确认框 -->
		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
		  <span>确定删除当前数据</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="centerDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
		
		<!-- 编辑弹窗 -->
		<el-dialog title="编辑" :visible.sync="dialogFormVisible" width="30%">
		  <el-form :model="form">
		    <el-form-item label="日期" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="姓名" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="地址" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>			
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>

	</div>
</template>
										
<script>
  export default {
    data() {
      return {
      	//列表控件
        tableData3: [{date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}, 
        {date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'},
        {date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'},
        {date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'},
        {date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'},
        {date: '2016-05-03',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}],
        multipleSelection: [],
        		
        //时间控件
        value1: "",	
        
        //下拉控件
        options: [{value: '选项1',label: '黄金糕'},
	       {value: '选项2',label: '双皮奶'},
	       {value: '选项3',label: '蚵仔煎'},
	       {value: '选项4',label: '龙须面'},
	       {value: '选项5',label: '北京烤鸭'}],
        value: '',
        
        //输入框
        input: '',
        
        //删除确认框
        centerDialogVisible: false,
        
        //编辑弹窗
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: "50px"
        
      }
    },
		
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
      	console.log(row);
      	this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.centerDialogVisible = true;
      }
    }		
  }
</script>

<style scoped lang="less">
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
</style>