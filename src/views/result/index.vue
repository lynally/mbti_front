<script setup lang="ts">
import { useRouter } from "vue-router";
defineOptions({
  name: "Result"
});
const router = useRouter();
const handleGoHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="">
    <div class="flex-bc">
      <p>性格类型</p>
      <el-button @click="handleGoHome">回首页</el-button>
    </div>
    <div class="mt-3">
      严肃、安静、藉由集中心志与全力投入、及可被信赖获致成功。行事务实、有序、实际、逻辑、真实及可信赖十分留意且乐于任何事（工作、居家、生活均有良好组织及有序。负责任。照设定成效来作出决策且不畏阻挠与闲言会坚定为之。重视传统与忠诚。传统性的思考者或经理。
    </div>
  </div>
</template>
