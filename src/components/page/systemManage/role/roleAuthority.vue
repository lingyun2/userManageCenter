<template>
	<div class="authority-main">
		<div class="authority-content">
			<ul class="authority-ul">
				<li class="authority-li">
					<div class="system-name">云智小数据</div>
					<el-tree :data="data2" show-checkbox node-key="id" :default-checked-keys="[5]" :props="defaultProps"></el-tree>
				</li>		
				<li class="authority-li">
					<div class="system-name">运营平台</div>
					<el-tree :data="data2" show-checkbox node-key="id" :default-checked-keys="[10]" :props="defaultProps"></el-tree>
				</li>
				<li class="authority-bottom">
					<el-button type="warning" class="orangeBtn" size="small">返回</el-button>
				    <el-button type="primary" size="small">保 存</el-button>
				</li>
			</ul>
		</div>							
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data2: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1'
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
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
	.authority-main {
		padding: 20px;
		margin: 20px;
		background: #fff;
	}
	.authority-li {
		margin-bottom: 20px;
	}
	.authority-bottom {
		margin-top: 30px;
	}			
	.system-name {
		padding: 10px 0;
	}
</style>