<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="flex justify-center items-center flex-wrap" style="height: 50vh">
    <div class="w-full flex justify-center">
      <p>qq:2212770755@qq.com</p>
    </div>
    <div class="w-full flex justify-center">
      <el-button
        class="mb-5"
        type="primary"
        style="width: 50%"
        size="large"
        @click="router.back()"
      >
        返回
      </el-button>
    </div>
  </div>
</template>

<style scoped></style>
