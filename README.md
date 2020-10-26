1.基本配置

vue项目模块已经帮你配置：

常用的目录结构（你可以在此基础上修改）
vue.config.js（其中配置了别名，你可以自行修改和配置更多）
axios（网络请求axios的安装以及二次封装）
vue-router（router的安装和配置，另外有路由的动态加载，后面详细说明）
vuex（vuex的安装和配置，另外有动态加载子模块，后面详细说明）

2.项目开发功能
创建项目
创建Vue组件
创建Vue页面，并配置路由
创建Vuex子模块

3.创建项目

lsh create demo

4.创建vue组件

lsh addcpn YourComponentName # 例如lsh add NavBar，默认会存放到src/components文件夹中 
lsh addcpn YourComponentName -d src/pages/home # 也可以指定存放的具体文件夹 

5.创建Vue页面，并配置路由

lsh addpage YourPageName # 例如lsh addpage Home，默认会放到src/pages/home/Home.vue中，并且会创建src/page/home/router.js 
lsh addpage YourPageName -d src/views # 也可以指定文件夹，但需要手动集成路由 

6.创建Vuex子模块

lsh addstore YourVuexChildModuleName # 例如lsh addstore home，默认会放到src/store/modules/home/index.js和types.js 
lsh addstore YourVuexChildModuleName -d src/vuex/modules # 也可以指定文件夹 