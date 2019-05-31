import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/comm/home'
import Dashboard from '@/components/page/dashboard'
import List from '@/components/page/list'
import Userinfo from '@/components/page/userinfo'
import Tabs from '@/components/page/tabs'
import Upload from '@/components/page/upload'
import Drag from '@/components/page/drag'
import Addr from '@/components/page/addr'
import Authority from '@/components/page/authority'
import Log from '@/components/page/log'
import Organ from '@/components/page/organ'
import Flowdetail from '@/components/page/flowdetail'
import Permission from '@/components/page/permission'
import Nopage from '@/components/page/nopage'


import SystemResource from '@/components/page/systemManage/resource/systemResource'   //系统资源
import RoleManage from '@/components/page/systemManage/role/roleManage'   //角色管理
import RoleAuthority from '@/components/page/systemManage/role/roleAuthority'	//角色管理-角色分配
import UserManage from '@/components/page/systemManage/user/userManage'   //用户管理
import AccountSet from '@/components/page/systemManage/user/accountSet'   //用户管理-账户设置
import OrganManage from '@/components/page/systemManage/organ/organManage'   //机构管理
import SiteManage from '@/components/page/systemManage/site/siteManage'   //站点管理
import CacheManage from '@/components/page/systemManage/cache/cacheManage'   //缓存管理
import AreaManage from '@/components/page/systemManage/area/areaManage'   //区域管理
													
			
Vue.use(Router)
				
export default new Router({
  routes: [
  	{
      path: '/',						
      name: 'Login',
      component: Login
    },
  	{
      path: '/login',
      name: 'Login',
      component: Login
    },	
    {		
      path: '/home',		
      name: 'Home',
      component: Home,
      children:[			
      	{
      		path: '/dashboard',
      		name: 'Dashboard',
      		component: Dashboard
      	},
      	{					
            path: '/list',		
            name: 'List',			
            component: List
        },
        {					
            path: '/userinfo',		
            name: 'Userinfo',			
            component: Userinfo
        },
        {					
            path: '/tabs',		
            name: 'Tabs',			
            component: Tabs
        },
        {					
            path: '/upload',		
            name: 'Upload',			
            component: Upload
        },
        {					
            path: '/drag',		
            name: 'Drag',			
            component: Drag
        },	
        {					
            path: '/addr',		
            name: 'Addr',			
            component: Addr
        },
        {					
            path: '/authority',		
            name: 'Authority',			
            component: Authority
        },
        {					
            path: '/log',		
            name: 'Log',			
            component: Log
        },
        {							
            path: '/organ',		
            name: 'Organ',			
            component: Organ
        },
        {							
            path: '/flowdetail',		
            name: 'Flowdetail',			
            component: Flowdetail
        },
        {							
            path: '/permission',		
            name: 'Permission',			
            component: Permission
        },
        {							
            path: '/nopage',		
            name: 'Nopage',			
            component: Nopage
        },
        
        
       	/* 系统资源  */
       	{							
            path: '/systemResource',		
            name: 'systemResource',				
            component: SystemResource
        },		
       	/* 角色管理  */
       	{							
            path: '/roleManage',		
            name: 'roleManage',				
            component: RoleManage
        },
       	{							
            path: '/roleAuthority',		
            name: 'roleAuthority',				
            component: RoleAuthority
        },
        /* 用户管理  */
       	{							
            path: '/userManage',		
            name: 'userManage',				
            component: UserManage
        },	
        {							
            path: '/accountSet',						
            name: 'accountSet',				
            component: AccountSet
        },
        /* 机构管理  */
       	{							
            path: '/organManage',		
            name: 'organManage',				
            component: OrganManage
        },	
        /* 站点管理  */
       	{							
            path: '/siteManage',		
            name: 'siteManage',				
            component: SiteManage
        },
        /* 缓存管理  */
       	{							
            path: '/cacheManage',		
            name: 'cacheManage',				
            component: CacheManage
        },	
        /* 区域管理  */
       	{							
            path: '/areaManage',		
            name: 'areaManage',				
            component: AreaManage
        }
      			
      ]			
    }			
  ]
})
