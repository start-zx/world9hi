<template>
	<div id="app">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1"></el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<div class="line"></div>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<!-- Standard button -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link class="navbar-brand" to="/">首页</router-link>
			<!-- <a class="navbar-brand" href="#">Navbar</a> -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<router-link class="nav-link" to="/about">关于我们</router-link>
						<!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/accout">帐户中心</router-link>
						<!-- <a class="nav-link" href="#">Features</a> -->
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/login">登录</router-link>
						<!-- <a class="nav-link" href="#">Pricing</a> -->
					</li>
					<br />
		 		<button type="button" class="btn btn-primary" @click="qj()">后退</button>
					<button type="button" class="btn btn-primary" @click="ht()">前进</button>
		 		<button type="button" class="btn btn-primary" @click="ht2()">跳步-2</button>
					<button type="button" class="btn btn-primary" @click="push()">push</button>
					<button type="button" class="btn btn-primary" @click="replace()">replace</button>
					<!-- <table style="background-color:#EEEEEB"> -->
					<router-view></router-view>
					<el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
					</el-pagination>
					<!-- </table> -->
					<!--<li class="nav-item">
         <a class="nav-link" href="#">Disabled</a> 
       </li> -->
				</ul>
			</div>
		</nav>

	</div>
</template>

<script>
	export default {
		name: 'App',
		methods: {
			qj() {
				//foward
				this.$router.go(-1);
			},
			ht() {
				//back
				this.$router.go(1);
			},
			ht2() {
				this.$router.go(-2);
			},
			push() {
				this.$router.push("/about");
			},
			replace() {
				this.$router.replace("/about");
			},
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
