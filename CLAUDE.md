# AI 工作入口 — soulvibe
> 適用：Claude Code · Claude Cowork · Gemini Code · GitHub Copilot
> 規則：**每次開啟此專案，先讀本檔 + `docs/NEXT_SESSION.md`**

---

## 專案簡介

頌缽老師 Soulvibe 官網。Eugene 協助維護。

- **框架**：Next.js 15 + TypeScript + Tailwind CSS 3
- **動畫**：Framer Motion
- **圖示**：Lucide React
- **部署**：Vercel

---

## 核心目錄

| 路徑 | 說明 |
|------|------|
| `app/` | Next.js App Router |
| `components/` | UI 元件 |
| `public/` | 靜態資源 |
| `sessions/` | 歷史工作紀錄 |

---

## 重要文件

| 文件 | 說明 |
|------|------|
| `docs/NEXT_SESSION.md` | **下次優先任務清單**（每次開啟必讀） |
| `DEVELOPMENT_LOG.md` | 開發日誌 |
| `MIGRATION_PLAN.md` | 遷移計畫 |

---

## 常用指令

```bash
npm run dev        # 本地開發 http://localhost:3004
npm run build      # 建置檢查
git push           # Vercel 自動部署
```

---

*維護者：Eugene Lai｜更新：2026-03-19*
