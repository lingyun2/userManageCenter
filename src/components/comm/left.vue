<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>		
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
    	props:['collapse'],		
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-rank',
                        index: '1',
                        title: '系统管理',
                        subs: [
                        	{		
                                index: 'systemResource',
                                title: '系统资源',
                            },
                            {		
                                index: 'roleManage',
                                title: '角色管理',
                            },
                            {		
                                index: 'userManage',
                                title: '用户管理',		
                            },
                            {		
                                index: 'organManage',
                                title: '机构管理',		
                            },
                            {		
                                index: 'siteManage',
                                title: '站点管理',		
                            },
                            {		
                                index: 'cacheManage',
                                title: '缓存管理',		
                            },
                            {		
                                index: 'areaManage',
                                title: '区域管理',		
                            }
                        ]
                    },
                    				
                    
                    {
                        icon: 'el-icon-tickets',
                        index: 'dashboard',
                        title: '系统信息'
                    },
                    {
                        icon: 'el-icon-news',
                        index: 'list',
                        title: '组织架构'
                    },
                    {		
                        icon: 'el-icon-sort',
                        index: 'userinfo',
                        title: '用户管理'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '2',
                        title: '系统设置',
                        subs: [
                            {
                                index: 'tabs',
                                title: '基本信息'
                            },
                            {
                                index: '2-1',
                                title: '用户头像',
                                subs: [
                                    {
                                        index: 'addr',
                                        title: '用户地址'
                                    },
                                    {
                                        index: 'authority',
                                        title: '用户权限'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '头像上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-location',
                        index: 'log',
                        title: '日志管理'
                    },
                    {
                        icon: 'el-icon-printer',
                        index: 'organ',
                        title: '机构管理'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: '3',
                        title: '流量管理',
                        subs: [
                            {
                                index: 'drag',
                                title: '流量列表',
                            },
                            {
                                index: 'flowdetail',
                                title: '流量详情',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-goods',
                        index: '4',
                        title: '错误页面',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: 'nopage',
                                title: '404页面'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped lang="less">
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
