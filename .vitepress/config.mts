import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "易迪希",
  description: "易迪希",
  themeConfig: {
    outline: { level: "deep", label: "页面导航" },
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
    sidebar: [
      {
        text: "App",
        items: [
          { text: "Dream ePRO", link: "/app/dream-epro" },
          { text: "Cloud ePRO", link: "/app/cloud-epro" },
          { text: "eConsent", link: "/app/econsent" },
        ],
        collapsed: true,
      },
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      },
    },
    docFooter: { prev: "上一页", next: "下一页" },
    footer: { copyright: `© ${new Date().getFullYear()} 易迪希` },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    skipToContentLabel: "跳转到内容",
    externalLinkIcon: true,
    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
  },
  lastUpdated: true,
  markdown: { image: { lazyLoading: true } },
});
