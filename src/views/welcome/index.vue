<script setup lang="ts">
import Motion from "@/utils/motion";
defineOptions({
  name: "Welcome"
});
</script>

<template>
  <Motion>
    <div class="flex justify-center items-center">
      <h1 style="margin-top: 20vh">MBTI职业性格测试</h1>
    </div>
  </Motion>
  <Motion :delay="100">
    <div class="flex justify-center items-center">
      <el-button
        type="primary"
        style="margin-top: 50vh"
        size="default"
        class="w-1/2"
      >
        准备测试
      </el-button>
    </div>
  </Motion>
</template>
