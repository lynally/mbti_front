const Layout = () => import("@/layout/index.vue");

export default {
  path: "/about",
  name: "About",
  component: Layout,
  redirect: "/aboutHome",
  meta: {
    title: "关于",
    rank: 0
  },
  children: [
    {
      path: "/aboutHome",
      name: "about",
      component: () => import("@/views/about.vue"),
      meta: {
        title: "关于"
      }
    }
  ]
} as RouteConfigsTable;
