import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "易迪希",
  description: "易迪希",
  themeConfig: {
    darkModeSwitchLabel: "主题",
    darkModeSwitchTitle: "切换到深色模式",
    docFooter: {
      next: "下一页",
      prev: "上一页",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} 易迪希`,
    },
    lightModeSwitchTitle: "切换到浅色模式",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "App",
        items: [
          { text: "Dream ePRO", link: "/app/dream-epro" },
          { text: "Cloud ePRO", link: "/app/cloud-epro" },
          { text: "eConsent", link: "/app/econsent" },
        ],
      },
    ],
    outline: {
      label: "页面导航",
    },
    returnToTopLabel: "回到顶部",
    sidebar: [
      {
        text: "App",
        collapsed: true,
        items: [
          { text: "Dream ePRO", link: "/app/dream-epro" },
          { text: "Cloud ePRO", link: "/app/cloud-epro" },
          { text: "eConsent", link: "/app/econsent" },
        ],
      },
    ],
    sidebarMenuLabel: "菜单",
  },
});
