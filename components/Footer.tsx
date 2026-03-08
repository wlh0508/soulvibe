export default function Footer() {
  return (
    <footer className="bg-black py-32 px-[5vw] border-t-4 border-[#b38728]">
      <div className="footer-inner">
        <div>
          <span className="footer-brand-name text-gold-metallic text-5xl mb-6 block">樺芯苑</span>
          <p className="text-white/80 text-[1.3rem] font-medium leading-relaxed max-w-[400px]">
            專為都會高壓族設計的<br />大腦離線與身心重啟空間<br /><br />
            台北・嘉義・高雄
          </p>
        </div>
        <div>
          <h4 className="text-[#b38728] font-bold text-xl mb-10 tracking-widest uppercase">快速連結</h4>
          <div className="footer-links">
            <a href="#experiences">療癒體驗</a>
            <a href="#teacher">師資介紹</a>
            <a href="#science">科學實證</a>
            <a href="#locations">空間據點</a>
          </div>
        </div>
        <div>
          <h4 className="text-[#b38728] font-bold text-xl mb-10 tracking-widest uppercase">聯絡我們</h4>
          <div className="footer-links">
            <a href="https://lin.ee/r9o68Jb" target="_blank">LINE@ 官方諮詢</a>
            <a href="mailto:info@soulvibetw.com">電子郵件</a>
            <p className="text-white/40 mt-10 text-sm font-bold">
              © 2025 樺芯苑 HUAXIN YUAN.<br />All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating LINE Button */}
      <a href="https://lin.ee/r9o68Jb" target="_blank" className="floating-line" title="LINE 預約">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" className="w-10 h-10" alt="LINE" />
      </a>
    </footer>
  );
}
