<script setup lang="ts">
import Motion from "@/utils/motion";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
// import { getUser } from "@/api/user";
defineOptions({
  name: "Welcome"
});
const router = useRouter();

onMounted(() => {
  init();
});
const init = async () => {
  // const { status, data } = await getUser();
};
const handleStart = () => {
  router.push("/question");
};

const goResult = () => {
  router.push("/result");
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
      <div class="flex flex-col items-center">
        <el-button
          class="mb-5"
          type="primary"
          style="margin-top: 15vh; width: 50%"
          size="large"
          @click="handleStart"
        >
          开始测试
        </el-button>
        <el-button
          type="primary"
          style="width: 50%; margin-left: 0"
          size="large"
          @click="goResult"
        >
          查看结果
        </el-button>
      </div>
    </Motion>
  </div>
</template>
