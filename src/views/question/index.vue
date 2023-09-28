<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { isAllEmpty } from "@pureadmin/utils";
import { useRouter } from "vue-router";
defineOptions({
  name: "Question"
});
const router = useRouter();
const enum answer_type {
  "E",
  "I",
  "N",
  "S",
  "F",
  "T",
  "J",
  "P"
}
const loading = ref(false);
const question = reactive<{
  data: Array<{
    title: string;
    optA: {
      title: string;
      value: string;
    };
    optB: {
      title: string;
      value: string;
    };
  }>;
}>({ data: [] });
const answer = reactive<{ data: Array<answer_type> }>({ data: [] });
const result = ref("");

const curQuestionIndex = ref(0);

const curQuestion = computed(() => {
  return question.data[curQuestionIndex.value];
});
const curStepPersent = computed(() => {
  let res = 0;
  if (!isAllEmpty(question.data)) {
    res = Math.round((curQuestionIndex.value / question.data["length"]) * 100);
  }
  return res;
});

// 选择答案
const handleSelQuestion = value => {
  answer.data[curQuestionIndex.value] = value;
  curQuestionIndex.value++;
  if (curQuestionIndex.value >= question.data.length) {
    router.push("/result");
  }
};

onMounted(() => {
  clear();
  init();
});
onUnmounted(() => {
  clear();
});
const init = () => {
  loading.value = true;
  getData();
};
const getData = () => {
  question.data = [
    {
      title: "我倾向从何处得到力量?",
      optA: { title: "别人", value: "E" },
      optB: { title: "我自己的想法", value: "I" }
    },
    {
      title: "我倾向相信： ",
      optA: { title: "我的直觉", value: "N" },
      optB: { title: "我直接的观察和现成的经验", value: "S" }
    },
    {
      title: "我倾向比较能够察觉到： ",
      optA: { title: "当人们需要情感上的支持时", value: "F" },
      optB: { title: "当人们不合逻辑时", value: "T" }
    },
    {
      title: "我选择的生活循环着： ",
      optA: { title: "日程表和组织", value: "J" },
      optB: { title: "自然发生和弹性", value: "P" }
    }
  ];
};
const clear = () => {
  question.data = [];
  answer.data = [];
  result.value = "";
  curQuestionIndex.value = 0;
};
</script>

<template>
  <div>
    <div v-if="!isAllEmpty(curQuestion)" class="p-2">
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="curStepPersent"
        striped
      >
        <span>{{ curQuestionIndex }}/{{ question.data.length }}</span>
      </el-progress>
      <div class="mt-10">
        <div class="flex">
          <div class="">{{ curQuestionIndex + 1 }}.&nbsp;&nbsp;&nbsp;</div>
          <div class="flex-auto">
            {{ curQuestion.title }}
          </div>
        </div>
      </div>
      <div class="mt-4 p-1">
        <div class="flex" @click="handleSelQuestion(curQuestion.optA.value)">
          <div class="">A&nbsp;&nbsp;&nbsp;</div>
          <div class="flex-auto">
            {{ curQuestion.optA.title }}
          </div>
        </div>
        <div
          class="flex mt-1"
          @click="handleSelQuestion(curQuestion.optA.value)"
        >
          <div class="">B&nbsp;&nbsp;&nbsp;</div>
          <div class="flex-auto">
            {{ curQuestion.optB.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
