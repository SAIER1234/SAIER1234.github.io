# 个人网站维护指南

> 这篇指南教你如何在 VS Code 中编辑和维护你的个人网站。**全程只需编辑 Markdown 和 YAML 文件，完全不需要写代码。**

---

## 目录

1. [环境准备](#环境准备)
2. [本地预览网站](#本地预览网站)
3. [修改个人信息](#修改个人信息)
4. [添加/编辑项目](#添加编辑项目)
5. [更新课程状态](#更新课程状态)
6. [写博客](#写博客)
7. [编辑简历](#编辑简历)
8. [部署到线上](#部署到线上)
9. [常见问题](#常见问题)
10. [文件速查表](#文件速查表)

---

## 环境准备

### 你需要安装的软件

1. **VS Code** — 你已经有了 ✅
2. **Git** — 你已经有了 ✅
3. **Hugo** — 安装方法见下方
4. **Node.js** — 你已经有了 ✅ (v22)

### 安装 Hugo

你之前通过 Scoop 安装了 Hugo。如果重装系统或换电脑：

```bash
scoop install hugo-extended
```

验证安装：
```bash
hugo version
# 应该显示: hugo v0.164.0+extended windows/amd64
```

### VS Code 推荐插件

在 VS Code 中按 `Ctrl+Shift+X`，搜索安装：

| 插件名 | 作用 |
|--------|------|
| **Markdown Preview Enhanced** | 预览 Markdown 效果 |
| **YAML** (by Red Hat) | YAML 语法高亮和校验 |
| **Prettier** | 代码格式化 |

### 首次使用

打开终端（VS Code 中按 `` Ctrl+` ``），运行：

```bash
npm install        # 安装依赖
npm run build:css  # 构建 CSS
```

---

## 本地预览网站

在终端中运行（在 `personal_website` 目录下）：

```bash
hugo server -D
```

浏览器打开 `http://localhost:1313` 就能看到网站了。你在 VS Code 中修改任何文件后，浏览器会自动刷新。

按 `Ctrl+C` 停止本地服务器。

---

## 修改个人信息

### 修改名字、标语、邮箱、GitHub 链接

编辑 `data/site.yaml`：

```yaml
name: "你的名字"
tagline: "你的简短标语"
taglineZh: "中文标语"
email: "你的邮箱@qq.com"
github: "https://github.com/你的GitHub用户名"
```

### 修改头像

把新头像放到 `static/images/` 目录，然后在 `layouts/partials/sidebar.html` 中修改引用路径（或直接将新头像命名为 `avatar.svg`/`avatar.jpg` 覆盖原文件）。

### 修改"关于我"介绍文字

编辑 `i18n/zh.yaml` 和 `i18n/en.yaml`，找到 `about_title` 和 `about_text` 字段。

---

## 添加/编辑项目

### 方式1：编辑 YAML 数据文件（推荐）

编辑 `data/projects.yaml`。

每个项目是一个条目，格式如下：

```yaml
  - id: "my-new-project"
    title: "My New Project"
    title_zh: "我的新项目"
    description: "English description here..."
    description_zh: "中文描述在这里..."
    tech: ["Python", "Django", "PostgreSQL"]
    github: "https://github.com/SAIER1234/my-new-project"
    demo: ""                    # 留空或填演示链接
    status: "completed"          # planning / in-progress / completed
    course: "CS61A"
    featured: true               # true = 首页显示, false = 只在项目页显示
```

**注意事项：**
- `id` 必须唯一，用英文小写+连字符
- `tech` 是技术栈标签列表
- `featured: true` 的项目会显示在首页
- `status` 三个可选值：`planning`（计划中）、`in-progress`（进行中）、`completed`（已完成）

### 方式2：创建 Markdown 详情页

如果某个项目需要专门的详情页面，创建 `content/projects/项目id.md`：

```markdown
---
title: "My New Project"
date: 2026-08-01
description: "A detailed description"
status: "completed"
course: "CS61A"
tech: ["Python", "Django"]
github: "https://github.com/SAIER1234/my-new-project"
---

## 项目简介
...
```

---

## 更新课程状态

编辑 `data/courses.yaml`。

每个课程的 `status` 字段有三个可选值：

| status 值 | 显示效果 |
|-----------|---------|
| `planning` | 📋 计划中 |
| `in-progress` | 📖 进行中 |
| `completed` | ✅ 已完成 |

例如，当你学完 CS61A 后：

```yaml
  - id: "cs61a"
    status: "completed"    # 改这里！
```

保存后网站立刻更新。

---

## 写博客

### 创建新博客文章

在终端中运行：

```bash
hugo new blog/文章文件名.md
```

Hugo 会在 `content/blog/` 下生成一个带有 frontmatter 模板的 Markdown 文件。

### 编辑文章

打开刚生成的文件，结构如下：

```markdown
---
title: "文章标题"
date: 2026-07-15
tags: ["Python", "学习笔记"]
description: "一句话描述这篇文章"
---

## 第一个小标题

正文内容，支持 **加粗**、*斜体*、`行内代码`。

### 代码块

​```python
def hello():
    print("Hello, World!")
​```

### 图片

![图片描述](/images/图片名.png)

### 链接

[链接文字](https://example.com)
```

### 中英双语文章

如果你想让一篇文章同时有中英文版本，目前最简单的方式是：

1. 中文版放在 `content/blog/文章名.md`
2. 在文章内容中，用 HTML 注释标记语言切换（或用中英双语混写）

### 标签

在 frontmatter 的 `tags` 字段添加标签：

```yaml
tags: ["CS61A", "Python", "学习笔记", "SICP"]
```

---

## 编辑简历

### 在线简历

编辑 `layouts/index.html`，找到 `<!-- 05. Resume Section -->` 部分，修改其中的教育背景和项目经历。

### PDF 简历

把 PDF 文件放到 `static/` 目录下，命名为 `resume-cn.pdf`（中文）和 `resume-en.pdf`（英文）。

首页会自动出现下载链接。

### 如何在 VS Code 中制作 PDF 简历？

推荐方式：
1. 用 Markdown 写简历
2. 用 VS Code 插件 `Markdown PDF` 导出为 PDF
3. 放到 `static/` 目录

---

## 部署到线上

网站使用 GitHub Pages 自动部署。只需要三步：

### 1. 提交更改

在 VS Code 终端中：

```bash
git add -A                      # 暂存所有更改
git commit -m "更新内容描述"      # 提交
git push origin main            # 推送到 GitHub
```

### 2. 等待自动部署

推送后，GitHub Actions 会自动构建和部署。通常 1-2 分钟完成。

在浏览器打开 `https://github.com/SAIER1234/personal-website/actions` 可以查看部署状态。

### 3. 查看效果

打开 `https://saier1234.github.io` 就能看到更新后的网站了。

---

## 常见问题

### Q: 本地预览正常但线上不更新？

A: 检查：
1. `git push` 是否成功？
2. GitHub Actions 部署是否通过？（看 `https://github.com/SAIER1234/personal-website/actions`）
3. 浏览器是否缓存了旧页面？按 `Ctrl+Shift+R` 强制刷新。

### Q: Hugo 构建报错？

A: 常见原因：
- `.yaml` 文件缩进不正确（YAML 对缩进敏感，必须用空格不能 Tab）
- `hugo.toml` 语法错误
- 确保先运行了 `npm run build:css`

### Q: 图片不显示？

A: 检查：
1. 图片是否放在了 `static/images/` 目录下
2. 引用路径是否正确：`![描述](/images/图片名.png)`
3. 图片文件名是否大小写匹配（大小写敏感！）

### Q: 中英文切换不生效？

A: 检查 `i18n/zh.yaml` 和 `i18n/en.yaml` 中的翻译键是否都存在。如果某个翻译键只在中文文件中存在而英文文件中没有，英文页面就会显示空白。

---

## 文件速查表

| 我想修改... | 编辑这个文件 |
|------------|------------|
| 我的名字 / 邮箱 / GitHub 链接 | `data/site.yaml` |
| 导航菜单 | `data/navigation.yaml` |
| 技能标签 | `data/skills.yaml` |
| 项目列表 | `data/projects.yaml` |
| 课程列表 | `data/courses.yaml` |
| 中文翻译文字 | `i18n/zh.yaml` |
| 英文翻译文字 | `i18n/en.yaml` |
| 博客文章 | `content/blog/*.md` |
| 头像 | `static/images/avatar.svg` |
| 网站标题和域名 | `hugo.toml` |

---

> 💡 **提示：** 每次修改后，先运行 `hugo server -D` 在本地 `http://localhost:1313` 预览确认无误，然后再 `git push` 推送到线上。
