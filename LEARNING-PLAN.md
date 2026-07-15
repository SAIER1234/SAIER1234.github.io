# 45天暑假学习路线图

> 每天约7小时，白天为主。总计 ~315 小时学习时间。

---

## 总览

```
Day  1-3   ████████  The Missing Semester    工具基础
Day  4-10  ████████  CS61A (Python)           编程基础
Day 11-17  ████████  CS188 (AI导论)           AI入门
Day 18-38  ████████  CSAPP + CMU 15-445       核心攻坚期（并行）
Day 39-45  ████████  项目冲刺 + 整理收尾
```

---

## 每日时间模板

```
08:30-09:00  规划与复习 (30min)   回顾昨天，规划今天
09:00-11:00  深度学习块 (2h)      新课学习（视频/教材）
11:00-12:00  练习块 (1h)          配套练习/Lab
12:00-13:30  午饭 + 休息
13:30-15:00  实践块 (1.5h)        编码练习/Lab 继续
15:00-16:00  项目时间 (1h)        当前项目的开发
16:00-17:00  整理与博客 (1h)      笔记整理、博客写作、更新网站
```

---

## Phase 0: 工具奠基 (Day 1-3)

**课程：** [The Missing Semester of Your CS Education (MIT)](https://missing.csail.mit.edu/)

### Day 1 — Shell & Scripting
- [ ] 看 Lecture 1: The Shell
- [ ] 练习：cd, ls, mkdir, mv, cp, rm, chmod
- [ ] 理解管道 `|`、重定向 `>` `<` `>>`
- [ ] 写一个简单的 bash 脚本
- [ ] 完成课后练习

### Day 2 — Vim + Git
- [ ] 看 Lecture 2: Shell Tools and Scripting
- [ ] 看 Lecture 3: Editors (Vim)
- [ ] Vim 练习：打开、编辑、保存、退出、搜索替换
- [ ] 看 Lecture 4: Version Control (Git)
- [ ] Git 练习：init, add, commit, branch, merge, push, pull
- [ ] 把自己的个人网站仓库 clone 下来练习

### Day 3 — SSH + Debugging + Profiling
- [ ] 看 Lecture 5: Command-line Environment
- [ ] 看 Lecture 6: SSH（结合你已有的 WSL2 环境）
- [ ] 看 Lecture 7: Debugging and Profiling
- [ ] 整理一份个人 cheatsheet（Markdown 格式）

**产出：** 个人 cheatsheet + 一篇博客

---

## Phase 1: Python 筑基 (Day 4-10)

**课程：** [CS 61A (UC Berkeley)](https://cs61a.org/)

### Day 4 — Functions & Control
- [ ] Lecture 1-2: Functions, Control Statements
- [ ] Lab 00: Getting Started
- [ ] 理解 Environment Diagrams
- [ ] 重点：Python 的执行模型

### Day 5 — Higher-Order Functions
- [ ] Lecture 3-4: Higher-Order Functions, Lambda
- [ ] Lab 01: Functions, Control
- [ ] Hog Project 开始做

### Day 6 — Recursion
- [ ] Lecture 5-6: Recursion, Tree Recursion
- [ ] Lab 02: Higher-Order Functions, Lambda
- [ ] 重点理解：递归思维、递归 vs 迭代

### Day 7 — Data Abstraction
- [ ] Lecture 7-8: Data Abstraction, Trees
- [ ] Lab 03: Recursion, Tree Recursion
- [ ] 理解：抽象屏障（Abstraction Barrier）

### Day 8 — Mutable Data & OOP
- [ ] Lecture 9-10: Mutable Data, Object-Oriented Programming
- [ ] Lab 04: Data Abstraction, Trees
- [ ] 理解：Python 的对象模型

### Day 9 — Scheme & Interpreters
- [ ] Lecture 11-12: Scheme (Lisp方言), Interpreters简介
- [ ] Lab 05: Mutable Data, OOP, Scheme
- [ ] 理解：如何实现一个简单的解释器

### Day 10 — 综合复习
- [ ] Hog/Cats Project 收尾
- [ ] 复习 Environment Diagrams
- [ ] 写总结博客

**资源链接：**
- 课程主页：https://cs61a.org/
- 在线教材：https://www.composingprograms.com/
- Debug 环境图工具：https://pythontutor.com/

---

## Phase 2: AI 入门 (Day 11-17)

**课程：** [CS 188 (UC Berkeley)](https://inst.eecs.berkeley.edu/~cs188/)

### Day 11 — Search
- [ ] Lecture 1-2: Uninformed Search (BFS, DFS, UCS)
- [ ] Lecture 3: Informed Search (A*, Heuristics)
- [ ] Lab 1: Search

### Day 12 — Adversarial Search
- [ ] Lecture 4-5: Minimax, Alpha-Beta Pruning
- [ ] Lab 2: Multi-Agent Search (Pac-Man)

### Day 13 — Markov Decision Processes
- [ ] Lecture 6-7: MDPs
- [ ] Lecture 8: Value Iteration, Policy Iteration
- [ ] Lab 3: MDPs

### Day 14 — Reinforcement Learning
- [ ] Lecture 9-10: Reinforcement Learning
- [ ] Q-Learning, Approximate Q-Learning
- [ ] Lab 4: Reinforcement Learning

### Day 15 — Probability & Bayes Nets
- [ ] Lecture 11-12: Probability Review
- [ ] Lecture 13-14: Bayes Nets, Inference
- [ ] Lab 5: Bayes Nets

### Day 16 — Machine Learning Basics
- [ ] Lecture 15-16: Naive Bayes
- [ ] Lecture 17-18: Perceptron, Linear Classifiers
- [ ] Lab 6: Machine Learning

### Day 17 — 综合复习
- [ ] 所有 Lab 收尾
- [ ] Pac-Man 项目收尾
- [ ] 写总结博客

---

## Phase 3: 核心攻坚期 (Day 18-38)

> 这21天是最艰苦的阶段。两门 CMU 核心课并行推进。

**每日节奏：**
- 上午 2h: CSAPP 新课
- 下午 2h: CMU 15-445 新课
- 下午 1h: Lab 实践（交替进行）
- 傍晚 1h: 项目开发

---

### CSAPP 路线 (CMU 15-213)

| Days | 章节 | Lab | 内容 |
|------|------|-----|------|
| 18-21 | Ch1-2 | **Data Lab** | 信息表示、位运算、整数、浮点数 |
| 22-25 | Ch3 | **Bomb Lab** | x86-64 汇编、逆向、GDB调试 |
| 26-27 | Ch4 | — | Y86-64 处理器架构（理解即可） |
| 28-29 | Ch5 | — | 程序性能优化 |
| 30-33 | Ch6 | **Cache Lab** | 存储器层次、缓存模拟 |
| 34 | Ch7 | — | 链接 |
| 35-38 | Ch8 | **Shell Lab** | 异常控制流、信号、进程 |

**资源：**
- 课程主页：https://csapp.cs.cmu.edu/
- CSAPP 中文版可在各大书店购买
- Lab 材料：http://csapp.cs.cmu.edu/3e/labs.html

**你的目标：完成前 5 个 Lab（Data, Bomb, Cache, Shell 必做；Attack Lab 选做）**

---

### CMU 15-445 路线

| Days | 理论 | Project | 
|------|------|---------|
| 18-24 | Storage, Buffer Pool | **Project 1: Buffer Pool Manager** |
| 25-31 | Hash Index, B+Tree | **Project 2: B+Tree Index** |
| 32-38 | Query Execution, Optimization | **Project 3: Query Execution** |
| 39-45 | Concurrency, Recovery | **Project 4: Concurrency Control** |

**资源：**
- 课程主页：https://15445.courses.cs.cmu.edu/
- B站有中文搬运视频（搜索 "CMU 15-445"）
- **重要：** 这门课需要 C++17，确保 WSL2 环境可用

**你的目标：完成全部 4 个 Project**

---

## Phase 4: 项目冲刺 (Day 39-45)

| Day | 上午 (3h) | 下午 (3h) | 晚上 (1h) |
|-----|-----------|-----------|-----------|
| 39 | MiniDB Project 3 收尾 | 打磨 DevFlow README | 更新网站项目页 |
| 40 | MiniDB Project 4 | 打磨 TinyShell README | 写项目博客 |
| 41 | 编写简历 | 打磨 ClassifyAI README | 更新简历页 |
| 42 | 网站最终检查 | 所有项目 README 完善 | 写总结博客 |
| 43 | 录制项目 Demo | PDF 简历制作 | 社交链接配置 |
| 44 | 缓冲日：补漏复习 | 面试模拟练习 | 准备面试问题 |
| 45 | 最终检查 | 部署确认 | 🎉 庆祝！ |

---

## 可选课程（有余力时）

1. **Vibecoding 教程** — 碎片时间学习
2. **CS168S (计算机网络)** — Day 35+ 晚间
3. **MIT 6.S083 (操作系统)** — 最低优先级，CSAPP 已覆盖部分内容

---

## 时间预算

| 课程 | 天数 | 小时 |
|------|------|------|
| Missing Semester | 3 | 21h |
| CS61A | 7 | 49h |
| CS188 | 7 | 49h |
| CSAPP | 21 (穿插) | ~63h |
| CMU 15-445 | 21 (穿插) | ~84h |
| 项目开发 | 21 (每天1h) | ~21h |
| 网站维护 | 穿插 | ~15h |
| 整理收尾 | 7 | ~49h |
| **总计** | **45** | **~315h** |

---

## 学习技巧

1. **每6天休息半天** — 防止倦怠
2. **学不下去就做项目** — 项目比纯学习更有成就感
3. **每天写学习笔记** — 哪怕是几条要点，日积月累
4. **不要等「学完再做」** — 每学完一个模块就动手
5. **遇到 bug 先自己调试 15 分钟** — 然后果断搜索/问人
6. **善用 AI 辅助学习** — 让 AI 解释你不懂的概念，但不要让它替你写代码

---

> 📅 计划始于 2026年7月15日，预计结束于 2026年8月28日。加油！🚀
