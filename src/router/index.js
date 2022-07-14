import VueRouter from 'vue-router'
					 
import about from '../components/about'
import accout from '../components/accout'
import first from '../components/frist'
import login from '../components/login'
import password from '../components/password'

 const router=new VueRouter({
	routes: [{
			path: '/about',
			component: about
		},
		{
			path: '/accout',
			component: accout,
			children:[
				{
					path: 'password',
					component: password
				}
			]
		},
		{
			path: '/',
			component: first
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/password',
			component: password
		}
	],

})
router.beforeEach((to, from, next) => {
	//beforeEach((to,from,next)=>{
		console.log('前置守卫',to.path)
		console.log(to,from)
		if(to.path !="/frist"){
			document.title='首页'
			next();
		}
	})
export default router
