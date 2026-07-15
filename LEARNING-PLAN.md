# 45天暑假学习路线图 V2

> 每天约 8-9 小时，白天为主。总计 ~409 小时。8 门课程 + 8 个项目。

---

## 总览

```
Day  1-3   ████████  The Missing Semester    工具基础 (21h)
Day  4-10  ████████  CS61A (Python)           编程基础 (49h)
Day 11-17  ████████  CS188 (AI导论)           AI入门 (49h)
Day 18-38  ████████  四课并行攻坚              核心期 (205h)
                     ├─ CSAPP (52h)
                     ├─ CMU 15-445 (73h)
                     ├─ CS168S 网络 (40h)
                     └─ MIT 6.S083 OS (40h)
Day 39-45  ████████  项目冲刺 + 整理收尾       收官 (49h)
```

---

## 每日时间模板

### Phase 0-2 (Day 1-17): 单课集中期 ~7h/天

```
08:30-09:00  规划与复习 (30min)
09:00-11:00  新课学习 (2h)
11:00-12:00  配套练习/Lab (1h)
12:00-13:30  午饭休息
13:30-15:00  Lab 继续 (1.5h)
15:00-16:00  项目开发 (1h)
16:00-17:00  笔记整理 + 博客 (1h)
```

### Phase 3 (Day 18-38): 四课并行期 ~8.5h/天

```
08:30-09:00  规划复习 (30min)
09:00-10:30  CSAPP 课程学习 (1.5h)
10:30-12:00  CMU 15-445 课程学习 (1.5h)
12:00-13:30  午饭休息
13:30-15:00  第三门课 (1.5h)     CS168S 或 6.S083（按周轮换）
15:00-16:30  Lab 实践 (1.5h)     当天课程的 Lab
16:30-17:30  项目开发 (1h)
17:30-18:00  笔记整理 + 博客 (30min)
```

---

## Phase 0: 工具奠基 (Day 1-3)

**课程：** [The Missing Semester (MIT)](https://missing.csail.mit.edu/) — 21h

| Day | 内容 | 练习 |
|-----|------|------|
| 1 | Shell & Scripting: bash 基础、管道、重定向、脚本 | 课后练习 1-5 |
| 2 | Vim + Git: 编辑、分支、合并、rebase、GitHub | Vim练习 + Git练习 |
| 3 | SSH / Debugging / Profiling / Metaprogramming | 完成练习 + cheatsheet |

**产出：** 个人 cheatsheet + 博客《我为什么要学 Missing Semester》

---

## Phase 1: Python 筑基 (Day 4-10)

**课程：** [CS 61A (UC Berkeley)](https://cs61a.org/) — 49h

| Day | 内容 | Lab |
|-----|------|-----|
| 4 | Functions, Control, Environment Diagrams | Lab 00 |
| 5 | Higher-Order Functions, Lambda, Currying | Lab 01 |
| 6 | Recursion, Tree Recursion | Lab 02 |
| 7 | Data Abstraction, Trees, Linked Lists | Lab 03 |
| 8 | Mutable Data, OOP, Inheritance | Lab 04 |
| 9 | Scheme (Lisp), Interpreters 简介 | Lab 05 |
| 10 | 综合复习 + Hog/Cats Project 完成 | Mini Project ✅ |

**产出：** 5 Labs + 1 Project + 博客

---

## Phase 2: AI 入门 (Day 11-17)

**课程：** [CS 188 (UC Berkeley)](https://inst.eecs.berkeley.edu/~cs188/) — 49h

| Day | 内容 | Lab |
|-----|------|-----|
| 11 | Search: BFS, DFS, UCS, A* | Lab 1 |
| 12 | Adversarial Search: Minimax, Alpha-Beta | Lab 2 |
| 13 | MDPs, Value Iteration, Policy Iteration | Lab 3 |
| 14 | Reinforcement Learning: Q-Learning | Lab 4 |
| 15 | Bayes Nets, Inference | Lab 5 |
| 16 | Machine Learning: Naive Bayes, Perceptron | Lab 6 |
| 17 | 综合复习 + Pac-Man 收尾 | All Labs ✅ |

**产出：** 6 Labs + 博客

---

## Phase 3: 四课并行攻坚 (Day 18-38) — 21天，~205h

> 这是最核心、最艰苦的 21 天。四门 CMU/MIT/Berkeley 核心课并行。
> CS168S 和 6.S083 按周轮换，每周聚焦一门。

---

### CSAPP 路线 (CMU 15-213) — ~52h

| Days | 章节 | Lab | 内容 |
|------|------|-----|------|
| 18-21 | Ch1-2 | **Data Lab** | 信息表示、位运算、整数、浮点数 |
| 22-25 | Ch3 | **Bomb Lab** | x86-64 汇编、逆向、GDB |
| 26-27 | Ch4 | — | Y86-64 处理器架构 |
| 28-29 | Ch5 | — | 程序性能优化 |
| 30-33 | Ch6 | **Cache Lab** | 存储器层次、缓存 |
| 34 | Ch7 | — | 链接 |
| 35-38 | Ch8 | **Shell Lab** | 异常控制流、信号、进程 |

**资源：** [CSAPP 官网](https://csapp.cs.cmu.edu/) · [Lab 材料](http://csapp.cs.cmu.edu/3e/labs.html)

---

### CMU 15-445 路线 (Database Systems) — ~73h

| Days | 理论 | Project |
|------|------|---------|
| 18-24 | Storage, Buffer Pool, Hash Index | **Project 1: Buffer Pool Manager** |
| 25-31 | B+Tree Index | **Project 2: B+Tree Index** |
| 32-38 | Query Execution, Optimization | **Project 3: Query Execution** |
| 39-42 | Concurrency Control, Recovery | **Project 4: Concurrency Control** |

**资源：** [CMU 15-445 官网](https://15445.courses.cs.cmu.edu/) · B站搜索 "CMU 15-445"

---

### CS168S 路线 (Computer Networks) — ~40h 🔥 必修

| Days | 模块 | 内容 | Lab |
|------|------|------|-----|
| 18-20 | Module 1 | HTTP/DNS/传输层基础 | 抓包分析 (Wireshark) |
| 22-24 | Module 2 | TCP 拥塞控制、流量控制、可靠传输 | TCP simulator |
| 26-28 | Module 3 | IP 路由、BGP、SDN | 路由模拟 |
| 32-34 | Module 4 | 应用层：Web、CDN、P2P、视频流 | Simple HTTP server |
| 36-38 | Module 5 | 网络安全基础：TLS、证书、防火墙 | 综合 |

**资源：** [CS168 官网](https://cs168.io/)

---

### MIT 6.S083 路线 (Operating Systems) — ~40h 🔥 必修

> 注意：6.S083 和 CSAPP 有部分重叠（进程、虚拟内存），重叠部分可加速。

| Days | 模块 | 内容 | Lab (xv6) |
|------|------|------|------------|
| 19-21 | Module 1 | OS 架构、系统调用、进程管理* | xv6 boot + syscall |
| 25-27 | Module 2 | 内存虚拟化、页表、地址翻译 | xv6 page tables |
| 30-32 | Module 3 | 并发、锁、线程调度 | xv6 threads |
| 35-37 | Module 4 | 文件系统、崩溃恢复 | xv6 fs |

*Module 1 与 CSAPP Ch8 重叠，预计节省 ~2h

**资源：** [MIT 6.S081 官网](https://pdos.csail.mit.edu/6.828/)（6.S083 的前身）

---

### 四课并行周计划一览

```
Week 1 (Day 18-24):
  上午: CSAPP Data Lab + 15-445 Storage
  下午: CS168S Module 1 (网络基础)
  实践: CSAPP Data Lab / 15-445 P1

Week 2 (Day 25-31):
  上午: CSAPP Bomb Lab + 15-445 B+Tree
  下午: 6.S083 Module 1-2 (OS)
  实践: Bomb Lab / 15-445 P2

Week 3 (Day 32-38):
  上午: CSAPP Cache/Shell + 15-445 Query Exec
  下午: CS168S Module 2-3 (TCP/IP)
  实践: Cache Lab / 15-445 P3
```

---

## Phase 4: 项目冲刺 (Day 39-45) — 49h

| Day | 上午 (3h) | 下午 (3h) | 晚上 (1h) |
|-----|-----------|-----------|-----------|
| 39 | MiniDB Project 3 收尾 | 打磨 DevFlow README | 更新网站 |
| 40 | 15-445 Project 4 | 打磨 TinyShell README | 写项目博客 |
| 41 | MiniOS xv6 Lab 整理 | 打磨 ClassifyAI README | 更新简历页 |
| 42 | TinyProxy 收尾 | 所有 README 完善 | 写总结博客 |
| 43 | 录制 Demo（可选） | PDF 简历制作 | 社交链接 |
| 44 | 缓冲日：补漏复习 | 面试模拟练习 | 准备 FAQ |
| 45 | 最终检查 | 部署确认 | 🎉 |

---

## 时间预算总览

| 课程 | 天数 | 小时 | 产出 |
|------|------|------|------|
| Missing Semester | 3 | 21h | 工具熟练 + 博客 |
| CS61A | 7 | 49h | Python + 5 Labs + 博客 |
| CS188 | 7 | 49h | AI入门 + 6 Labs + 博客 |
| CSAPP | 21(穿插) | ~52h | 4-5 Labs + 博客 |
| CMU 15-445 | 21(穿插) | ~73h | 4 Projects |
| CS168S | 14(穿插) | ~40h | 5 Modules + 博客 |
| MIT 6.S083 | 14(穿插) | ~40h | 4 xv6 Labs |
| 项目开发 | 21(每天1h) | ~21h | 8 个项目 |
| 网站维护 | 穿插 | ~15h | 内容更新 |
| 整理收尾 | 7 | ~49h | 简历、面试 |
| **总计** | **45天** | **~409h** | |

**日均：~9.1h。** Phase 3 核心期日均 ~9.8h。

---

## 8 门课程依赖关系

```
Missing Semester (Day 1-3)
       │
       ▼
    CS61A (Day 4-10) ──────────────────────┐
       │                                     │
       ▼                                     ▼
    CS188 (Day 11-17)              CSAPP + 15-445 + CS168S + 6.S083
       │                              (Day 18-38 四课并行)
       ▼                                     │
    ClassifyAI 项目                          ▼
                                    TinyShell / MiniDB / TinyProxy / MiniOS 项目
```

---

## 学习技巧

1. **每 6 天休息半天** — 防止倦怠
2. **学不下去就做项目** — 换脑子
3. **每天写学习笔记** — 几条要点即可
4. **不要等「学完再做」** — 学完一个模块就动手
5. **遇到 bug 先调试 15 分钟** — 然后果断搜索
6. **善用 AI 理解概念** — 让它解释你不懂的东西，但代码要自己写
7. **WSL2 是你的主战场** — CSAPP/15-445/6.S083/CS168S 的 Lab 都在 Linux 环境
8. **网站同步更新** — 每完成一个里程碑就更新网站状态

---

> 📅 计划始于 2026年7月15日 · 预计结束于 2026年8月28日 · 加油！🚀
