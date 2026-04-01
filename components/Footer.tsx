export default function Footer() {
  return (
    <>
      <footer className="py-24 px-[5vw] border-t-4 border-[#b38728]" style={{ backgroundColor: '#1a1410' }}>
        <div className="footer-inner">
          <div>
            <span className="footer-brand-name">樺芯苑</span>
            <p className="footer-tagline">
              專為都會高壓族設計的<br />大腦離線與身心重啟空間<br /><br />
              台北・嘉義・高雄
            </p>
          </div>
          <div className="footer-col">
            <h4>快速連結</h4>
            <ul className="footer-links">
              <li><a href="#experiences">療癒體驗</a></li>
              <li><a href="#teacher">師資介紹</a></li>
              <li><a href="#science">科學實證</a></li>
              <li><a href="#locations">空間據點</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>聯絡我們</h4>
            <ul className="footer-links">
              <li><a href="https://lin.ee/r9o68Jb" target="_blank">LINE@ 官方諮詢</a></li>
              <li><a href="mailto:soulvibetw@gmail.com">電子郵件</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>© 2025 樺芯苑 HUAXIN YUAN. All rights reserved.</span>
          <a href="/terms" className="footer-links" style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textDecoration: 'none', color: 'rgba(201,169,110,0.75)' }}>
            服務條款・退款政策
          </a>
        </div>
      </footer>

      {/* Floating LINE Button — outside footer to avoid stacking context */}
      <a href="https://lin.ee/r9o68Jb" target="_blank" className="floating-line" title="LINE 預約">
        <img src="/images/logo-gold.png" className="w-8 h-8" alt="LINE" />
      </a>
    </>
  );
}
