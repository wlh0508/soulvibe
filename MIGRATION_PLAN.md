# Soulvibe Vercel 遷移計畫書 (Migration Plan)

## 執行進度追蹤
- [x] **Phase 1: 基礎建置**
  - [x] 初始化 `package.json` 與依賴安裝
  - [x] 搬移靜態資源至 `public/`
- [x] **Phase 2: 全域架構**
  - [x] 設定 `app/globals.css` (包含深金屬金變數)
  - [x] 實作根佈局 `app/layout.tsx` (SEO優化)
- [x] **Phase 3: 組件化重構**
  - [x] `Hero.tsx` 實作 (含 SlowZoom)
  - [x] `Navbar.tsx` 實作 (修正 Link 導入與滾動變色)
  - [x] `Reveal` 動畫組件封裝
  - [x] 遷移所有 Section 組件 (Experiences, Teacher, Science, Locations, Footer)
- [x] **Phase 4: 配置修正與優化**
  - [x] 修正 `@/` 路徑別名設定
  - [x] 修正 `Link` 導入路徑問題 (next/link)
  - [x] 強化字體大小與按鈕對比度

---
## 當前執行狀態
✅ **結構稽核完成**。
修正了 Navbar 的編譯錯誤並同步優化了全站字體大小。
Next.js 環境已準備就緒。
