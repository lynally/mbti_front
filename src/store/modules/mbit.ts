import { store } from "@/store";
import { mbtiUseType } from "./types";
import { defineStore } from "pinia";
import { cloneDeep } from "@pureadmin/utils";

export const useMbtiStore = defineStore({
  id: "mbti",
  state: (): mbtiUseType => ({
    token: "",
    MBTIType: "",
    answer: []
  }),
  getters: {},
  actions: {
    setUserFn(data: mbtiUseType) {
      this.token = data.token;
      this.answer = cloneDeep(data.answer);
      this.MBTIType = data.MBTIType;
    },
    clear() {
      this.answer = [];
      this.MBTIType = "";
    }
  }
});

export function useMbtiStoreHook() {
  return useMbtiStore(store);
}
