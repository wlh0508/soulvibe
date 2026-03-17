# 2026-03-17 修復 Vercel 部署與安全漏洞

## 目標
- [x] 修復 `Hero.tsx` 的類型錯誤 (framer-motion 11+ 語法)
- [x] 升級 Next.js 到 15.1.12 以修復 Vercel 安全漏洞 (CVE-2025-66478)

## 變更紀錄
- 修改 `components/Hero.tsx`：將 `repeatType: "alternate"` 改為 `repeatType: "reverse"`，符合 framer-motion 新版類型規範。
- 升級 `package.json`：將 `next` 與 `eslint-config-next` 從 15.1.0 升級至 15.1.12。

## 檢查清單
- [x] TypeScript 無錯誤 (npm run build 通過)
- [x] HTML 標籤正確閉合
- [x] console 無紅字
- [x] Vercel 部署成功確認

## 狀態
- 推送時間：2026-03-17
- Vercel 部署：已完成並恢復正常
