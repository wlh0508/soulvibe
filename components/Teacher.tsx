import Reveal from "./Reveal";

export default function Teacher() {
  return (
    <section id="teacher" className="py-32 px-[5vw] bg-[#f5f0e8]">
      <div className="max-w-[1100px] mx-auto">
        <div className="teacher-layout">
          <Reveal>
            <div className="teacher-visual">
              <div className="teacher-rings">
                <div className="ring" style={{ width: '150px', height: '150px' }}></div>
                <div className="ring" style={{ width: '300px', height: '300px' }}></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="bowl-rim"></div>
                <div className="bowl-body"></div>
                <span className="text-[#b38728] mt-10 text-xl font-bold tracking-widest">✦ 頌缽療癒 ✦</span>
              </div>
              <div className="teacher-nameplate">
                <span className="teacher-nameplate-name">王巧慧 Cassie</span>
                <span className="teacher-nameplate-sub">SOUND HEALING PRACTITIONER</span>
              </div>
            </div>
          </Reveal>
          <div className="teacher-text">
            <Reveal delay={0.2}>
              <p className="section-eyebrow">專業師資</p>
              <h2 className="teacher-name">王巧慧 <em className="text-gold-metallic">Cassie Wang</em></h2>
              <p className="text-[#b5956e] font-bold text-[1.2rem] mb-8">樺芯苑創辦人 · 頌缽療癒師</p>
              <p className="teacher-bio">
                師承尼泊爾國寶級大師 Santa Ratna Shakya，接受最正統的喜馬拉雅頌缽療癒訓練。三年深耕超過百位個案，讓都會高壓族在一次 60 分鐘的頌缽聲波中，真正體驗到深層放鬆的可能。
              </p>
              <div className="teacher-creds">
                <div className="cred-item">🏔 師承尼泊爾國寶大師桑塔・親赴加德滿都進修</div>
                <div className="cred-item">🎓 尼泊爾頌缽協會認證・七脈輪頻率調頻訓練</div>
                <div className="cred-item">🌿 KUSU HANDMADE精油品牌台灣總代理</div>
              </div>
              <a href="https://soulvibetw.com/booking" className="btn-primary">預約與 Cassie 的療癒時光</a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
