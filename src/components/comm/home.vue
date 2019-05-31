<template>
  <div id="Home">
  		
  	<Header @collapse="update"></Header>
  	<Left :collapse="collapse"></Left>
  	<div class="content-box" :class="{'content-collapse':collapse}">
			<div class="content">
				<router-view></router-view>			
			</div>
  	</div>			
  	<Footer></Footer>
  			
  </div>
</template>

<script>
import Header from '@/components/comm/header'
import Left from '@/components/comm/left'
import Footer from '@/components/comm/footer'
	
export default {
  name: 'Home',
  data () {
    return {			
     collapse: false
    }			
  },									 
  components: {				
  	Header: Header,
  	Left: Left,		
  	Footer: Footer			
  },		
  methods:{			
      update(data) {	
      	console.log(data)
        this.collapse = data;
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content-box {
	position: absolute;
	left: 250px;
	top: 70px;
	right: 0;
	bottom: 0;
	background: #f0f0f0;
}			
.content-collapse {
	left: 65px;					 
}
.content {
	width: auto;
	height: 100%;
	overflow-y: scroll;
}	
</style>
