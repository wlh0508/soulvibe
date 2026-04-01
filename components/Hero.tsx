"use client";

export default function Hero() {
  return (
    <header id="hero">

      {/* ── Layer 1: Background photo ─────────────────────────── */}
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* ── Layer 2: Dark dim overlay ──────────────────────────── */}
      <div className="hero-overlay" />

      {/* ── Layer 3: Teal ambient gradient — bottom ───────────── */}
      <div className="hero-teal-overlay" aria-hidden="true" />

      {/* ── Layer 4: Main content ─────────────────────────────── */}
      <div className="hero-content">

        {/* Logo */}
        <div className="hero-logo-slot">
          <img
            src="/images/logo-gold.png"
            alt="樺芯苑"
            className="hero-logo"
          />
        </div>

        <h1 className="hero-main-title">
          給關不掉大腦的你<br />
          <em>60 分鐘</em>深層靜音
        </h1>

        <p className="hero-sub">
          不需練習冥想，只需躺下感受<br />
          為都會高壓族設計的頻率放鬆所・台北・嘉義・高雄
        </p>

        <div className="hero-cta-row">
          <a href="https://soulvibetw.com/booking" className="btn-primary">立即預約體驗</a>
          <a href="#experiences" className="btn-outline-gold">了解體驗內容</a>
        </div>

      </div>

      {/* ── Scroll hint ───────────────────────────────────────── */}
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        向下探索
      </div>

    </header>
  );
}
