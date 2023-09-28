<script setup lang="ts">
import Motion from "@/utils/motion";
import { useRouter } from "vue-router";
defineOptions({
  name: "Welcome"
});
const router = useRouter();
const handleStart = () => {
  router.push("/question");
};
</script>

<template>
  <div>
    <Motion>
      <div class="flex justify-center items-center">
        <h1 style="margin-top: 20vh">MBTI职业性格测试</h1>
      </div>
    </Motion>
    <Motion :delay="100">
      <div class="flex justify-center items-center">
        <el-button
          type="primary"
          style="margin-top: 50vh; width: 50%"
          size="default"
          @click="handleStart"
        >
          准备测试
        </el-button>
      </div>
    </Motion>
  </div>
</template>
