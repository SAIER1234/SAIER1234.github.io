# 8 项目详细提案

> 8个核心项目。覆盖 Python / C / C++ / AI / Web / 网络 / OS 七个方向。

---

## 项目总览

| # | 项目 | 语言 | 方向 | 难度 | 关联课程 | 时间 |
|---|------|------|------|------|---------|------|
| 1 | DevFlow | Python | CLI工具 | ⭐⭐ | CS61A | ~14h |
| 2 | TinyShell | C | 系统编程 | ⭐⭐⭐ | CSAPP | ~20h |
| 3 | MiniDB | C++ | 数据库 | ⭐⭐⭐⭐ | CMU 15-445 | ~38h |
| 4 | ClassifyAI | Python | AI/ML | ⭐⭐⭐ | CS188 | ~18h |
| 5 | Personal Website | Hugo/JS | Web | ⭐⭐ | 综合 | (已有) |
| 6 | TinyProxy | C | 网络编程 | ⭐⭐⭐ | CS168S | ~15h |
| 7 | MiniOS | C | 操作系统 | ⭐⭐⭐ | MIT 6.S083 | ~15h |

> 全部必修，无选学项目。

---

## Project 1: DevFlow — 开发者效率工具集

### 简介

一个 Python 命令行工具集，自动化日常开发中的繁琐操作。

### 为什么值得做？

- Python 入门后的第一个完整项目，难度友好
- 展示 CLI 应用设计能力
- **面试时可以现场演示**，非常直观
- 实际有用——你自己每天都能用

### MVP 功能

| 命令 | 功能 | 示例 |
|------|------|------|
| `devflow organize` | 按文件类型整理目录 | `devflow organize ~/Downloads` |
| `devflow scaffold` | 生成项目骨架 | `devflow scaffold --type python myproject` |
| `devflow gitlog` | 美化 Git 提交记录 | `devflow gitlog --since "1 week ago"` |
| `devflow stats` | 仓库统计 | `devflow stats --repo .` |

### 技术栈

```
语言：    Python 3.12+
CLI框架： argparse (标准库)
美化：     rich（终端彩色输出）
测试：     pytest
安装：     pip install . 或 pipx
```

### 项目结构

```
devflow/
├── devflow/
│   ├── __init__.py
│   ├── cli.py           # 主入口，argparse 定义
│   ├── commands/
│   │   ├── __init__.py
│   │   ├── organize.py  # 文件整理命令
│   │   ├── scaffold.py  # 项目脚手架命令
│   │   ├── gitlog.py    # Git 日志美化
│   │   └── stats.py     # 仓库统计
│   └── utils.py         # 公共工具函数
├── templates/           # scaffold 模板
│   ├── python/
│   └── c/
├── tests/
├── README.md
├── setup.py / pyproject.toml
└── Makefile
```

### 实现步骤

| 步骤 | 内容 | 时间 |
|------|------|------|
| 1 | 搭建项目结构 + argparse 主框架 | 2h |
| 2 | 实现 `organize` — 文件分类、移动、去重 | 2h |
| 3 | 实现 `scaffold` — 模板引擎、目录生成 | 3h |
| 4 | 实现 `gitlog` — git 命令包装、rich 美化 | 2h |
| 5 | 实现 `stats` — 文件统计、提交统计 | 2h |
| 6 | 写测试 + README + 发布 | 3h |

### 关键学习点

- argparse 子命令设计模式
- pathlib 文件操作
- subprocess 调用外部命令
- rich 库的 table/panel/progress 组件
- 包发布到 PyPI 的流程

### 进阶扩展

- 用 YAML 配置文件自定义规则
- 插件系统（用 `importlib` 动态加载）
- 交互模式（`devflow interactive`）

---

## Project 2: TinyShell — 迷你 Unix Shell

### 简介

从零实现一个支持管道、重定向、作业控制的 Unix Shell。

### 为什么值得做？

- **面试经典项目。** 面系统岗/后端岗时，能聊清楚 "ls | grep foo > out.txt" 背后发生了什么
- 展示对进程、信号、文件描述符的深刻理解
- 纯 C 语言，展示底层编程能力

### MVP 功能

| 功能 | 说明 |
|------|------|
| 命令执行 | fork + execvp 执行外部命令 |
| 管道 | `cmd1 | cmd2 | cmd3` 多级管道 |
| 重定向 | `<` 输入重定向, `>` `>>` 输出重定向 |
| 后台执行 | `cmd &` + `jobs` 查看后台任务 |
| 信号处理 | Ctrl+C 中断, Ctrl+Z 挂起 |
| 内置命令 | `cd`, `exit`, `jobs`, `fg`, `bg` |

### 技术栈

```
语言：    C (C99/C11)
环境：    Linux (WSL2)
系统调用：fork(), execvp(), pipe(), dup2(), signal(), waitpid()
构建：    Makefile
```

### 项目结构

```
tinyshell/
├── src/
│   ├── main.c          # REPL 主循环
│   ├── parser.c        # 命令解析（tokenizer）
│   ├── executor.c      # 命令执行器
│   ├── builtins.c      # 内置命令
│   ├── jobs.c          # 作业管理
│   └── signals.c       # 信号处理
├── include/
│   ├── tsh.h           # 主头文件
│   ├── parser.h
│   ├── executor.h
│   ├── builtins.h
│   ├── jobs.h
│   └── signals.h
├── tests/
├── Makefile
└── README.md
```

### 实现步骤

| 步骤 | 内容 | 时间 |
|------|------|------|
| 1 | REPL 循环 + 命令分词（tokenizer） | 3h |
| 2 | 基本命令执行 (fork/exec/wait) | 3h |
| 3 | 管道 (pipe + dup2 + 递归) | 4h |
| 4 | 重定向 (< > >>) | 2h |
| 5 | 后台执行 + jobs 管理 | 3h |
| 6 | 信号处理 (SIGINT, SIGTSTP, SIGCHLD) | 3h |
| 7 | 测试 + README | 2h |

### 关键学习点

- 进程模型：fork 后父进程和子进程的内存关系
- 文件描述符：0(stdin) 1(stdout) 2(stderr) 和 dup2 重定向
- 管道原理：pipe() 创建一对 fd，fork 后父子各关一端
- 僵尸进程和 waitpid
- 进程组和终端控制 (tcsetpgrp)

### 进阶扩展

- 脚本执行（读取文件中的命令逐行执行）
- 命令历史（用 readline 库）
- 环境变量展开 (`$HOME`, `$PATH`)
- 通配符展开 (`*.txt`)

---

## Project 3: MiniDB — 迷你关系数据库

### 简介

用 C++ 从零实现一个支持基本 SQL 的关系型数据库引擎。**这是五个项目中的王牌。**

### 为什么值得做？

- 面试数据库/后端岗位时，从 Buffer Pool 聊到 B+Tree 再到 Query Optimizer，全程不虚
- 工程量大但含金量极高
- 完美内化 CMU 15-445 的全部知识

### MVP 功能

| 层 | 功能 |
|----|------|
| 存储引擎 | Page-based storage, Slotted Page layout |
| Buffer Pool | LRU-K 替换策略，pin/unpin 页面管理 |
| B+Tree 索引 | 插入、查找、删除、范围扫描 |
| SQL 支持 | CREATE TABLE, INSERT, SELECT (WHERE) |
| 查询执行 | SeqScan + IndexScan |

### SQL 示例

```sql
CREATE TABLE users (id INT, name STRING, age INT);
INSERT INTO users VALUES (1, 'Alice', 20);
INSERT INTO users VALUES (2, 'Bob', 25);
SELECT * FROM users WHERE age > 18;
```

### 一条 SQL 在你的 MiniDB 中的旅程

```
SELECT * FROM users WHERE age > 18;
    │
    ▼
┌──────────┐
│  Parser  │  → 语法分析，生成 AST
└────┬─────┘
     ▼
┌──────────┐
│  Binder  │  → 绑定表名、列名到内部元数据
└────┬─────┘
     ▼
┌──────────┐
│ Planner  │  → 生成执行计划（SeqScan 还是 IndexScan）
└────┬─────┘
     ▼
┌──────────┐
│ Executor │  → 迭代器模型，逐行执行
└────┬─────┘
     ▼
┌──────────┐
│  Buffer  │  → 从 Buffer Pool 读取数据页
│   Pool   │  → 如果没命中，从磁盘读入
└────┬─────┘
     ▼
┌──────────┐
│   Disk   │  → 页面文件持久化存储
└──────────┘
```

### 技术栈

```
语言：    C++17/20
构建：    CMake
测试：    Google Test (gtest)
环境：    Linux (WSL2)
可选：    gRPC (对外接口), fpm (包管理)
```

### 项目结构

```
minidb/
├── src/
│   ├── storage/
│   │   ├── page.cpp         # 页面定义和读写
│   │   ├── disk_manager.cpp # 磁盘文件管理
│   │   └── table_heap.cpp   # 表的物理存储
│   ├── buffer/
│   │   ├── buffer_pool.cpp  # Buffer Pool 核心
│   │   └── lru_k.cpp        # LRU-K 替换算法
│   ├── index/
│   │   └── b_plus_tree.cpp  # B+Tree 索引
│   ├── execution/
│   │   ├── seq_scan.cpp     # 顺序扫描
│   │   ├── index_scan.cpp   # 索引扫描
│   │   └── filter.cpp       # WHERE 过滤
│   ├── sql/
│   │   ├── parser.cpp       # SQL 词法/语法分析
│   │   └── binder.cpp       # 元数据绑定
│   └── main.cpp             # CLI 入口
├── include/                 # 头文件
├── tests/                   # Google Test
├── CMakeLists.txt
└── README.md
```

### 实现步骤

| 步骤 | 时间 | 内容 |
|------|------|------|
| 1 | 10h | Page layout + Disk Manager + Buffer Pool + LRU-K |
| 2 | 10h | B+Tree Index（插入、查找、删除、范围扫描） |
| 3 | 10h | SQL Parser + Binder + Iterator-based Executor |
| 4 | 8h | 集成测试 + CLI 客户端 + README + Demo 录制 |

### 关键学习点

- Page layout: 如何在 4KB 页面中组织 Tuple（记录）
- Buffer Pool: 如何用有限内存管理大量磁盘页面
- LRU-K: 比简单 LRU 更好的缓存替换策略
- B+Tree: 为什么数据库用 B+Tree 而不是红黑树
- Volcano 迭代器模型: 每个算子实现 `Next()` 接口
- 为什么 `SELECT *` 不好

### 进阶扩展

- 支持 JOIN（Hash Join）
- 简单的 Cost-based Optimizer
- WAL (Write-Ahead Log) 崩溃恢复
- 多线程并发（latch 和 lock manager）

---

## Project 4: ClassifyAI — 智能分类器

### 简介

带 Web 界面的交互式机器学习分类应用：上传数据 → 训练模型 → 可视化结果。

### 为什么值得做？

- AI/ML 方向的代表项目
- 有可视化界面，展示效果好
- 从数据到模型到部署的完整链路
- 可以用 Streamlit/FastAPI 快速搭建

### MVP 功能

| 功能 | 说明 |
|------|------|
| 数据上传 | 支持 CSV/JSON 格式 |
| 数据预览 | 展示前 10 行 + 基本统计 |
| 分类器选择 | Naive Bayes / Decision Tree / KNN / Perceptron |
| 参数调节 | 交互式调节超参数 |
| 结果可视化 | 混淆矩阵、准确率、ROC曲线 |
| 模型导出 | 下载训练好的模型 |

### 技术栈

```
语言：    Python 3.12+
ML：      scikit-learn, numpy, pandas
可视化：   matplotlib, seaborn
Web后端：  Flask 或 FastAPI
Web前端：  HTML + Chart.js（轻量）
部署：    (可选) Hugging Face Spaces
```

### 项目结构

```
classifyai/
├── app.py                # Flask/FastAPI 主程序
├── models/
│   ├── __init__.py
│   ├── classifiers.py    # 分类器封装
│   └── evaluate.py       # 评估与可视化
├── data/
│   └── sample.csv        # 示例数据集
├── static/
│   ├── css/
│   └── js/
│       └── dashboard.js  # Chart.js 可视化
├── templates/
│   ├── index.html        # 主页面
│   └── result.html       # 结果页
├── tests/
├── requirements.txt
└── README.md
```

### 实现步骤

| 步骤 | 时间 | 内容 |
|------|------|------|
| 1 | 3h | 数据处理模块 + 特征工程 |
| 2 | 4h | 分类器实现（4种 + 统一接口） |
| 3 | 3h | 模型评估 + matplotlib/seaborn 可视化 |
| 4 | 3h | Web 后端（路由、上传、训练、结果） |
| 5 | 3h | Web 前端（Chart.js 交互可视化） |
| 6 | 2h | 测试 + README + 部署 |

### 关键学习点

- 分类器原理：Naive Bayes 的独立性假设、Decision Tree 的信息增益
- 过拟合 vs 欠拟合
- 混淆矩阵怎么看
- Web 应用中如何处理长时间训练任务（异步/进度条）
- 模型持久化（pickle/joblib）

### 进阶扩展

- 添加深度学习模型（PyTorch 的简单 NN）
- 模型可解释性（SHAP/LIME）
- 支持图像分类（用预训练模型）

---

## Project 5: Personal Website — 个人网站

### 简介

你正在看的这个网站。它本身就是一个完整的 Web 开发项目。

### 为什么算一个项目？

- 展示 Web 开发能力（Hugo + Tailwind CSS + JS）
- 展示设计能力（设计系统、暗色/亮色模式）
- 展示工程化能力（Git 工作流、CI/CD）
- 这是面试官看到的第一样东西

### 技术栈

```
Hugo       — 静态网站生成器
Tailwind CSS — 原子化CSS框架
Vanilla JS — 暗色模式切换、滚动动画
GitHub Actions — 自动部署
GitHub Pages — 免费托管
```

### 可以写在项目里的亮点

- 从零设计实现的设计系统（8色主题、排版体系、间距规范）
- 暗色/亮色双模式（CSS 变量 + JS + localStorage）
- 中英双语（Hugo i18n）
- 响应式设计（桌面端左侧边栏 + 移动端汉堡菜单）
- 100/100 Lighthouse 性能评分
- 自动化 CI/CD 部署（push → GitHub Actions → 上线）

---

## Project 6: TinyProxy — 简易 HTTP 代理服务器 🔥 必修

### 简介

用 C 实现一个支持缓存的 HTTP 正向代理服务器。

### 为什么值得做？

- 计算机网络课程的直接产出，展示 Socket 编程和 HTTP 协议理解
- 配合 CS168S 课程学习，理论与实践结合
- 展示并发编程能力（多线程/线程池）

### MVP 功能

| 功能 | 说明 |
|------|------|
| HTTP 代理 | 转发客户端 GET/POST 请求 |
| LRU 缓存 | 缓存响应，减少重复请求 |
| 并发处理 | pthread 多线程 |
| 访问日志 | 记录每次请求 |
| 黑名单过滤 | 简单的 URL 过滤规则 |

### 技术栈

```
C, socket(), pthread, HTTP/1.1 协议, LRU Cache
```

### 项目结构

```
tinyproxy/
├── src/
│   ├── main.c          # 入口，启动监听
│   ├── proxy.c         # 请求转发逻辑
│   ├── cache.c         # LRU 缓存
│   ├── filter.c        # URL 过滤
│   └── log.c           # 日志
├── include/
├── Makefile
└── README.md
```

### 实现步骤

| 步骤 | 时间 | 内容 |
|------|------|------|
| 1 | 3h | Socket 监听 + accept 连接 |
| 2 | 3h | HTTP 请求解析 + 转发 |
| 3 | 3h | LRU 缓存实现 |
| 4 | 3h | 多线程并发 + 线程池 |
| 5 | 3h | 日志 + 过滤 + README |

### 进阶扩展

- HTTPS CONNECT 隧道支持
- 带宽限制/流量统计
- 配置文件支持

---

## Project 7: MiniOS — xv6 操作系统扩展 🔥 必修

### 简介

基于 MIT 的 xv6 教学操作系统进行扩展，实现新系统调用、写时复制 fork、进程优先级调度。

### 为什么值得做？

- 操作系统课程的直接产出
- 展示对 OS 内核的深刻理解
- 比纯理论更有说服力 —— 「我真的改过操作系统内核」

### MVP 功能

| 功能 | 说明 |
|------|------|
| 系统调用 | 添加 `getreadcount()` 统计读操作次数 |
| Copy-on-Write fork | 优化 fork 性能，父子进程共享页表直到写入 |
| 优先级调度 | 简单的多级反馈队列调度器 |
| 用户程序 | 编写测试程序验证新功能 |

### 技术栈

```
C, xv6 (RISC-V), QEMU, gdb
```

### 项目结构

```
minios/
├── xv6-riscv/          # xv6 源码（修改后的）
│   ├── kernel/
│   │   ├── syscall.c   # 新增系统调用
│   │   ├── proc.c      # 调度器修改
│   │   ├── vm.c        # CoW fork 实现
│   │   └── ...
│   └── user/           # 测试用户程序
├── docs/
│   └── design.md       # 设计文档
├── README.md
└── Makefile
```

### 实现步骤

| 步骤 | 时间 | 内容 |
|------|------|------|
| 1 | 3h | 环境搭建：QEMU + xv6 编译运行 + gdb 调试 |
| 2 | 3h | 添加 `getreadcount` 系统调用 |
| 3 | 5h | 实现 Copy-on-Write fork |
| 4 | 4h | 实现多级反馈队列调度器 |

### 关键学习点

- xv6 的启动流程：boot → kernel main → scheduler
- 系统调用的完整路径：用户态 → ecall → trap → syscall handler
- 页表机制：RISC-V Sv39 虚拟内存
- CoW fork：利用页表权限位实现延迟拷贝
- 进程调度：时间片、优先级、MLFQ

### 进阶扩展

- 实现简单的内存映射文件 (mmap)
- 添加网络栈（参考 xv6-net 项目）
- 容器/命名空间隔离原型

---

## 项目时间线（建议的启动时机）

```
Day  1-3    The Missing Semester ─→ 穿插维护 Project 5 (Website)
Day  4-10   CS61A ────────────────→ 结束后启动 Project 1 (DevFlow)
Day 11-17   CS188 ────────────────→ 结束后启动 Project 4 (ClassifyAI)
Day 18-38   四课并行 ─────────────→ CSAPP    → Project 2 (TinyShell)  [Day 35+]
                                   15-445   → Project 3 (MiniDB)     [Day 24+]
                                   CS168S   → Project 6 (TinyProxy)  [Day 30+]
                                   6.S083   → Project 7 (MiniOS)     [Day 35+]
Day 39-45   项目冲刺 ────────────→ 打磨全部 7 项目 + 简历 + 面试准备
```

---

> 💡 **记住：** 先保证项目跑通 MVP，再考虑进阶功能。一个能跑的 MVP 远比一个做了一半的宏大项目更像样！

> 🔥 **8 个项目覆盖 7 大方向：** Python CLI → C 系统编程 → C++ 数据库 → Python AI/ML → Web → 网络编程 → 操作系统。面试时无论被问到哪个方向，你都有东西可以展示。
