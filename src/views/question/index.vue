<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, toRaw } from "vue";
import { isAllEmpty } from "@pureadmin/utils";
import { useRouter } from "vue-router";
import { questionAll } from "@/assets/data/questions.js";
// import { questionAll } from "@/assets/data/questions_test.js";
import { calcuResult } from "@/api/user";
import { useMbtiStoreHook } from "@/store/modules/mbit";

const mbtiStore = useMbtiStoreHook();
const { setUserFn } = mbtiStore;

defineOptions({
  name: "Question"
});
const router = useRouter();

const question = reactive<{
  data: Array<{
    title: string;
    optA: string;
    optB: string;
  }>;
}>({ data: [] });
const answer = reactive<{ data: Array<string> }>({ data: [] });
const result = ref("");

const curQuestionIndex = ref(0);

onMounted(() => {
  clear();
  init();
});
onUnmounted(() => {
  clear();
});
const init = async () => {
  initQuestion();
};
const curQuestion = computed(() => {
  return question.data[curQuestionIndex.value];
});
const curStep = computed(() => {
  let res = 0;
  if (!isAllEmpty(question.data)) {
    res = Math.round((curQuestionIndex.value / question.data["length"]) * 100);
  }
  return res;
});

const initQuestion = () => {
  const arr = questionAll.split("\n");
  question.data = groupArray(arr.slice(0, arr.length - 1), 3);
};
function groupArray(array, groupSize) {
  const result = [];
  for (let i = 0; i < array.length; i += groupSize) {
    result.push(array.slice(i, i + groupSize));
  }

  return result;
}
// 选择答案
const handleSelQuestion = async value => {
  answer.data[curQuestionIndex.value] = value;
  curQuestionIndex.value++;
  if (curQuestionIndex.value === question.data.length) {
    const { status, data, message } = await calcuResult({
      answer: toRaw(answer.data)
    });
    if (status === 200) {
      setUserFn(data);
      router.push("/result");
    } else {
      console.error(message);
    }
  }
};

const handleGoHome = () => {
  clear();
  router.push("/welcome");
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
    <div v-if="!isAllEmpty(curQuestion)">
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="curStep"
        striped
        class="p-2"
      >
        <span>{{ curQuestionIndex }}/{{ question.data.length }}</span>
      </el-progress>
      <div class="mt-4 p-2">
        <div class="flex flex-col">
          <div class="">
            {{ curQuestion[0] }}
          </div>
          <div class="mt-6 p-1">
            <div
              v-for="num in 2"
              :key="num"
              class="mb-3"
              :class="
                answer.data[curQuestionIndex] === (num === 1 ? 'A' : 'B')
                  ? 'text-red-700'
                  : ''
              "
              @click="handleSelQuestion(num === 1 ? 'A' : 'B')"
            >
              {{ curQuestion[num] }}
            </div>
          </div>
        </div>
      </div>

      <div class="foot">
        <el-button
          style="position: absolute; bottom: 30px"
          v-show="curQuestionIndex > 0"
          @click="curQuestionIndex--"
        >
          上一题
        </el-button>
        <el-button
          style="position: absolute; bottom: 30px; left: 100px"
          v-show="curQuestionIndex < answer.data.length - 1"
          @click="curQuestionIndex++"
        >
          下一题
        </el-button>
        <el-button
          style="position: absolute; bottom: 30px; right: 24px"
          v-show="curQuestionIndex > 0"
          @click="handleGoHome"
        >
          回首页
        </el-button>
      </div>
    </div>
  </div>
</template>
