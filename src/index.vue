<template>
  <div id="Index">
    <router-view/>
  </div>		
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss">
html,body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
#Index {
	width: 100%;
	height: 100%;
}
ul {
	margin: 0;
	padding: 0;
}
.fl {
	float: left;
}				
.fr {						
	float: right;
}
.clearfix:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
}
.hide {
    display: none;
}
.show {
    display: block;
}
ul li {
    list-style-type: none;
}
.mt20 {
	margin-top: 20px;
}
.mb20 {
	margin-bottom: 20px;
}
.mb15 {
	margin-bottom: 15px;
}
.ml10 {
	margin-left: 10px;
}	
.mr10 {
	margin-right: 10px;
}
.mt10 {
	margin-top: 10px;
}	
.mb10 {
	margin-bottom: 10px;
}	
.ml6 {
	margin-left: 6px;
}
.mr6 {
	margin-right: 6px;
}
.mt6 {
	margin-top: 6px;
}
.mb6 {
	margin-bottom: 6px;
}
/* 搜索颜色  */
.blue {	
	color: #3cb1ff;
}		
/* 添加颜色  */
.aqua {
	color: #27da99;
}			
/* 删除颜色  */						
.red {	
	color: #ff7477;	
}		
/* 编辑颜色  */
.green {
	color: #3ecec9;
}	
/* 验证颜色 */
.orange {		
	color: #ffc367;
}
/* 栅格化颜色 */
.purple {
	color: #9a83da;
}	
/* 搜索按钮颜色  */
.blueBtn {	
	background: #3cb1ff;
  border-color: #3cb1ff;
}
/* 添加按钮颜色  */
.aquaBtn {
	background: #27da99;
  border-color: #27da99;
}			
/* 删除按钮颜色  */						
.redBtn {		
	background: #ff7477;
  border-color: #ff7477;
}		
/* 编辑按钮颜色  */
.greenBtn {
	background: #3ecec9;
  border-color: #3ecec9;
}	
/* 验证按钮颜色 */
.orangeBtn {		
	background: #ffc367;
  border-color: #ffc367;
}
/* 栅格化按钮颜色 */
.purpleBtn {
	background: #9a83da;
  border-color: #9a83da;
}	

.el-table {
  td {
    * {		
      font-size: 14px;
    }			
  }
}
.el-dialog__body {
	max-height:50vh;		
	overflow: auto;
	padding: 10px 20px;
}						
.pagination {
	margin: 20px 0;
	text-align: right;
}
/*
	滚动条
*/
/*滚动条样式*/
::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
    border-radius: 0;
}

.schema-browser {
    font-family: FZYaoti !important;
    font-size: 14px !important;
}
.schema-browser::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.schema-browser::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
}
.schema-browser::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
}
</style>
