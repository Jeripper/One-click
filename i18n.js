import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      login: "Login",
      logout: "Logout",
      profile: "Profile",
      settings: "Settings",
      upload: "Upload",
      welcome: "Welcome to One-click!",
      pleaseLogin: "Please login first",
      title: "Title",
      description: "Description",
      choosePlatform: "Choose platforms:",
      uploadNow: "🚀 Upload Now",
    },
  },
  zh: {
    translation: {
      home: "主页",
      login: "登录",
      logout: "退出",
      profile: "个人资料",
      settings: "设置",
      upload: "上传",
      welcome: "欢迎使用 One-click！",
      pleaseLogin: "请先登录",
      title: "标题",
      description: "描述",
      choosePlatform: "选择发布平台：",
      uploadNow: "🚀 立即上传",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;





