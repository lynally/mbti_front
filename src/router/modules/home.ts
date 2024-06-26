const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "首页"
      }
    },
    {
      path: "/question",
      name: "Question",
      component: () => import("@/views/question/index.vue"),
      meta: {
        title: "测试"
      }
    },
    {
      path: "/result",
      name: "Result",
      component: () => import("@/views/result/index.vue"),
      meta: {
        title: "结果"
      }
    }
  ]
} as RouteConfigsTable;
