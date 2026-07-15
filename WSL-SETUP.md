# WSL2 安装与 VS Code 远程连接指南

> 你的 WSL 似乎出了问题（输出乱码）。最好的办法是重新安装。

---

## 目录

1. [卸载旧的 WSL（如果有）](#1-卸载旧的-wsl)
2. [重新安装 WSL2](#2-重新安装-wsl2)
3. [安装 Ubuntu 发行版](#3-安装-ubuntu)
4. [配置 Ubuntu 环境](#4-配置-ubuntu-环境)
5. [VS Code 远程连接 WSL](#5-vs-code-远程连接-wsl)
6. [验证环境（C/C++/Python）](#6-验证开发环境)
7. [常见问题](#7-常见问题)

---

## 1. 卸载旧的 WSL

> 如果你之前装过 WSL 但现在坏了，先卸载。

打开 **管理员 PowerShell**（右键开始菜单 → 终端(管理员)）：

```powershell
# 1. 查看已安装的发行版
wsl --list --verbose

# 2. 注销（删除）所有发行版
wsl --unregister <发行版名称>

# 3. 如果上一步不行，直接卸载 WSL
wsl --uninstall
```

---

## 2. 重新安装 WSL2

在 **管理员 PowerShell** 中运行：

```powershell
# 一条命令搞定 WSL2 安装（需要管理员权限）
wsl --install --no-distribution
```

如果上面的命令不行，手动安装：

```powershell
# 1. 启用 WSL 功能
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

# 2. 启用虚拟机平台
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# 3. 重启电脑！
Restart-Computer
```

**重启后**，下载并安装 WSL2 内核更新包：
- 下载：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
- 双击安装

然后设置 WSL2 为默认版本：

```powershell
wsl --set-default-version 2
```

---

## 3. 安装 Ubuntu

在 **管理员 PowerShell** 中：

```powershell
# 安装 Ubuntu 24.04 LTS
wsl --install -d Ubuntu-24.04
```

或者通过 Microsoft Store 搜索 "Ubuntu 24.04 LTS" 安装。

**安装完成后**，Ubuntu 会自动启动，提示你创建用户名和密码：

```
Enter new UNIX username: saier
New password: ********
Retype new password: ********
```

> ⚠️ 密码输入时不显示字符，这是正常的。记好密码！

---

## 4. 配置 Ubuntu 环境

进入 WSL Ubuntu 后，安装开发工具：

```bash
# 更新包管理器
sudo apt update && sudo apt upgrade -y

# 安装基础工具
sudo apt install -y build-essential gcc g++ gdb make cmake

# 安装 Python
sudo apt install -y python3 python3-pip python3-venv

# 安装 Git
sudo apt install -y git

# 安装网络工具
sudo apt install -y net-tools curl wget

# 验证安装
gcc --version
g++ --version
python3 --version
git --version
```

---

## 5. VS Code 远程连接 WSL

### 5.1 安装 VS Code 扩展

在 VS Code 中按 `Ctrl+Shift+X`，搜索安装：

**必装：**
- **WSL** (`ms-vscode-remote.remote-wsl`) — 微软官方

**推荐：**
- **Remote Development** (`ms-vscode-remote.vscode-remote-extensionpack`) — 包含 WSL + SSH + Dev Containers

### 5.2 连接到 WSL

**方式一：从 VS Code 连接**

1. 打开 VS Code
2. 按 `F1` 打开命令面板
3. 输入 `WSL: Connect to WSL`，回车
4. VS Code 会在 WSL 中打开一个新窗口
5. 左下角绿色图标显示 `WSL: Ubuntu-24.04` 表示连接成功

**方式二：从 WSL 终端打开**

```bash
# 在 WSL 终端中，进入你的项目目录
cd /mnt/d/GitWarehouse/personal_website

# 用 VS Code 打开当前目录
code .
```

> `code .` 命令第一次运行时会自动安装 VS Code Server 到 WSL 中，稍等片刻即可。

### 5.3 验证连接成功

VS Code 左下角应该显示：🟢 `WSL: Ubuntu-24.04`

在 VS Code 终端中（已自动连接到 WSL），运行：

```bash
# 确认你在 Linux 环境中
uname -a         # 应该显示 Linux
whoami           # 你创建的用户名
pwd              # 当前目录
ls /mnt/d/       # 可以访问你的 D 盘文件
```

### 5.4 配置 VS Code 默认终端

在 WSL 连接的 VS Code 窗口中：
1. 按 `Ctrl+Shift+P`
2. 输入 `Terminal: Select Default Profile`
3. 选择 `bash` 或 `zsh`

---

## 6. 验证开发环境

### C/C++

```bash
# 创建测试文件
cat > hello.c << 'EOF'
#include <stdio.h>
int main() {
    printf("Hello from WSL!\n");
    return 0;
}
EOF

# 编译运行
gcc hello.c -o hello
./hello
# 输出：Hello from WSL!
```

### Python

```bash
python3 -c "print('Hello from Python in WSL!')"
```

---

## 7. 常见问题

### Q: `wsl --install` 报错或很慢？

A: 确保 Windows 更新到最新版。设置 → Windows 更新 → 检查更新。

### Q: VS Code 连不上 WSL？

A: 检查步骤：
```powershell
# 1. 确认 WSL 在运行
wsl --status

# 2. 如果 WSL 没运行，启动它
wsl

# 3. 确认 VS Code 远程服务器版本
# 在 WSL 中运行：code --version
```

### Q: WSL 中 `code .` 不工作？

A:
```bash
# 在 WSL 中安装 VS Code Server
code --install-extension ms-vscode-remote.remote-wsl
```

### Q: 忘记 WSL 用户密码？

A: 在 **管理员 PowerShell** 中：
```powershell
# 以 root 身份进入 WSL（不需要密码）
wsl -u root

# 重置密码
passwd <你的用户名>
```

### Q: WSL 占用太多磁盘空间？

A:
```powershell
# 查看 WSL 磁盘使用
wsl --system -d <发行版名> df -h /

# 压缩虚拟磁盘
diskpart
select vdisk file="C:\Users\25436\AppData\Local\Packages\...\ext4.vhdx"
compact vdisk
```

### Q: 如何彻底重装？

A:
```powershell
# 管理员 PowerShell
wsl --uninstall
# 重启电脑
# 重新安装：wsl --install
```

---

## 你的使用场景

安装好 WSL2 + VS Code 远程连接后，你在 CSAPP、CMU 15-445、CS168S、MIT 6.S083 这些课程中需要 Linux 环境做 Lab 时：

1. 打开 VS Code → F1 → `WSL: Connect to WSL`
2. 在 VS Code 中打开你的项目文件夹
3. 终端自动就是 Linux bash
4. 所有编译、运行、调试都在 Linux 环境中

**WSL 的文件系统互访：**
- Windows 文件在 WSL 中：`/mnt/d/GitWarehouse/`（对应 D:\GitWarehouse\）
- WSL 文件在 Windows 中：`\\wsl$\Ubuntu-24.04\home\saier\`

> 💡 建议：代码放在 WSL 的 Linux 文件系统中（`~/projects/`），编译运行更快。不要放在 `/mnt/d/`，因为跨文件系统 I/O 很慢。
