import Reveal from "./Reveal";

export default function Experiences() {
  return (
    <section id="experiences" className="py-32 px-[5vw] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="section-eyebrow">選擇你的避風港</p>
          <h2>感受聲波，<em>或感受氣味</em></h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <Reveal delay={0.1}>
            <div className="exp-card">
              <div className="exp-card-img" style={{ backgroundImage: "url('/images/DM1.jpg')" }}></div>
              <div className="exp-card-overlay"></div>
              <div className="exp-duration">
                <strong style={{ color: 'var(--gold)' }}>60</strong>
                <span className="text-white/70 text-sm">分鐘</span>
              </div>
              <div className="exp-card-body">
                <span className="exp-tag">SOUND HEALING</span>
                <h3>深度頌缽<br />靜音體驗</h3>
                <p>尼泊爾手工缽的純粹音波，共振你的每一個細胞。讓大腦從 Beta 波自動沉入 Delta 的安靜海洋。</p>
                <a href="https://soulvibetw.com/booking" className="btn-primary">立即預約體驗</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="exp-card">
              <div className="exp-card-img" style={{ backgroundImage: "url('/images/DM2.jpg')" }}></div>
              <div className="exp-card-overlay"></div>
              <div className="exp-duration">
                <strong style={{ color: 'var(--gold)' }}>75</strong>
                <span className="text-white/70 text-sm">分鐘</span>
              </div>
              <div className="exp-card-body">
                <span className="exp-tag">DEEP HEALING</span>
                <h3>頌缽繞場<br />深層療癒</h3>
                <p>療癒師透過繞場共振，深入釋放積累已久的緊繃與阻滯能量。</p>
                <a href="https://soulvibetw.com/booking" className="btn-primary">立即預約體驗</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
