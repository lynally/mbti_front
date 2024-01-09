<script setup lang="ts">
import { onMounted } from "vue";
import Motion from "@/utils/motion";
import { useRouter } from "vue-router";

import { clearUser, creatUser, getUser } from "@/api/user";
import { useMbtiStoreHook } from "@/store/modules/mbit";
import { storeToRefs } from "pinia";

defineOptions({
  name: "Welcome"
});

const mbtiStore = useMbtiStoreHook();
const { MBTIType } = storeToRefs(mbtiStore);
const { setUserFn } = mbtiStore;
const router = useRouter();

onMounted(() => {
  init();
});
const init = async () => {
  const { status, data } = await getUser();
  if (status === 200) {
    setUserFn(data);
  } else {
    const { status, data } = await creatUser();
    if (status === 200) {
      setUserFn(data);
    }
  }
};
const handleStart = async () => {
  router.push("/question");
};
const handleReset = async () => {
  const { status, message } = await clearUser();
  if (status === 200) {
    const { status, data } = await creatUser();
    if (status === 200) {
      setUserFn(data);
      router.push("/question");
    }
  } else {
    console.error(message);
  }
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
        <template v-if="!MBTIType">
          <el-button
            class="mb-5"
            type="primary"
            style="margin-top: 15vh; width: 50%"
            size="large"
            @click="handleStart"
          >
            开始测试
          </el-button>
        </template>
        <template v-else>
          <el-button
            class="mb-5"
            type="primary"
            style="margin-top: 15vh; width: 50%"
            size="large"
            @click="handleReset"
          >
            重新测试
          </el-button>
          <el-button
            v-if="MBTIType"
            type="primary"
            style="width: 50%; margin-left: 0"
            size="large"
            @click="goResult"
          >
            查看结果
          </el-button>
        </template>
      </div>
    </Motion>
  </div>
</template>
