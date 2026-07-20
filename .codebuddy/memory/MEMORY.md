# OpenOS 介绍网站

## 项目信息
- 位置: `/Users/cangcang/code/openos-dev-web/`
- 网站文件: `index.html`（单文件，内嵌 NOTHING UI CSS 和 JS）
- 设计系统: NOTHING UI v1.0（来自 github.com/Open-code-Studio/NOTHING-UI-1）
- 视觉风格: 模仿 open-code-studio.github.io/website（单 Hero + 简洁区块）

## NOTHING UI 设计规范要点（v1.0）
- 深色优先，Surface 0-5 六层层叠（#0A0A0A ~ #252525）
- **强调色: Green #4AA26F**（带渐变到 #6BC48D）
- 极微圆角: 2px (--radius)
- 字体: Inter (UI) + JetBrains Mono (代码/标签)
- 硬阴影多层层叠，极少模糊
- 零装饰: 无渐变背景、无模糊阴影、无动画炫技
- 所有动画 ≤200ms，ease-standard 缓动
- 键盘优先，focus-visible 2px 强调色内描边
- 4px 宽滚动条

## 网站结构（单 Hero 简洁版）
- **固定顶部导航 (48px)**: Logo + 5 个链接
- **Hero (满屏)**: Badge + 大标题(渐变词) + 副标题 + 双按钮 + 8 个技术标签
- **01 Features**: 6 张核心特性卡片
- **02 Projects**: 6 张项目卡片 (含 active/stable 状态徽章)
- **03 Quick Start**: 4 张入口卡片
- **04 About**: 3 张关于卡片
- **Footer**: 居中 Logo + 链接 + 版权

## 页面交互
- 移动端汉堡菜单
- IntersectionObserver 滚动监控 active nav 状态
- Fade-in 渐入动画 (intersection observer + delay)
