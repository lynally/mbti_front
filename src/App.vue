<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { usePermissionStoreHook } from "@/store/modules/permission";
import { addPathMatch } from "@/router/utils";
import { setToken } from "@/utils/auth";
export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    currentLocale() {
      return zhCn;
    }
  }
});

// 全部采取静态路由模式
usePermissionStoreHook().handleWholeMenus([]);
addPathMatch();
setToken({
  username: "admin",
  roles: ["admin"],
  accessToken: "eyJhbGciOiJIUzUxMiJ9.admin"
} as any);
</script>
