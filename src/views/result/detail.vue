<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getReportDetail } from "@/api/user";
defineOptions({
  name: "Result"
});
const router = useRouter();

const desc = ref("");

onMounted(() => {
  init();
});
const init = async () => {
  const { status, data } = await getReportDetail();
  if (status === 200) {
    desc.value = JSON.parse(data);
  }
};
const handleGoHome = () => {
  router.push("/welcome");
};
</script>

<template>
  <div class="">
    <div class="flex justify-end">
      <el-button @click="handleGoHome">回首页</el-button>
    </div>
    <div class="mt-3">
      <div v-for="(value, title) in desc" :key="title" class="mb-5">
        <template v-if="title !== '序号'">
          <label>{{ title }}</label>
          <span>{{ value }}</span>
        </template>
      </div>
    </div>
  </div>
</template>
