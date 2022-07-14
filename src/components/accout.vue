<template>
	<div>
		<h1>帐户中心</h1>
		<router-link to="/accout/password">密码管理</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "acc"
	}
</script>

<style>
</style>
