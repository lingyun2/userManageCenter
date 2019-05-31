<template>
	<div class="dashboard-main">

		<div class="user-content">
			<el-card shadow="hover" class="mgb20" style="height:252px;">
                <div class="user-info">
                    <img src="../../assets/image/user.jpg" class="user-avator" alt="">
                    <div class="user-info-cont">
                        <div class="user-info-name">admin</div>
                        <div>213</div>
                    </div>
                </div>
                <div class="user-info-list">上次登录时间：<span>2018-01-01</span></div>
                <div class="user-info-list">上次登录地点：<span>东莞</span></div>
            </el-card>
		</div>
		<div class="skill">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>技能分类</span>
				</div>
				<div>vue</div>
				<el-progress :percentage="50"></el-progress>
				<div>react</div>
				<el-progress :percentage="30"></el-progress>
				<div>angular</div>
				<el-progress :percentage="20"></el-progress>
				<div>javascript</div>
				<el-progress :percentage="20"></el-progress>
			</el-card>
		</div>

		<div id="chart1"></div>
		<div id="chart2"></div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},

		mounted() {
			this.$chart.line1('chart1');
			this.$chart.line2('chart2');
		}

	}
</script>

<style scoped lang="less">
	.dashboard-main {
		padding: 20px;
	}
	.user-content {
		margin-bottom: 15px;
		width: 45%;
		float: left;
		height: 300px;
		background: #fff;
	}
	.skill {
		margin-bottom: 15px;
		width: 53%;
		float: right;
		height: 300px;
	}
	.el-progress {
		margin: 6px 0;
	}
	#chart1 {
		width: 41%;
		height: 360px;
		padding: 20px 2%;
    	background: #fff;
		float: left;
		-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	#chart2 {
		width: 49%;
		height: 360px;
		padding: 20px 2%;		
    	background: #fff;
		float: right;
		-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	.text {
		font-size: 14px;
	}
	.item {
		margin-bottom: 18px;
	}
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	.clearfix:after {			
		clear: both
	}				
	.user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }
</style>