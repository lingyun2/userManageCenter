import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://10.0.0.196:9050';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			
//http request拦截器
axios.interceptors.request.use((config) => {
	console.log(config.data)				
	//config.data = JSON.stringify(config.data);						
	return config;				
},(error) => {
	return Promise.reject(error);
})

//http response拦截器
axios.interceptors.response.use((response) => {
	if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
},(error) => {				
	return Promise.reject(error);
})

//封装post方法
export function post(url, data = {}){
	return new Promise((resolve,reject) => {
		axios.post(url,data)		
		.then(response => {
			resolve(response.data);
		},err => {											
			reject(err)
		})
	})
}

//封装get方法
export function fetch(url, params = {}){
	return new Promise((resolve,reject) => {
		axios.get(url,{
			params: params
		})
		.then(response => {
			resolve(response.data);
		})
		.catch(err => {
			reject(err)
		})
	})
}


