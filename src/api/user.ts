import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type UserResult = {
  success: boolean;
  data: {
    /** 用户名 */
    username: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/login", { data });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};

//=====================================================================================================
export type CommonResult = {
  status: number;
  data: any;
  message: string;
};

/** 创建 */
export const creatUser = () => {
  return http.request<CommonResult>("get", baseUrlApi("createUser"));
};

/** 查看用户信息 */
export const getUser = () => {
  return http.request<CommonResult>("get", baseUrlApi("getUser"));
};

/** 清除 */
export const clearUser = () => {
  return http.request<CommonResult>("get", baseUrlApi("clearUser"));
};

/** 计算类型 */
export const calcuResult = data => {
  return http.request<CommonResult>("post", baseUrlApi("calcuResult"), {
    data
  });
};

/** 查看报告（简版） */
export const getReport = () => {
  return http.request<CommonResult>("get", baseUrlApi("getReportSimple"));
};
/** 查看报告（详细） */
export const getReportDetail = () => {
  return http.request<CommonResult>("get", baseUrlApi("getReportAll"));
};
