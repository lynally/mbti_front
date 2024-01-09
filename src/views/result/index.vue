<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getReport } from "@/api/user";
import { useMbtiStoreHook } from "@/store/modules/mbit";
import { storeToRefs } from "pinia";
defineOptions({
  name: "Result"
});
const router = useRouter();

const mbtiStore = useMbtiStoreHook();
const { MBTIType } = storeToRefs(mbtiStore);

const desc = ref("");

onMounted(() => {
  init();
});
const init = async () => {
  const { status, data } = await getReport();
  if (status === 200) {
    desc.value = data;
  }
};
const handleGoHome = () => {
  router.push("/welcome");
};
const handleGoDetail = () => {
  router.push("/detail");
};
</script>

<template>
  <div class="">
    <div class="flex-bc">
      <p>性格类型：{{ MBTIType }}</p>
      <el-button @click="handleGoHome">回首页</el-button>
    </div>
    <div class="mt-3">
      {{ desc }}
    </div>
    <div class="mt-10">
      <el-button type="primary" style="width: 100%" @click="handleGoDetail">
        详细报告
      </el-button>
    </div>
  </div>
</template>
