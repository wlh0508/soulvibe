# LD.yaokun 專案開發紀錄 (Development Log)

## [v1.1] - 2026-03-17
### 修復部署錯誤與安全漏洞 (Deployment & Security Fix)
- **類型修復**：修正 `Hero.tsx` 的 `framer-motion` 屬性錯誤（`alternate` -> `reverse`）。
- **安全性更新**：將 Next.js 升級至 `15.1.12` 以修復 CVE-2025-66478 漏洞。
- **編譯測試**：確認 `npm run build` 成功。

