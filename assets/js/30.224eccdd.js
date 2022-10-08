(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{302:function(e,n,t){"use strict";t.r(n);var a=t(14),s=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"利用-vue-codemod-工具升级到-vue3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用-vue-codemod-工具升级到-vue3"}},[e._v("#")]),e._v(" 利用 vue-codemod 工具升级到 Vue3")]),e._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),n("p",[e._v("Vue3 正式版本发布已经半年有余，同时 Vue2 会逐步停止维护，如何将现有的 Vue2 工程迁移到 Vue3 成为了大家关心的问题，尽管目前 Vue 官方有了详细的迁移指导，但实际项目中源码升级迁移工作量比较大，为减少重复性工作，这里推荐一款迁移工具 "),n("a",{attrs:{href:"https://github.com/originjs/vue-codemod",target:"_blank",rel:"noopener noreferrer"}},[e._v("originjs/vue-codemod"),n("OutboundLink")],1),e._v(" ，该工具可以将大部分的 Vue2（推荐 Vue2.6 以上版本）的语法直接升级成 Vue3 语法，之后配合一些手动更改完成 Vue2 项目的迁移。")]),e._v(" "),n("blockquote",[n("p",[e._v("说明："),n("a",{attrs:{href:"https://github.com/vuejs/vue-codemod",target:"_blank",rel:"noopener noreferrer"}},[e._v("originjs/vue-codemod"),n("OutboundLink")],1),e._v(" 是基于 "),n("a",{attrs:{href:"https://github.com/vuejs/vue-codemod",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs/vue-codemod"),n("OutboundLink")],1),e._v(" 的 fork 仓库，由于上游社区作者繁忙，暂时没有将我们的特性合入到原始项目中，因此我们在自己的 fork 仓库上继续特性开发。")])]),e._v(" "),n("p",[e._v("演示项目地址："),n("a",{attrs:{href:"https://github.com/originjs/vue2-element-touzi-admin/tree/to-vue3",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue2-element-touzi-admin"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"迁移步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迁移步骤"}},[e._v("#")]),e._v(" 迁移步骤")]),e._v(" "),n("h3",{attrs:{id:"step1-使用-vue-codemod-来改造我们的源代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step1-使用-vue-codemod-来改造我们的源代码"}},[e._v("#")]),e._v(" Step1："),n("a",{attrs:{href:"https://github.com/originjs/vue2-element-touzi-admin/commit/21aeb41bf8595a7a6323a92ed9326cec4c7f5955",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Vue codemod 来改造我们的源代码"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v("注意：vue-codemod 是在源路径下修改文件，若您的代码没有使用诸如 Git、SVN 等版本管理工具时，请提前备份。")])]),e._v(" "),n("p",[e._v("运行命令："),n("code",[e._v("npx vue-codemod src -a")]),e._v(" ，在手动修改前直接使用 vue-codemod 来一波自动升级（实际是语法替换），下面是转换日志，我们可以看到转换了哪些规则，更改了哪些文件；")]),e._v(" "),n("div",{staticClass:"language-cmd extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npx vue-codemod src -a\nWarning!!\nThis tool may overwrite files.\npress enter or enter yes or enter Y to continue:\nProcessing use new-component-api transformation: 2.344s\nProcessing use new-global-api transformation: 1.370s\nProcessing use vue-router-v4 transformation: 563.495ms\nProcessing use vuex-v4 transformation: 541.71ms\nProcessing use rename-lifecycle transformation: 605.352ms\nProcessing use add-emit-declaration transformation: 879.03ms\nProcessing use vue-i18n-v9 transformation: 507.606ms\nProcessing use element-plus-import transformation: 524.572ms\nProcessing use router-update-addRoute transformation: 591.202ms\nProcessing use const-app transformation: 614.617ms\nProcessing use slot-attribute transformation: 440.388ms\nProcessing use slot-scope-attribute transformation: 162.384ms\nProcessing use v-for-template-key transformation: 163.131ms\nProcessing use v-bind-sync transformation: 102.651ms\nProcessing use remove-v-on-native transformation: 132.229ms\nProcessing use router-view-keep-alive-transition transformation: 130.557ms\n--------------------------------------------------\nProcessed file:\nsrc/utils/mUtils.js\nsrc/components/iconSvg/index.js\nsrc/main.js\nsrc/lang/index.js\nsrc/router/index.js\nsrc/store/index.js\nsrc/components/echarts/barChart.vue\nsrc/components/echarts/lineChart.vue\nsrc/components/echarts/pieChart.vue\nsrc/components/echarts/radarChart.vue\nsrc/page/fundData/incomePayPosition.vue\nsrc/components/pagination/index.vue\nsrc/page/fundList/components/addFundDialog.vue\nsrc/page/fundList/components/searchItem.vue\nsrc/page/permission/components/SwitchRoles.vue\nsrc/page/share/components/hengShare.vue\nsrc/page/share/components/infoShare.vue\nsrc/page/share/components/inviteShare.vue\nsrc/page/share/components/jianshuLeftShare.vue\nsrc/page/share/components/jianshuShare.vue\nsrc/page/share/components/juejinShare.vue\nsrc/page/share/components/sinaShare.vue\nsrc/page/share/components/wxCodeModal.vue\nsrc/page/share/components/yanShare.vue\nsrc/permission.js\nsrc/utils/axios.js\nsrc/layout/bread.vue\nsrc/layout/content.vue\nsrc/layout/footerNav.vue\nsrc/layout/headNav.vue\nsrc/layout/home.vue\nsrc/layout/leftMenu.vue\nsrc/layout/topMenu.vue\nsrc/page/fundData/fundPosition.vue\nsrc/page/fundData/typePosition.vue\nsrc/page/fundList/chinaTabsList.vue\nsrc/page/fundList/fundList.vue\nsrc/page/infoManage/infoModify.vue\nsrc/page/infoManage/infoShow.vue\nsrc/page/permission/directive.vue\nsrc/page/userList/userList.vue\nsrc/page/fundList/moneyData/index.vue\nsrc/page/index/components/cardList.vue\nsrc/page/index/components/commentList.vue\nsrc/page/index/components/logList.vue\nsrc/page/index/components/salesTable.vue\nsrc/page/fundList/components/chinaTabsTable.vue\nsrc/page/login.vue\npackage.json\nProcessed 49 files\n79 places need to be transformed\n71 places was transformed\nThe transformation rate is 89.87%\nThe transformation stats:\n\n╔═══════════════════════════════════╤═══════╗\n║ Rule Names                        │ Count ║\n╟───────────────────────────────────┼───────╢\n║ new-component-api                 │   1   ║\n║ new-global-api                    │   1   ║\n║ vue-router-v4                     │   1   ║\n║ vuex-v4                           │   1   ║\n║ rename-lifecycle                  │   5   ║\n║ add-emit-declarations             │  13   ║\n║ vue-i18n-v9                       │   1   ║\n║ element-ui-upgrade                │   6   ║\n║ const-app                         │   1   ║\n║ slot-attribute                    │  15   ║\n║ slot-scope-attribute              │  16   ║\n║ v-for-template-key                │   3   ║\n║ v-bind-sync                       │   2   ║\n║ remove-v-on-native                │   3   ║\n║ router-view-keep-alive-transition │   1   ║\n║ package transformation            │   1   ║\n╚═══════════════════════════════════╧═══════╝\n\nThe list that you need to migrate your codes manually:\nindex: 1\n{\n  path: 'src/main.js',\n  position: '[7,0]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 2\n{\n  path: 'src/main.js',\n  position: '[22,0]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 3\n{\n  path: 'src/lang/index.js',\n  position: '[5,41]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 4\n{\n  path: 'src/router/index.js',\n  position: '[6,41]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 5\n{\n  path: 'src/store/index.js',\n  position: '[4,4]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 6\n{\n  path: 'src/directive/permission/index.js',\n  position: '[4,2]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 7\n{\n  path: 'src/directive/permission/index.js',\n  position: '[9,2]',\n  name: 'remove Vue(global api)',\n  suggest: \"The rule of thumb is any APIs that globally mutate Vue's behavior are now moved to the app instance. \",\n  website: 'https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp'\n}\nindex: 8\n{\n  path: 'src/router/index.js',\n  position: '[280,6]',\n  name: 'remove * routes',\n  suggest: 'Catch all routes (*, /*) must now be defined using a parameter with a custom regex: ',\n  website: 'https://next.router.vuejs.org/guide/migration/index.html#removal-of-the-fallback-option'\n}\n")])])]),n("h3",{attrs:{id:"step-2-将-element-ui-升级为-element-plus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-2-将-element-ui-升级为-element-plus"}},[e._v("#")]),e._v(" Step 2："),n("a",{attrs:{href:"https://github.com/originjs/vue2-element-touzi-admin/commit/8cddf35dcf04165fbf997e378205c5428dcb5e7f",target:"_blank",rel:"noopener noreferrer"}},[e._v("将 element-ui 升级为 element-plus"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Vue3 迁移中最大的限制就是依赖，如果诸如 UI 组件之类的依赖不支持 Vue 3，那就建议你暂时不要升级，等支持了再升级；")]),e._v(" "),n("h3",{attrs:{id:"step-3-修复一些全局-api-错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-3-修复一些全局-api-错误"}},[e._v("#")]),e._v(" Step 3："),n("a",{attrs:{href:"https://github.com/originjs/vue2-element-touzi-admin/commit/c1a7288299f80e23d5b1ad32f111ee10564ad8bd",target:"_blank",rel:"noopener noreferrer"}},[e._v("修复一些全局 API 错误"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("实践中发现有少部分的全局 API 工具是无法精准替换的，这里需要根据控制台的报错或告警信息来手动修改；")]),e._v(" "),n("h3",{attrs:{id:"step-4-修复一些与路由器升级相关的错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-4-修复一些与路由器升级相关的错误"}},[e._v("#")]),e._v(" Step 4："),n("a",{attrs:{href:"https://github.com/originjs/vue2-element-touzi-admin/commit/a5c95632e44877360be95014e74229ab13e50664",target:"_blank",rel:"noopener noreferrer"}},[e._v("修复一些与路由器升级相关的错误"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("router 4 中有一些迁移的坑，有一部分 vue-codemod 已经帮我们修改了，但仍然有一些非兼容信变更需要手动修改；")]),e._v(" "),n("h3",{attrs:{id:"step-5-修复警告"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-5-修复警告"}},[e._v("#")]),e._v(" Step 5："),n("a",{attrs:{href:"https://github.com/originjs/vue2-element-touzi-admin/commit/7a123320a0d0edf32baa09534c2f7df6664ec730",target:"_blank",rel:"noopener noreferrer"}},[e._v("修复警告"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("至此项目已经可以很好的运行起来了，再根据控制台的一些告警进行修复，让它更优雅的运行。")]),e._v(" "),n("h2",{attrs:{id:"最后我们来看看效果图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后我们来看看效果图"}},[e._v("#")]),e._v(" 最后我们来看看效果图")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/40830929/125884473-b89f344c-db98-4496-9d44-33b5e773c93d.png",alt:"image-20210716101939971"}})])])}),[],!1,null,null,null);n.default=s.exports}}]);